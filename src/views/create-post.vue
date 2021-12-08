<template>
  <div class="page-box">
    <div class="main-box">
      <div class="mint-tips">
        <div class="mint-title">Create a Post</div>
        <div class="mint-intro">
          Post a message that lets your friends know you
        </div>
      </div>
      <div class="mint-from">
        <div class="mint-item">
          <div class="mint-item-label g-label">Description <span>*</span></div>
          <div class="mint-item-input">
            <textarea
              class="g-textarea"
              v-model="postFrom.text"
              maxlength="600"
            ></textarea>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Photo <span>*</span></div>
          <div class="mint-item-input">
            <el-upload
              class="upload-cover"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              list-type="picture-card"
              :on-success="handleCoverSuccess"
              :before-upload="beforeCoverUpload"
            >
              <img
                v-if="false"
                src="https://img2.baidu.com/it/u=1757366683,4113258251&fm=26&fmt=auto"
                class="avatar"
              />
              <div v-else class="upload-cover-default">
                <div class="cover">
                  <img src="../assets/imgs/create-airdrop/upload.svg" /><br />
                  Drop or click here to upload image
                </div>
              </div>
            </el-upload>
          </div>
          <div class="mint-item-tips cover">
            You can upload up to nine photos
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Whether it is public or not</div>
          <div class="mint-item-input">
            <from-radio :radioList="['Yes', 'No']" @onChange="onChange"></from-radio>
          </div>
        </div>
        <div class="mint-public-box">
          <template v-if="!postFrom.is_public">
            <div class="mint-item">
              <div class="mint-item-label g-label">Select token</div>
              <div class="mint-item-input-box">
                <div class="mint-item-input">
                  <input class="g-input" placeholder="" />
                </div>
              </div>
            </div>
            <div class="mint-item">
              <div class="mint-item-label g-label">No. to Access</div>
              <div class="mint-item-input">
                <input class="g-input" placeholder="" />
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="mint-foot">
        <div class="foot-btn">
          <el-button class="el-btn" round @click="submitPost">Post</el-button>
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
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from "vue";
import FromRadio from "@/components/from-radio.vue";
export default {
  components: {
    FromRadio,
  },
  setup() {
    let { proxy } = getCurrentInstance();
    let state = reactive({
      postFrom: {
        text: "",
        account_id: window.accountId,
        imgs: ["https://img1.baidu.com/it/u=3303981320,1355171730&fm=26&fmt=auto"],
        is_public: true,
        token_id: "",
        amount_to_access: 0, // todo - 这个值不太清楚是什么
      }
    })


    // 切换单选框
    const onChange = (index) => {
      state.postFrom.is_public = !index;
    }

    // 发帖
    const submitPost = () => {
      proxy.$Message({
        message: "Success",
        type: "success"
      })
      return
      proxy.$Loading.showLoading({ 
        title: "Loading"
      })
      proxy.$axios.post.new_post(state.postFrom).then(res => {
        proxy.$Loading.hideLoading();
        if(res.success) {

        } else {
          
        }
      })
    }

    return {
      ...toRefs(state),
      onChange,
      submitPost
    };
  },
};
</script>

<style scoped lang="scss">
.page-box {
  height: 100%;
  background-color: $bak-color;
  color: #fff;
  overflow: auto;
}

.mint-tips {
  padding: 22px 0 10px 0;
  border-bottom: 1px solid #262b34;
}
.mint-title {
  font-size: 28px;
  line-height: 28px;
}
.mint-intro {
  margin-top: 10px;
  color: #969dae;
  font-size: 16px;
  line-height: 24px;
}

.mint-from {
  padding-top: 20px;
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
  .g-textarea {
    height: 204px;
  }
}
.mint-item-tips {
  margin-top: 10px;
  color: #969dae;
  font-size: 16px;
  line-height: 1;
}

.upload-cover {
  ::v-deep .el-upload {
    border-radius: 6px;
    background: #262b34 !important;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &.el-upload--picture-card {
      width: 128px;
      height: 128px;
      border: none;
    }
    .upload-cover-default {
      position: relative;
      font-size: 14px;
      width: 100%;
      height: 100%;
      .cover {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        padding: 0 8px;
        line-height: 1;
        color: #969dae;
        box-sizing: border-box;
        img {
          width: 18px;
          margin-top: 3px;
        }
      }
    }
    .avatar {
      width: 128px;
      height: 128px;
      display: block;
      object-fit: cover;
    }
  }
}
.mint-public-box {
  margin-top: 30px;
  min-height: 200px;
}
.mint-foot {
  margin-top: 29px;
  color: #969dae;
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
    padding: 48px 0 20px 0;
  }
  .mint-title {
    font-size: 40px;
  }
  .mint-intro {
    margin-top: 20px;
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
  .upload-cover {
    ::v-deep .el-upload {
      border-radius: 6px;
      background: #262b34 !important;
      border-radius: 20px;
      &.el-upload--picture-card {
        width: 250px;
        height: 250px;
      }
      .upload-cover-default {
        font-size: 28px;
        .cover {
          padding: 0 18px;
          font-size: 16px;
        }
      }
      .avatar {
        height: 250px;
      }
    }
  }
  .mint-public-box {
    margin-top: 30px;
    min-height: 300px;
  }
  .mint-foot {
    margin-top: 113px;
    color: #969dae;
  }
  .foot-agreement {
    margin-top: 60px;
    display: flex;
    .radio-group {
      margin-right: 8px;
    }
    .tips {
      color: #969dae;
      font-size: 20px;
    }
  }
}
</style>
