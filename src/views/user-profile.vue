<template>
  <div class="container">
    <div class="content-container">
      <page-header></page-header>
      <div class="breadcrumb-container">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item>My</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="block row1">
        <div class="block-wrapper">
          <div
            class="bg-block"
            :style="{
              background: `url(${
                userInfo.background || '/src/assets/imgs/user_content_bg.png'
              }) no-repeat`,
              'background-size': 'cover',
              'background-position': 'center center',
            }"
          >
            <div class="mask">
              <div class="export-box">
                <img src="../assets/imgs/user_export.svg" class="export-img" />
              </div>
              <div class="edit-box" @click="redirectEdit">Edit</div>
            </div>
            <div class="base-info">
              <div class="base-info-wrapper">
                <!-- src="../assets/imgs/user_content_head.png" -->
                <img
                  v-if="userInfo.avatar"
                  src="../assets/imgs/user-menu/default_photo.svg"
                  class="avatar"
                />
                <img
                  v-else
                  src="../assets/imgs/user-menu/default_photo.svg"
                  class="avatar"
                  style="background: #fff"
                />
                <div class="info">
                  <div class="username">{{ userInfo.account_id || "" }}</div>
                  <div class="button-wrapper">
                    <div class="button">Creator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-container">
            <div class="col col-1">
              <div class="col-wrapper">
                <div class="desc">
                  <div class="statistics">
                    <ul class="statistics-wrapper">
                      <li class="item">
                        <div class="item-wrapper">
                          <span class="num">{{ userInfo.following || 0 }}</span
                          ><span class="title">Following</span>
                        </div>
                      </li>
                      <li class="item">
                        <div class="item-wrapper">
                          <span class="num">{{ userInfo.followers || 0 }}</span
                          ><span class="title">Followers</span>
                        </div>
                      </li>
                      <li class="item">
                        <div class="item-wrapper">
                          <span class="num">12,500</span
                          ><span class="title">Holders</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p class="text">
                    <template v-if="userInfo.bio">
                      {{ userInfo.bio }}
                    </template>
                    <template v-else>
                      <span style="color: #999"> No profile yet </span>
                    </template>
                  </p>
                </div>
                <div class="icon-link">
                  <ul class="link-wrapper">
                    <li class="item">
                      <div class="icon">
                        <img src="../assets/imgs/user_link_shape.svg" />
                      </div>
                    </li>
                    <li class="item">
                      <div class="icon">
                        <img src="../assets/imgs/user_link_camera.svg" />
                      </div>
                    </li>
                    <li class="item">
                      <div class="icon">
                        <img src="../assets/imgs/user_link_video.svg" />
                      </div>
                    </li>
                    <li class="item">
                      <div class="icon">
                        <img src="../assets/imgs/user_link_music.svg" />
                      </div>
                    </li>
                  </ul>
                  <ul class="link-wrapper">
                    <li class="item">
                      <div class="icon">
                        <img src="../assets/imgs/user_link_mail.svg" />
                      </div>
                    </li>
                    <li class="item">
                      <div class="icon">
                        <img src="../assets/imgs/user_link_message.svg" />
                      </div>
                    </li>
                    <li class="item">
                      <div class="icon">
                        <img src="../assets/imgs/user_link_link.svg" />
                      </div>
                    </li>
                    <li class="item">
                      <div class="icon">
                        <img src="../assets/imgs/user_link_meta.svg" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col col-2">
              <div class="right-card">
                <el-row
                  class="right-card-top"
                  justify="space-between"
                  align="middle"
                >
                  <el-row align="middle">
                    <el-row
                      class="right-card-top-logo-box"
                      align="middle"
                      justify="center"
                    >
                      <img
                        class="right-card-top-logo-img"
                        src="../assets/imgs/user_card_logo.svg"
                      />
                    </el-row>
                    <div>27s</div>
                  </el-row>
                  <div>Price：--</div>
                </el-row>
                <div class="right-card-center">
                  <div class="right-card-center-title">Total Supply</div>
                  <div class="right-card-center-value">10,000,000</div>
                </div>
                <el-row justify="space-between" align="middle">
                  <el-row align="middle" class="right-card-bottom-left">
                    <div class="right-card-bottom-left-link">abc.27s.near</div>
                    <img
                      class="right-card-bottom-left-img"
                      src="../assets/imgs/user_card_copy.svg"
                    />
                  </el-row>
                  <div class="right-card-bottom-right">
                    <el-button class="right-card-bottom-right-btn"
                      >Edit</el-button
                    >
                  </div>
                </el-row>
              </div>
              <el-row justify="end">
                <el-button class="right-create-btn">Create</el-button>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-row class="top-nav-box" justify="center">
          <div
            class="top-nav-item"
            :class="{ 'top-nav-item-active': navChoose === 'all' }"
            @click="chooseNav('all')"
          >
            All
          </div>
          <div
            class="top-nav-item"
            :class="{ 'top-nav-item-active': navChoose === 'airdrop' }"
            @click="chooseNav('airdrop')"
          >
            Airdrop
          </div>
          <div
            class="top-nav-item"
            :class="{ 'top-nav-item-active': navChoose === 'post' }"
            @click="chooseNav('post')"
          >
            Post
          </div>
          <div
            class="top-nav-item"
            :class="{ 'top-nav-item-active': navChoose === 'lockup' }"
            @click="chooseNav('lockup')"
          >
            Lockup
          </div>
          <div
            class="top-nav-item"
            :class="{ 'top-nav-item-active': navChoose === 'rewards' }"
            @click="chooseNav('rewards')"
          >
            Rewards
          </div>
          <div
            class="top-nav-item"
            :class="{ 'top-nav-item-active': navChoose === 'mint' }"
            @click="chooseNav('mint')"
          >
            Mint
          </div>
          <div
            class="top-nav-item top-nav-item-last"
            :class="{ 'top-nav-item-active': navChoose === 'facility' }"
            @click="chooseNav('facility')"
          >
            Facility
          </div>
        </el-row>
        <div>
          <el-row
            v-for="item in 3"
            :key="item"
            class="bottom-list-item"
            align="middle"
          >
            <img
              src="../assets/imgs/user_list_banner.png"
              class="bottom-list-item-banner-img"
            />
            <el-row align="middle" class="item-right-box">
              <div>
                <div class="item-content">
                  Post描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字Post描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字
                </div>
                <el-row align="middle" justify="space-between">
                  <el-row
                    class="item-right-bottom-left"
                    align="middle"
                    justify="space-between"
                  >
                    <el-row align="middle">
                      <img
                        src="../assets/imgs/user_list_logo.svg"
                        class="item-right-bottom-logo"
                      />
                      <div>$GWJ</div>
                    </el-row>
                    <el-row align="middle">
                      <el-row
                        align="middle"
                        class="item-right-bottom-right-item"
                      >
                        <img
                          src="../assets/imgs/user_list_user_ok.svg"
                          class="item-right-bottom-user"
                        />
                        <div>234</div>
                      </el-row>
                      <el-row
                        align="middle"
                        class="item-right-bottom-right-item"
                      >
                        <img
                          src="../assets/imgs/user_list_user.svg"
                          class="item-right-bottom-user"
                        />
                        <div>23</div>
                      </el-row>
                    </el-row>
                  </el-row>
                  <el-row class="item-right-bottom-right" align="middle">
                    <div class="item-right-bottom-date">2021-08-02</div>
                    <el-button class="item-right-bottom-btn">Edit</el-button>
                  </el-row>
                </el-row>
              </div>
            </el-row>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/header.vue";
import { useRouter, useRoute } from "vue-router";
import { reactive, getCurrentInstance, onMounted, toRefs } from "vue";
export default {
  components: {
    pageHeader,
  },
  setup() {
    let router = useRouter();
    let route = useRoute();
    let { proxy } = getCurrentInstance();
    let state = reactive({
      userInfo: {}, // 个人信息
      navChoose: "all",
      list: [],
      userId: "",
    });

    state.userId = route.query.id || "";

    const redirectEdit = () => {
      router.push("/user-profile-edit");
    };

    // 获取个人数据
    const getProfileData = () => {
      if (state.userId) {
        proxy.$axios.profile
          .get_user_profile({ account_id: state.userId })
          .then((res) => {
            if (res.success) {
              state.userInfo = res.data;
            } else {
              alert("Failed to obtain personal information");
            }
          });
      } else {
        proxy.$axios.profile.get_my_profile().then((res) => {
          if (res.success) {
            state.userInfo = res.data;
          } else {
            alert("Failed to obtain personal information");
          }
        });
      }
    };
    // 获取 post 列表数据
    const getPostsData = () => {
      proxy.$axios.profile
        .get_my_posts({
          offset_timestamp: Date.now(),
          limit: 10,
        })
        .then((res) => {
          if (res.success) {
            state.list = state.list.concat(res.data);
          }
        });
    };

    // 获取 airdrop 列表数据
    const getAirdropData = (contract_ids = []) => {
      proxy.$axios.profile
        .get_user_items({
          contract_ids,
          account_id: state.userId ? state.userId : window.accountId,
          offset_timestamp: Date.now(),
          limit: 10,
        })
        .then((res) => {
          if (res) {
            state.list = state.list.concat(res);
          }
        });
    };

    const getExploreItems = (contract_ids = []) => {
      return new Promise((resolve, reject) => {
        proxy.$axios.home
          .get_explore_items({
            offset_timestamp: Date.now(),
            contract_ids,
            limit: 10,
          })
          .then((res) => {
            resolve(res);
          });
      });
    };

    const getExplorePosts = () => {
      return new Promise((resolve, reject) => {
        proxy.$axios.home
          .get_explore_posts({
            offset_timestamp: Date.now(),
            limit: 10,
          })
          .then((res) => {
            resolve(res);
          });
      });
    };

    const getAll = () => {
      Promise.all(
        getExploreItems([
          "linkdrop.bhc8521.testnet",
          `lockup-${window.accountId}.facility.bhc8521.testnet`,
          "bounty.bhc8521.testnet",
          "token.bhc8521.testnet",
          "facility.bhc8521.testnet",
        ]),
        getExplorePosts()
      ).then((resolves) => {});
    };

    // 切换 nav
    const chooseNav = (choose) => {
      if (state.navChoose == choose) {
        return;
      }

      state.navChoose = choose;
      state.list = [];

      switch (choose) {
        case "airdrop":
          getAirdropData(["linkdrop.bhc8521.testnet"]);
          break;
        case "post":
          getPostsData();
          break;
        case "lockup":
          getAirdropData([
            `lockup-${window.accountId}.facility.bhc8521.testnet`,
          ]);
          break;
        case "rewards":
          getAirdropData(["linkdrop.bhc8521.testnet"]);
          break;
        case "mint":
          getAirdropData(["token.bhc8521.testnet"]);
          break;
        case "facility":
          getAirdropData(["facility.bhc8521.testnet"]);
          break;
        case "all":
          getAll();
        default:
          break;
      }
    };

    onMounted(() => {
      getProfileData();
    });

    return {
      ...toRefs(state),
      redirectEdit,
      chooseNav,
    };
  },
};
</script>

<style lang="scss" scoped>
/* fix */
:deep(.el-breadcrumb__item) {
  font-size: 20px;

  .el-breadcrumb__inner {
    color: #fff;
  }

  .el-icon.el-breadcrumb__separator {
    color: #fff;
  }
}

.container {
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #000;

  .content-container {
    color: #fff;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    .breadcrumb-container {
      padding: 20px 0;
      border-bottom: 1px solid rgba(212, 198, 198, 0.2);
    }

    /* content block */
    .block {
      &.row1 {
        margin: 24px 0 50px 0;

        .block-wrapper {
          .bg-block {
            position: relative;
            width: 100%;
            height: 348px;
            // background: url(../assets/imgs/user_content_bg.png) no-repeat;
            background-size: cover;
            background-position: center center;
            border-radius: 20px 20px 0 0;

            /* 半透明遮罩 */
            .mask {
              position: absolute;
              top: 1px;
              left: 0;
              width: 100%;
              height: 348px;
              background: linear-gradient(
                180deg,
                rgba(51, 51, 51, 0) 71.12%,
                #262b34 100%
              );
            }

            .export-box {
              position: absolute;
              top: 11px;
              left: 17px;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(36, 49, 81, 0.24);
            }

            .export-img {
              width: 18px;
            }

            .edit-box {
              position: absolute;
              top: 22px;
              right: 23px;
              text-align: center;
              width: 74px;
              height: 34px;
              line-height: 34px;
              background: rgba(36, 49, 81, 0.24);
              border-radius: 44px;
              color: #fff;
              font-size: 20px;
              font-weight: bold;
              cursor: pointer;
            }

            /* 基本信息 */
            .base-info {
              position: absolute;
              bottom: -64px;
              width: 100%;
              padding: 0 5vw;

              .base-info-wrapper {
                display: flex;

                .avatar {
                  width: 130px;
                  height: 130px;
                  border-radius: 50%;
                  object-fit: cover;
                }

                .info {
                  padding: 0px 30px;

                  .username {
                    padding: 10px 0 40px 0;
                    font-size: 28px;
                    font-weight: 600;
                  }

                  .button-wrapper {
                    font-size: 16px;

                    .button {
                      display: inline-block;
                      padding: 6px 18px;
                      background: #444a58;
                      border-radius: 25px;
                      color: #969dae;
                    }
                  }
                }
              }
            }
          }

          .content-container {
            display: flex;
            flex-wrap: wrap;
            min-height: 514px;
            background: #262b34;
            border-radius: 0 0 20px 20px;
            width: 100% !important;

            .col {
              height: auto;
              width: 100%;

              &.col-1 {
                padding: 0 0 0 4vw;

                .col-wrapper {
                  padding: 90px 0 0 0;
                  height: 100%;
                  display: flex;
                  flex-direction: column;

                  /* 详情 */
                  .desc {
                    flex: 1;
                    border-bottom: 1px solid #3c414d;

                    .statistics {
                      .statistics-wrapper {
                        display: flex;
                        flex-wrap: wrap;

                        .item {
                          margin-bottom: 10px;
                          &:last-child {
                            margin-bottom: 0;
                          }
                          .item-wrapper {
                            padding: 0 24px 0 0;

                            .num {
                              padding: 0 10px 0 0;
                              font-size: 20px;
                              font-weight: 600;
                            }

                            .title {
                              font-size: 16px;
                              color: #969dae;
                            }
                          }
                        }
                      }
                    }

                    .text {
                      margin: 0;
                      margin-bottom: 20px;
                      padding: 20px 20px 0 0;
                      line-height: 2.2;
                      font-size: 16px;
                    }
                  }

                  /* 图标链接 */
                  .icon-link {
                    padding: 0 0 10px 0;

                    .link-wrapper {
                      display: flex;
                      justify-content: space-between;
                      align-items: center;

                      .item {
                        padding: 20px 20px 20px 0;

                        .icon {
                          padding: 10px;
                          border: 1px solid #2f333c;
                          border-radius: 50%;
                          > img {
                            width: 18px;
                            display: block;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            .col-2 {
              border-top: 1px solid #3c414d;
              padding-top: 53px;
              padding-left: 23px;
              padding-right: 33px;
            }

            @media screen and (min-width: 1200px) {
              .col {
                flex: 1;
                width: auto;
                &.col-1 {
                  border-right: 1px solid #3c414d;
                }
              }

              .col-2 {
                border-top: 0;
                padding-top: 73px;
              }
            }

            .right-create-btn {
              border-radius: 44px;
              background-color: #fff;
              width: 124px;
              height: 54px;
              margin-bottom: 35px;
              font-size: 20px;
              font-weight: bold;
              color: #262b34;
            }

            .right-card {
              background: url("../assets/imgs/user_card_bak.png");
              background-size: cover;
              background-position: center center;
              color: #262b34;
              padding: 33px;
              margin-bottom: 35px;
              border-radius: 26px;
            }

            .right-card-top {
              font-size: 25px;
              margin-bottom: 45px;
            }

            .right-card-top-logo-box {
              width: 52px;
              height: 52px;
              border-radius: 8px;
              border: 1px solid #262b34;
              margin-right: 10px;
            }

            .right-card-top-logo-img {
              width: 43px;
            }

            .right-card-center {
              margin-bottom: 59px;
            }

            .right-card-center-title {
              font-size: 25px;
              margin-bottom: 4px;
            }

            .right-card-center-value {
              font-size: 38px;
              font-weight: 800;
            }

            .right-card-bottom-left {
              width: 100%;
              margin-bottom: 20px;
            }

            .right-card-bottom-right {
              width: 100%;
            }

            .right-card-bottom-left-link {
              font-size: 21px;
              text-decoration-line: underline;
              margin-right: 5px;
            }

            .right-card-bottom-left-img {
              width: 20px;
            }

            .right-card-bottom-right-btn {
              border: 1px solid rgba(38, 43, 52, 0.2);
              color: #262b34;
              font-weight: bold;
              background-color: transparent;
              border-radius: 44px;
              font-size: 18px;
              padding: 7px 11px;
            }

            @media screen and (min-width: 750px) {
              .right-card-bottom-left {
                width: auto;
                margin-bottom: 0;
              }

              .right-card-bottom-right {
                width: auto;
              }
            }
          }
        }
      }
    }

    .top-nav-box {
      position: relative;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      margin-bottom: 35px;
    }

    .top-nav-item {
      position: relative;
      padding-top: 27px;
      padding-bottom: 23px;
      margin-right: 40px;
      color: rgba(255, 255, 255, 0.4);
      font-size: 16px;
      cursor: pointer;

      &-last {
        margin-right: 0 !important;
      }

      &-active {
        color: #fff;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          border-radius: 34px;
          background-color: #fff;
        }
      }
    }

    .bottom-list-item {
      margin-bottom: 37px;
      &-banner-img {
        width: 100%;
        height: 350px;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .item-right-box {
        padding-left: 27px;
        padding-right: 27px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        flex: 1;
        height: auto;
        background-color: #262b34;
      }

      .item-content {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-top: 20px;
      }

      .item-right-bottom-left {
        padding: 12px 15px;
        width: 100%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 36px;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .item-right-bottom-right {
        width: 100%;
        margin-bottom: 20px;
        justify-content: flex-end !important;
      }

      .item-right-bottom-logo {
        width: 36px;
        margin-right: 7px;
      }

      .item-right-bottom-user {
        width: 25px;
      }

      .item-right-bottom-right-item {
        margin-right: 18px;
        &:last-child {
          margin-right: 0;
        }
      }

      .item-right-bottom-date {
        font-size: 20px;
        color: #969dae;
        margin-right: 18px;
      }

      .item-right-bottom-btn {
        width: 78px;
        height: 35px;
        color: #262b34;
        border-radius: 31px;
        background-color: #fff;
      }
    }

    @media screen and (min-width: 1200px) {
      .bottom-list-item {
        &-banner-img {
          width: 200px;
          height: 200px;
          border-radius: 0;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        .item-content {
          padding-top: 0;
          margin-bottom: 43px;
        }

        .item-right-box {
          border-radius: 0;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          height: 200px;
        }

        .item-right-bottom-left {
          width: 314px;
          margin-bottom: 0;
        }

        .item-right-bottom-right {
          width: auto;
          margin-bottom: 0;
        }
      }
    }
  }

  @media screen and (min-width: 750px) {
    .content-container {
      width: 716px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-container {
      width: 1100px;
    }
  }
}
</style>
