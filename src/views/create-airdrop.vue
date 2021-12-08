<template>
  <div class="mint-body">
    <template v-if="true">
      <div class="mint-tips">
        <div class="mint-title">Ceeat a Airdrop</div>
        <div class="mint-intro">
          Mint a personal or a community token on a fixed supply. To learn more
          about how to mint the token and how to use it, read the <br />
          <u>Minting Guide</u>
        </div>
      </div>
      <div class="mint-from">
        <div class="mint-item">
          <div class="mint-item-label g-label">Select token <span>*</span></div>
          <div class="mint-item-input-box">
            <div class="mint-item-input">
              <form-select 
                :list="tokenList" v-model:data="postForm.token_id"
                @onAddItem="onAddToken"
              ></form-select>
            </div>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">
            Amount of Tokens <span>*</span>
          </div>
          <div class="mint-item-input">
            <input class="g-input" placeholder="0" v-model="postForm.amount_per_account" @blur="onBlur('amount_per_account')"/>
          </div>
          <div class="mint-item-err" v-if="errors.amount_per_account">
            Amount of Tokens must be greater than 0
          </div>
          <div class="mint-item-tips">
            Recommended Supply - 10 Million Tokens.
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">
            Number of Recipients <span>*</span>
          </div>
          <div class="mint-item-input">
            <input class="g-input" placeholder="0" v-model="postForm.total_count" @blur="onBlur('total_count')"/>
          </div>
          <div class="mint-item-err" v-if="errors.total_count">
            Number of Recipients must be greater than 0
          </div>
          <div class="mint-item-tips">Choose the quantity created</div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">TIME <span>*</span></div>
          <div class="mint-item-input">
            <from-date-picker width="100%" isRange="all" @onStartChange="onStartTimeChange" @onEndChange="onEndTimeChange"></from-date-picker>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Cover <span>*</span></div>
          <div class="mint-item-input">
            <update-cover
              @success="handleAvatarSuccess"
              @before="beforeAvatarUpload"
            ></update-cover>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Describtion <span>*</span></div>
          <div class="mint-item-input">
            <textarea
              class="g-textarea"
              placeholder="0"
              v-model="postForm.text" @blur="onBlur('text')"
            ></textarea>
            <div class="textarea-len">{{ postForm.text.length }}/600</div>
          </div>
          <div class="mint-item-err" v-if="errors.text">
            Describtion is required
          </div>
        </div>
      </div>
      <div class="mint-foot">
        <div class="foot-free">Storage Fee : <span>{{deposit}} NEAR</span></div>
        <div class="foot-btn">
          <el-button class="el-btn" round @click="onCreateAirDrop">Creat a link</el-button>
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
            I understand that these values can't be changed after deployment and
            I hereby accept the
            <u>Token Agreement</u>
          </div>
        </div> -->
      </div>
    </template>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import FromDatePicker from "@/components/from-date-picker.vue";
import FormSelect from '@/components/form-select.vue';
import { reactive, toRefs, customRef } from "@vue/reactivity";
import AirDropContract from '@/contract/AirDropContract';
import { generatePhrase } from '@/utils/util';
import * as nearAPI from 'near-api-js';

export default {
  components: {
    FromDatePicker,
    FormSelect
  },
  setup() {
    const {proxy} = getCurrentInstance();
    const state = reactive({
      errors: {},
      deposit: '',
      postForm: {
        token_id: '',
        amount_per_account: '',
        public_key: '',
        imgs: ['https://cdn.pixabay.com/photo/2021/11/01/08/39/petit-minou-lighthouse-6759731_1280.jpg'],
        text: ''
      }
    });
    // 自定义 ref
    let describeText = ((value) => {
      return customRef((track, trigger) => {
        return {
          get() {
            track(); // 通知vue追踪数据变化
            return value;
          },
          set(newV) {
            if (newV.length <= 600) {
              value = newV;
              trigger(); // 通知vue重新解析模板
            } else {
              trigger(); // 通知vue重新解析模板
            }
          },
        };
      });
    })("");

    let rules = {
    };

    // 失焦监测
    const onBlur = (key) => {
      state.errors[key] = rules[key] ? !rules[key](state) : !state.postForm[key];
    }

    const airDropContract = new AirDropContract(window.account, window.accountId);

    const getTokenList = async () => {
      const result = await airDropContract.get_creator_token_list({creator: window.accountId});
      console.log({result});
      state.tokenList = result;
    }
    getTokenList();

    const getStorageFee = async () => {
      const deposit = await airDropContract.get_task_estimate_cost({total_count: 1});
      state.deposit = nearAPI.utils.format.formatNearAmount(deposit);
    }
    getStorageFee();

    const handleAvatarSuccess = () => {};
    const beforeAvatarUpload = () => {};

    const onStartTimeChange = (value) => {
      console.log({value});
      state.postForm.start_time = value.getTime() * 1000;
    }

    const onEndTimeChange = (value) => {
      console.log({value});
      state.postForm.end_time = value.getTime() * 1000;
    }

    const onCreateAirDrop = async () => {
      for (let key in state.errors) {
        if (state.errors[key]) return false;
      }
      
      let param = {
        ...state.postFrom
      };
      param.public_key = generatePhrase(`${param.total_count}${param.amount_per_account}${param.start_time}${param.end_time}${param.token_id}`)
      proxy.$Loading.showLoading({ 
        title: "Minting"
      })
      const deposit = await airDropContract.get_token_storage_cost({total_count: param.total_count});
      console.log({deposit});
      const response = await airDropContract.add_task(param, "300000000000000", deposit);
      console.log(response);
      proxy.$Loading.hideLoading();
    }

    return {
      ...toRefs(state),
      handleAvatarSuccess,
      beforeAvatarUpload,
      onStartTimeChange,
      onEndTimeChange,
      onBlur,
      describeText,
      onCreateAirDrop,
      onAddToken: async (token) => {
        const deposit = '8550000000000000000000' || nearAPI.utils.parseNearAmount('0.0125');
        await airDropContract.add_creator_token({token_id: token}, "300000000000000", deposit);
        getTokenList();
      }
    };
  },
};
</script>

<style scoped lang="scss">
.mint-body {
  padding-bottom: 0px;
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
.mint-item-err {
  margin-top: 10px;
  padding-bottom: 5px;
  color: #FF1267;
}
.mint-item-tips {
  margin-top: 10px;
  color: #969dae;
  font-size: 16px;
}

.mint-foot {
  margin-top: 89px;
  color: #969dae;
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
    background: #262b34;
    border: none;
    color: #969dae;
    font-size: 20px;
    font-weight: bold;
    &:hover {
      color: #969dae;
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

  .foot-agreement {
    margin-top: 60px;
    display: flex;
    .radio-group {
      margin-right: 25px;
    }
    .tips {
      color: #969dae;
      font-size: 20px;
    }
  }

  .foot-free {
    font-size: 20px;
  }
}
</style>
