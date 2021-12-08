<template>
  <div class="mint-body">
    <template v-if="!isSuccess">
      <div class="mint-tips">
        <div class="mint-title">Mint a token</div>
        <div class="mint-intro">
          Mint a personal or a community token on a fixed supply. To learn more
          about how to mint the token and how to use it, read the<br />
          <u>Minting Guide</u>
        </div>
      </div>
      <div class="mint-from">
        <div class="mint-item">
          <div class="mint-item-label g-label">Name <span>*</span></div>
          <div class="mint-item-input">
            <input v-model="postFrom.name" class="g-input" placeholder="ForeFront" @blur="onBlur('name')" />
          </div>
          <div class="mint-item-err" v-if="errors.name">
            Name is required
          </div>
          <div class="mint-item-tips">
            This Can Be A Discord Server, Project Or Your Own Name.
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Symbol <span>*</span></div>
          <div class="mint-item-input">
            <input class="g-input" v-model="postFrom.symbol" placeholder="FF" @blur="onBlur('symbol')"/>
          </div>
          <div class="mint-item-err" v-if="errors.symbol">
            Symbol is reqruired
          </div>
          <div class="mint-item-tips">
            Recommended Supply - 10 Million Tokens.
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Supply</div>
          <div class="mint-item-input">
            <input class="g-input" placeholder="0" v-model="postFrom.supply" @blur="onBlur('supply')" />
          </div>
          <div class="mint-item-err" v-if="errors.supply">
            supply must be greater than 0
          </div>
          <div class="mint-item-tips">
            Recommended Supply - 10 Million Tokens.
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Token Logo</div>
          <div class="mint-item-input">
            <el-upload
              class="upload-logo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus upload-logo-icon"></i>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="mint-foot">
        <div class="foot-free">Storage Fee : <span>{{deposit}} NEAR</span></div>
        <div class="foot-btn">
          <el-button class="el-btn" round @click="onCreateMint" >Mint</el-button>
        </div>
        <!-- <div class="foot-agreement">
          <div class="radio-group">
            <img class="radio" v-if="true" src="../assets/imgs/create-mint/radio.svg">
            <img class="radio" v-else src="../assets/imgs/create-mint/radio_check.svg">
          </div>
          <div class="tips">
            I understand that these values can't be changed after deployment and I hereby accept the 
            <u>Token Agreement</u>
          </div>
        </div> -->
      </div>
    </template>
    <template v-else>
      <div class="mint-success-icon">
        <img src="@/assets/imgs/create-mint/success.png" alt="">
      </div>
      <div class="mint-success-card">
        <div class="header-info">
          <div class="img-wrap"><img src="@/assets/imgs/create-mint/min-success-logo.png" alt="logo" /></div>
          <div class="header-info-title">27S</div>
          <div class="header-info-right">27s.IO</div>
        </div>
        <div class="supply-num">12500</div>
        <div class="supply-num-tip">Total Supply</div>
        <div class="hash">
          <span>{{$route.query.transactionHashes}}</span>
          <!-- <img src="@/assets/img/create-mint/" alt=""> -->
        </div>
        <!-- <img class="bg" src="../assets/imgs/create-mint/card.png"> -->
      </div>
    </template>
  </div>
</template>

<script>
import {reactive, getCurrentInstance, toRefs, onMounted} from "vue";
import * as nearAPI from 'near-api-js';
import MintContract from '@/contract/mintContract';
import TokenContract from '@/contract/TokenContract';
import getConfig from "@/config";
import { getTxArgs } from "@/utils/util"
export default {
  setup() {
    const {proxy} = getCurrentInstance();
    proxy.$Loading.showLoading({ 
      title: "Minting"
    })

    const mintContract = new MintContract(window.account);

    let rules = {
      supply: (state) => {
        return state.postFrom.supply > 0;
      }
    };

    setTimeout(() => {
      proxy.$Loading.hideLoading()
    }, 2000)

    let state = reactive({
      errors: {},
      isSuccess: false,
      deposit: "0",
      postFrom: {
        name: "",
        icon: '',
        symbol: ""
      }
    })

    const onBlur = (key) => {
      state.errors[key] = rules[key] ? !rules[key](state) : !state.postFrom[key];
    }

    const getStorageFee = async () => {
      const deposit = await mintContract.get_token_storage_cost({token_type: 'normal'});
      state.deposit = nearAPI.utils.format.formatNearAmount(deposit);
    }
    getStorageFee();

    const onCreateMint = async () => {
      for (let key in state.errors) {
        if (state.errors[key]) return false;
      }
      
      let param = {
        token_type: 'normal',    //代码模板名称 目前只有"normal"
        name: state.postFrom.name,      //token全称
        args: JSON.stringify({
          owner_id: window.accountId,      //部署代码的账户名
          name: state.postFrom.name,         //token全称
          symbol: state.postFrom.symbol,        //token简称
          icon: state.postFrom.icon,    //token的logo,可省略   exmaple: data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 288 288'%3E%3Cg id='l' data-name='l'%3E%3Cpath d='M187.58,79.
          total_supply: nearAPI.utils.format.parseNearAmount(state.postFrom.supply) //总供应量，字符串
        })
      };
      proxy.$Loading.showLoading({ 
        title: "Minting"
      })
      const deposit = await mintContract.get_token_storage_cost({token_type: 'normal'});
      console.log({deposit});
      const response = await mintContract.deploy_token(param, "300000000000000", deposit);
      console.log(response);
      proxy.$Loading.hideLoading();
    }

    // 检查交易结果
    async function checkResult () {
      const query = this.$route.query;
      if (true) {               //(query.transactionHashes) {
        const hash = "CpA9huj2zV2ewFT5bbzPtM3jQ5Ha6wHgDtyyk8Tv46qD"  ///query.transactionHashes;
        const { nodeUrl} = getConfig(process.env.NODE_ENV);
        let provider = await new nearAPI.providers.JsonRpcProvider(nodeUrl);
        let result = await provider.sendJsonRpc("EXPERIMENTAL_tx_status", [hash, window.accountId]);
        let args = getTxArgs(result, "deploy_token")

        let tokenId = args.name + '.' + mintContract.contractId; // 如何获取tokenId？
        let res = await window.account.viewFunction(tokenId, "ft_metadata", {});
        console.log(res)
        // let metaInfo = await mintContract.ft_metadata();
        // console.log({metaInfo});
        this.isSuccess = result;
        return val;
      }
      return null;
    }

    return {
      ...toRefs(state),
      checkResult,
      onBlur,
      onCreateMint
    }
  },
  mounted() {
      this.checkResult();
  }
};
</script>

<style scoped lang="scss">
.mint-body {
  padding-bottom: 50px;
}

.mint-tips {
  padding: 22px 0;
  border-bottom: 1px solid #262b34;
}
.mint-title {
  font-size: 28px;
  line-height: 28px;
}
.mint-intro {
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
}

.mint-item {
  margin-top: 30px;
}
.mint-item-input {
  margin-top: 10px;
}
.mint-item-err {
  margin-top: 10px;
  padding-bottom: 5px;
  color: #FF1267;
}
.mint-item-tips {
  margin-top: 5px;
  color: #969dae;
  font-size: 16px;
}

.upload-logo {
  ::v-deep .el-upload {
    border-radius: 6px;
    background: #262b34 !important;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .upload-logo-icon {
      font-size: 28px;
      color: #8c939d;
      width: 63px;
      height: 63px;
      line-height: 63px;
      text-align: center;
    }
    .avatar {
      width: 63px;
      height: 63px;
      display: block;
    }
  }
}

.mint-foot {
  margin-top: 89px;
  color: #969DAE;
}
.foot-free {
  font-size: 16px;
  > span {
    display: inline-block;
    margin-left: 10px;
  }
}
.foot-btn {
  margin-top: 22px;
  .el-btn {
    width: 100%;
    background: #262B34;
    border: none;
    color: #969DAE;
    font-size: 20px;
    font-weight: bold;
    &:hover {
      color: #969DAE;
    }
  }
}
.foot-agreement {
  display: flex;
  margin-top: 40px;
  cursor: pointer;
  
  .radio-group {
    margin-right: 15px;
    position: relative;
    bottom: 6px;
  }
  .tips {
    color: #969DAE;
    font-size: 16px;
  }
}




.mint-success-icon {
  margin-top: 60px;
  text-align: center;
  .success {
    width: 80%;
  }
}
.mint-success-card {
  position: relative;
  margin: 30px auto 0;
  width: 664px;
  height: 376px;

  background: #262B34;
  border-radius: 20px;
  padding: 40px 30px;
  .bg {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 90%;
  }
  .header-info{
    display: flex;
    align-items: center;
    .img-wrap{
      width: 65.85px;
      height: 65.85px;
      border: 1.44174px solid rgba(255, 255, 255, 0.1);
      box-sizing: border-box;
      border-radius: 8.65043px;
      padding: 4px;
      vertical-align: middle;
      display: flex;
      align-items: center;
      img{
        width: 100%; 
      }
    }
    
    &-title{
      flex: 1;
      color: #FFFFFF;
      margin-left: 18px;
      font-family: Gilroy;
      font-style: normal;
      font-weight: normal;
      font-size: 25.9513px;
      line-height: 50px;
      text-align: left;
    }
    &-right{
      font-size: 30px;
      color: rgba(255,255,255,.3)
    }
  }
  .supply-num{
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 51.9026px;
    line-height: 50px;
    /* or 96% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

    border-radius: 18.7079px;
    margin-top: 20px;
  }
  .supply-num-tip{
    height: 64.6px;
    margin: 15px 0 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 25.4595px;
    line-height: 28px;
    /* or 108% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
    text-align: left;
    opacity: 0.9;
    border-radius: 18.7079px;
  }
  .hash{
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 21.2162px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    text-transform: uppercase;

    color: #FFFFFF;

    opacity: 0.6;
    border-radius: 18.7079px;
  }
}
.mint-success-link {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  opacity: 0.6;
  cursor: pointer;
  .link {
    margin-right: 3px;
  }
  u {
    font-weight: 400;
    letter-spacing: 1px
  }
}




@media screen and (min-width: 750px) {
  .mint-tips {
    padding: 48px 0;
  }
  .mint-title {
    font-size: 40px;
  }
  .mint-intro {
    margin-top: 30px;
    font-size: 20px;
    line-height: 28px;
  }
  .mint-item-input {
    margin-top: 20px;
  }
  .mint-item-err {
    margin-top: 20px;
    padding-bottom: 0;
  }
  .mint-item-tips {
    margin-top: 10px;
    font-size: 20px;
  }
  .mint-foot {
    margin-top: 169px;
  }
  .foot-free {
    font-size: 20px;
     > span {
      display: inline-block;
      margin-left: 20px;
    }
  }
  .foot-agreement {
    margin-top: 60px;
    display: flex;
    .radio-group {
      margin-right: 25px;
    }
    .tips {
      color: #969DAE;
      font-size: 20px;
    }
  }



  
  .mint-success-icon {
    margin-top: 130px;
    text-align: center;
    .success {
      width: 540px;
    }
  }
  .mint-success-card {
    position: relative;
    width: 664px;
    height: 376px;
    margin: 44px auto 0;
    text-align: center;
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .mint-success-link {
    margin-top: 61px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    opacity: 0.6;
    cursor: pointer;
    .link {
      margin-right: 3px;
    }
    u {
      font-weight: 400;
      letter-spacing: 1px
    }
  } 
}
</style>