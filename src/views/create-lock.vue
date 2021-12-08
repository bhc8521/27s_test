<template>
  <div class="mint-body">
    <template v-if="isDeploy">
      <div class="mint-tips">
        <div class="mint-title">Lock a token</div>
        <div class="mint-intro">
          It can then be unlocked linearly to ensure the trust of community
          <br />
          members
        </div>
      </div>
      <div class="mint-from">
        <div class="mint-item">
          <div class="mint-item-label g-label">Choose Token <span>*</span></div>
          <div class="mint-item-input-box">
            <div class="mint-item-input">
              <form-select 
                :list="tokenList" v-model:data="postForm.token_id"
                @change="onChange"
                @onAddItem="onAddToken"
              ></form-select>
            </div>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">
            The number of issues <span>*</span>
          </div>
          <div class="mint-item-input">
            <div class="main-item-slider">
              <!-- <div class="main-item-slider-progress" :style="{'transform': `translateX(${progress}%)`}"> -->
              <div class="main-item-slider-progress" :style="{'left': `${progress}%`}">
                {{progress}}%
              </div>
              <el-slider
                tooltip-class="mvp-main-item-slider-tooltip"
                v-model="postForm.sliderNumber"
                @input="onInput"
                :format-tooltip="(e) => {
                  return (e / 100) * number >> 0
                }"
                :step="1"
              >
              </el-slider>
              <div class="main-item-slider-label">
                Total balance: {{ number }}
              </div>
            </div>
          </div>
          <div class="mint-item-tips">Your Token Symbol (1-7 Characters), No '$' Sign Required.</div>
        </div> 
        <div class="mint-item">
          <div class="mint-item-label g-label">
            Recipient  Adrress <span>*</span>
          </div>
          <div class="mint-item-input">
            <input class="g-input recipient-adrress" placeholder="" v-model="postForm.account_list[index]" v-for="(item,index) in postForm.account_list" :key="item" />
            <div class="g-input add-input" @click="onAddAccount">
              Add
              <img src="../assets/imgs/create-lock/add.svg">
            </div>
          </div>
          <div class="mint-item-tips cover">Recommended Supply - 10 Million Tokens.</div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">
            Unlocking cycle <span>*</span>
          </div>
          <div class="mint-item-input-box">
            <div class="mint-item-input">
              <input type="text" class="g-input" v-model="postForm.vesting_period" @blur="onBlur('vesting_period')">
            </div>
          </div>
          <div class="mint-item-tips cover">End Time</div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">TIME <span>*</span></div>
          <div class="mint-item-input-box">
            <div class="mint-item-input">
              <from-date-picker width="100%" isRange="end" @onEndChange="onEndTimeChange"></from-date-picker>
            </div>
          </div>
        </div>
      </div>
      <div class="mint-foot">
        <div class="foot-free">Storage Fee : <span>2345432 NEAR</span></div>
        <div class="foot-btn">
          <el-button class="el-btn" round @click="onSubmit">Lock up</el-button>
        </div>
        <!-- <div class="foot-agreement">
          <div class="radio-group">
            <img
              class="radio"
              v-if="true"
              src="../assets/imgs/create-mint/radio.svg"
            />
            <img
              class="radio"
              v-else
              src="../assets/imgs/create-mint/radio_check.svg"
            />
          </div>
          <div class="tips">
            I understand that these values can't be changed after deployment and I hereby accept the 
            <u>Token Agreement</u>
          </div>
        </div> -->
      </div>
    </template>
    <template v-else>
      <div class="mint-tips">
        <div class="mint-title">Lock a token</div>
        <div class="mint-intro">
          It can then be unlocked linearly to ensure the trust of community
          <br />
          members
        </div>
      </div>
      <div class="mint-foot">
        <div class="foot-free">You need to store the corresponding number of Tokens for Lock up before you can excute the function</div>
        <div class="foot-btn">
          <el-button class="el-btn" round @click="deployToken" >Deploy</el-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { watch } from 'vue';
import FromDatePicker from "@/components/from-date-picker.vue";
import * as nearAPI from 'near-api-js';
import { reactive, toRefs } from "@vue/reactivity";
import FormSelect from '@/components/form-select.vue';
import LockupContract from '@/contract/LockupContract';
import FacilityContract from '@/contract/FacilityContract';
import TokenContract from '@/contract/TokenContract';
export default {
  components: {
    FromDatePicker,
    FormSelect
  },
  setup() {
    const state = reactive({
      isDeploy: true,
      describeText: "",
      number: 0,
      progress: 0,
      tokenList: [],
      postForm: {
        token_id: '',
        account_list: [],
        end_time: '',
        sliderNumber: 0,
        vesting_period: 0
      },
      errors: {}
    });


    let lockupContract = null;
    const facilityContract = new FacilityContract(window.account, window.accountId);
    // const tokenContract = new TokenContract(window.account, window.accountId);

    const getNumbers = async () => {
      if (!state.postForm.token_id) return false;
      console.log({token_id: state.postForm.token_id});
      let res = await window.account.viewFunction(state.postForm.token_id, "ft_balance_of", {account_id: window.accountId});
      state.number = nearAPI.utils.format.formatNearAmount(res);
      console.log({number: state.number});
    }

    getNumbers();

    const handleAvatarSuccess = () => {};
    const beforeAvatarUpload = () => {};


    const onInput = (e) => {
      state.progress = e;
    }

    const checkContractDeployStatus = async () => {
      const result = await facilityContract.get_creator_facilities({creator: window.accountId});
      console.log({result});
      const isDeploy = result && result.length;
      state.isDeploy = isDeploy;
      if (isDeploy) {
        lockupContract = new LockupContract(window.account, window.accountId);
        getTokenList();
      }
    }

    const deployToken = async () => {
      const deposit = await facilityContract.get_facility_storage_cost({facility_type: 'lockup'});
      const result = await facilityContract.deploy_facility({
        facility_type: "lockup",    //代码模板名称 目前只有"lockup"
        args: JSON.stringify({
            owner_id: window.accountId
        })
      },  "300000000000000", deposit);
    }
    

    const onSubmit = async () => {
      for (let key in state.errors) {
        if (state.errors[key]) return false;
      }
      
      let param = {
        token_id: '',    //代码模板名称 目前只有"normal"
        account_list: state.postFrom.account_list.join(','),      //token全称
        start_time: Date.now() * 1000,
        end_time: state.postForm.end_time,
        vesting_period: state.postForm.vesting_period,
        amount: ''
      };
      const deposit = '8550000000000000000000' || nearAPI.utils.parseNearAmount('0.0125');
      const response = await lockupContract.add_task(param, "300000000000000", deposit);
      console.log(response);
    }

    const getTokenList = async () => {
      if (!lockupContract) return false;
      const result = await lockupContract.get_token_list();
      console.log({result});
      state.tokenList = result;
    }

    checkContractDeployStatus();

    return {
      ...toRefs(state),
      handleAvatarSuccess,
      beforeAvatarUpload,
      deployToken,
      onInput,
      onSubmit,
      onAddToken: async (token) => {
        const deposit = '8550000000000000000000' || nearAPI.utils.parseNearAmount('0.0125');
        await lockupContract.add_token({token_id: token}, "300000000000000", deposit);
        getTokenList();
      },
      onChange: async (token) => {
        getNumbers();
      },
      onAddAccount: async () => {
        state.postForm.account_list.push("");
      },
      onEndTimeChange: async () => {
        state.postForm.end_time = value.getTime() * 1000;
      }
    };
  },
};
</script>

<style lang="scss">
.mvp-main-item-slider-tooltip {
  margin-bottom: 40px !important;
  background: #262B34;
  font-size: 16px;
  border-radius: 10px;
  &::after {
    content: "";

  }
}
@media screen and (min-width: 750px) {
  .mvp-main-item-slider-tooltip {
    background: #262B34;
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
<style scoped lang="scss">
.mint-body {
  padding-bottom: 50px;
}

.mint-tips {
  padding-top: 22px;
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
.mint-item-input-box {
  width: 100%;
}
.mint-item-input {
  position: relative;
  margin-top: 10px;
  .textarea-len {
    position: absolute;
    right: 19px;
    bottom: 5px;
    color: rgba(0, 0, 0, 0.3);
  }
}
.recipient-adrress {
  margin-bottom: 10px;
}
.add-input {
  background: transparent;
  border: 1px dashed #262B34;
  color: #969DAE;
  cursor: pointer;
  img {
    vertical-align: middle;
    margin-left: 20px;
    position: relative;
    bottom: 2px;
  }
}
::v-deep .main-item-slider {
  position: relative;
  margin-top: 84px;
  .main-item-slider-progress {
    position: absolute;
    transform: translateX(-50%);
    bottom: 50px;
  }
  .el-slider__runway {
    background: #262b34;
    .el-slider__bar {
      background: #fff;
    }
    .el-slider__button {
      border: 5px solid #fff;
      background: #969dae;
    }
  }
  .main-item-slider-label {
    position: absolute;
    right: 0;
    bottom: 50px;
    padding: 18px 16px;
    border-radius: 20px;
    background: #262B34;
  }
}

.mint-item-tips {
  margin-top: 10px;
  color: #969dae;
  font-size: 16px;
}



.mint-foot {
  margin-top: 89px;
  padding-bottom: 50px;
  color: #969dae;
}
.foot-free {
  color: #FF1267;
  font-size: 18px;
  > span {
    display: inline-block;
    margin-left: 10px;
  }
}
.foot-btn {
  margin-top: 29px;
  .el-btn {
    width: 100%;
    color: #fff;
    background: #262B34;
    border: none;
    font-size: 20px;
    font-weight: bold;
    &.is-disabled{
      color: #969dae;
      background: #262b34;
    }
    &:hover {
      background: #fff;
      color: #262B34;
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
    color: #969dae;
    font-size: 16px;
  }
}

@media screen and (min-width: 750px) {
  .mint-tips {
    padding-top: 48px;
  }
  .mint-title {
    font-size: 40px;
  }
  .mint-intro {
    margin-top: 30px;
    font-size: 20px;
    line-height: 28px;
  }
  .mint-item-input-box {
    width: 495px;
  }
  .mint-item-input {
    margin-top: 20px;
  }
  .mint-item-tips {
    font-size: 20px;
    margin-top: 31px;
    &.cover {
      margin-top: 20px;
    }
  }

  ::v-deep .main-item-slider {
    margin-top: 114px;
    .el-slider__runway {
      background: #262b34;
      .el-slider__bar {
        background: #fff;
      }
      .el-slider__button {
        width: 30px;
        height: 30px;
        border: 9px solid #fff;
        background: #969dae;
      }
    }
  }
  .foot-free {
    font-size: 30px;
  }
}
</style>