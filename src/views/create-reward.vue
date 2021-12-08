2<template>
  <div class="mint-body">
    <template v-if="true">
      <div class="mint-tips">
        <div class="mint-title">Create a reward</div>
        <div class="mint-intro">
          Mint a personal or a community token on a fixed supply. To learn more
          about how to mint the token and how to use it, read the <br />
          <u>Minting Guide</u>
        </div>
      </div>
      <div class="mint-from">
        <div class="mint-item">
          <div class="mint-item-label g-label">Select token</div>
          <div class="mint-item-input-box">
            <div class="mint-item-input">
              <form-select 
                :list="tokenList" v-model:data="postForm.token_id"
                @onAddItem="onAddToken"
              ></form-select>
            </div>
          </div>
          <div class="mint-item-tips cover">
            Recommended Supply - 10 Million Tokens.
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Amount of Tokens</div>
          <div class="mint-item-input">
            <input class="g-input" placeholder="0" />
          </div>
          <div class="mint-item-tips">
            Recommended Supply - 10 Million Tokens.
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Whitelist</div>
          <div class="mint-item-input">
            <input class="g-input" placeholder="0" />
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Describtion</div>
          <div class="mint-item-input">
            <textarea
              class="g-textarea"
              v-model="describeText"
              placeholder="0"
            ></textarea>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">TIME <span>*</span></div>
          <div class="mint-item-input-box">
            <div class="mint-item-input">
              <from-date-picker width="100%" isRange="end"></from-date-picker>
            </div>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Cover</div>
          <div class="mint-item-input">
            <update-cover
              @success="handleAvatarSuccess"
              @before="beforeAvatarUpload"
            ></update-cover>
          </div>
        </div>
      </div>
      <div class="mint-foot">
        <div class="foot-free">Storage Fee : <span>2345432 NEAR</span></div>
        <div class="foot-btn">
          <el-button class="el-btn" round>Creat a link</el-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import FromDatePicker from "@/components/from-date-picker.vue";
import UpdateCover from "@/components/update-cover.vue";
import FormSelect from '@/components/form-select.vue';
import PageFooter from "@/components/footer.vue";
import { reactive, toRefs, ref } from "@vue/reactivity";
import * as nearAPI from 'near-api-js';
import RewardsContract from '@/contract/RewardsContract';

export default {
  components: {
    FromDatePicker,
    UpdateCover,
    FormSelect
  },
  setup() {
    const state = reactive({
      errors: {},
      tokenList: [],
      postForm: {
        total_count: '',
        token_id: ''
      }
    });
    let describeText = ref("");

    const rewardsContract = new RewardsContract(window.account, window.accountId);
    const handleAvatarSuccess = () => {};
    const beforeAvatarUpload = () => {};

    const onCreateReward = async () => {
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
      const deposit = await rewardsContract.get_task_estimate_cost({total_count: param.total_count});
      console.log({deposit});
      const response = await airDropContract.add_task(param, "300000000000000", deposit);
      console.log(response);
      proxy.$Loading.hideLoading();
    }

    return {
      ...toRefs(state),
      handleAvatarSuccess,
      beforeAvatarUpload,
      onCreateReward,
      describeText,
      onAddToken: async (token) => {
        const deposit = await rewardsContract.get_task_estimate_cost({total_count: 1});
        await rewardsContract.add_token({token_id: token}, "300000000000000", deposit);
        getTokenList();
      }
    };
  },
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