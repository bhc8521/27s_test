<template>
  <div class="page-box">
    <div class="main-box">
      <page-header class="header-box"></page-header>
      <div class="main-head">
        <div class="head-label">Create</div>
      </div>
      <div class="mint-from">
        <div class="mint-item">
          <div class="mint-item-label g-label">Background</div>
          <div class="mint-item-input">
            <el-upload
              class="upload-background"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleBackgroundSuccess"
              :before-upload="beforeBackgroundUpload"
            >
              <img
                v-if="false"
                src="https://img2.baidu.com/it/u=1757366683,4113258251&fm=26&fmt=auto"
                class="background-img"
              />
              <div v-else class="upload-background-default">
                <div class="background">
                  <img src="../assets/imgs/create-airdrop/upload.svg" />
                  Drop or click here to upload image <br />
                  <span>795*310</span>
                </div>
              </div>
            </el-upload>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Avatar</div>
          <div class="mint-item-input">
            <update-avatar
              @success="handleAvatarSuccess"
              @before="beforeAvatarUpload"
            ></update-avatar>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Email</div>
          <div class="mint-item-input">
            <input
              type="text"
              class="g-input"
              placeholder="WERV"
              v-model="editProfile.email"
              @blur="onBlurEmail"
            />
          </div>
          <div class="mint-item-err" v-if="emailIsError">Email is Error</div>
          <div class="mint-item-tips cover">
            We and our fans will contact you through this email.
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-label g-label">Bio</div>
          <div class="mint-item-input">
            <textarea
              v-model="editProfile.bio"
              class="g-textarea"
              placeholder="Tell us more about yourself"
              maxlength="600"
            ></textarea>
          </div>
        </div>
        <div class="mint-item">
          <div class="mint-item-tips">
            We and our fans will contact you through this email.
          </div>
          <div class="mint-item-input">
            <div class="media-input-box">
              <div class="media-app">
                <img src="../assets/imgs/profile-edit/website.svg" />
                <span>Website</span>
              </div>
              <input
                type="text"
                class="media-input"
                placeholder="Please copy the social media address"
              />
            </div>
            <div class="media-input-box">
              <div class="media-app">
                <img src="../assets/imgs/profile-edit/discord.svg" />
                <span>Discord</span>
              </div>
              <input
                type="text"
                class="media-input"
                placeholder="Please copy the social media address"
              />
            </div>
            <div class="media-input-box">
              <div class="media-app">
                <img src="../assets/imgs/profile-edit/instagram.svg" />
                <span>Instagrami</span>
              </div>
              <input
                type="text"
                class="media-input"
                placeholder="Please copy the social media address"
              />
            </div>
            <div class="media-input-box">
              <div class="media-app">
                <img src="../assets/imgs/profile-edit/youtube-fill.svg" />
                <span>Youtube chanel</span>
              </div>
              <input
                type="text"
                class="media-input"
                placeholder="Please copy the social media address"
              />
            </div>
            <div class="media-input-box">
              <div class="media-app">
                <img src="../assets/imgs/profile-edit/faceboo.svg" />
                <span>Facebook</span>
              </div>
              <input
                type="text"
                class="media-input"
                placeholder="Please copy the social media address"
              />
            </div>
            <div class="media-input-box">
              <div class="media-app">
                <img src="../assets/imgs/profile-edit/tiktok.svg" />
                <span>Tiktok</span>
              </div>
              <input
                type="text"
                class="media-input"
                placeholder="Please copy the social media address"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="foot-btn">
        <el-button class="el-btn" round @click="submitProfile">Save</el-button>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/header.vue";
import PageFooter from "@/components/footer.vue";
import UpdateAvatar from "@/components/update-avatar.vue";
import { reactive, toRefs, getCurrentInstance, onBeforeMount } from "vue";
export default {
  components: {
    PageHeader,
    PageFooter,
    UpdateAvatar,
  },
  setup() {
    let { proxy } = getCurrentInstance();
    let state = reactive({
      editProfile: {
        bio: "",
        avatar: "",
        background: "",
        email: "",
        media: [],
      },
      emailIsError: false, // 邮箱错误
    });

    const handleBackgroundSuccess = () => {};
    const beforeBackgroundUpload = () => {};
    const handleAvatarSuccess = () => {};
    const beforeAvatarUpload = () => {};

    // 邮箱失去焦点
    const onBlurEmail = () => {
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (!state.editProfile.email || reg.test(state.editProfile.email)) {
        state.emailIsError = false;
      } else {
        state.emailIsError = true;
      }
    };

    // 提交个人信息
    const submitProfile = () => {
      if (state.emailIsError) {
        return;
      }

      proxy.$Loading.showLoading({
        title: "Loading",
      });

      proxy.$axios.profile.edit_user_profile(state.editProfile).then((res) => {
        proxy.$Loading.hideLoading();
        if (res.success) {
          history.go(-1);
        } else {
        }
      });
    };

    const getMyProfile = () => {
      proxy.$axios.profile.get_my_profile().then((res) => {
        if (res.success) {
          state.editProfile.bio = res.data.bio;
          state.editProfile.avatar = res.data.avatar;
          state.editProfile.background = res.data.background;
          state.editProfile.email = res.data.email;
          state.editProfile.media = res.data.media;
        }
      });
    };

    onBeforeMount(() => {
      getMyProfile();
    });

    return {
      ...toRefs(state),
      onBlurEmail,
      submitProfile,
      handleBackgroundSuccess,
      beforeBackgroundUpload,
      handleAvatarSuccess,
      beforeAvatarUpload,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-box {
  height: 100%;
  background-color: $bak-color;
  color: #fff;
  overflow: auto;
}

.main-box {
  padding: 0 10px;
  font-weight: bold;
}

.header-box {
  display: none;
}
.main-head {
  padding: 23px 0;
  border-bottom: 1px solid #262b34;
}
.head-label {
  font-size: 20px;
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
  color: #ff1267;
}
.media-input-box {
  display: flex;
  padding: 0 14px;
  margin-bottom: 16px;
  background: #262b34;
  border-radius: 10px;
  font-size: 16px;
  overflow: hidden;
  .media-app {
    position: relative;
    display: flex;
    align-items: center;
    height: 56px;
    img {
      width: 24px;
      vertical-align: middle;
      margin-right: 12px;
    }
    span {
      display: none;
    }
  }
  .media-input {
    flex: 1;
    height: 56px;
    padding: 18px 0;
    border: none;
    color: #fff;
    background: #262b34;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
  }
}

.mint-item-tips {
  margin-top: 10px;
  color: #969dae;
  font-size: 16px;
}

.foot-btn {
  margin: 60px 0 300px 0;
  .el-btn {
    width: 100%;
    background: #262b34;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    &:hover {
      color: #fff;
    }
  }
}

.upload-background {
  ::v-deep .el-upload {
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 6px;
    background: #262b34 !important;
    border-radius: 10px;
    cursor: pointer;
    .upload-background-default {
      position: relative;
      font-size: 14px;
      width: 100%;
      height: 0;
      padding-bottom: 39%;
      .background {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        color: #969dae;
        border-radius: 15px;
        text-align: center;
        img {
          width: 19px;
          margin-right: 10px;
          vertical-align: middle;
        }
        span {
          display: inline-block;
          margin-top: 20px;
        }
      }
    }
    .background-img {
      height: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (min-width: 816px) {
  .header-box {
    display: flex;
  }
  .main-box {
    width: 816px;
    padding: 0 50px;
    margin: 0 auto;
  }
  .mint-item-input-box {
    width: 495px;
  }
  .mint-item-input {
    margin-top: 20px;
  }
  .mint-item-err {
    margin-top: 20px;
    padding-bottom: 0;
  }
  .mint-item-tips {
    margin-top: 30px;
    &.cover {
      margin-top: 20px;
    }
  }
  .upload-background {
    ::v-deep .el-upload {
      border-radius: 6px;
      border-radius: 20px;
      .upload-background-default {
        font-size: 20px;
        .background {
          img {
            margin-right: 23px;
          }
        }
      }
    }
  }

  .media-input-box {
    padding: 0 24px;
    margin-bottom: 20px;
    border-radius: 10px;
    font-size: 20px;
    .media-app {
      height: 56px;
      img {
        width: 24px;
        margin-right: 12px;
      }
      span {
        display: inline-block;
      }
    }
    .media-input {
      height: 56px;
      padding: 18px 0 18px 45px;
      font-size: 20px;
    }
  }
  .foot-btn {
    margin: 160px 0 300px 0;
  }
}

// @media screen and (min-width: 1200px) {
//   .main-box {
//     width: 1197px;
//   }
// }
</style>
