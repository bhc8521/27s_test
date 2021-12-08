<template>
  <div class="page-box">
    <div class="main-box">
      <page-header class="header-box"></page-header>
      <div class="top-box">
        <div class="top-title">Explore</div>
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
            class="top-nav-item top-nav-item-last"
            :class="{ 'top-nav-item-active': navChoose === 'post' }"
            @click="chooseNav('post')"
          >
            Post
          </div>
          <button class="top-post-btn" @click="redirectPost">
            <img
              class="top-post-btn-img"
              src="../assets/imgs/explore_post_btn.png"
            />
            <div>Post</div>
          </button>
        </el-row>
      </div>
      <el-row align="middle" justify="space-between" class="list-box">
        <div class="item" @click="redirectDetail" v-for="item in 6" :key="item">
          <div class="item-top">
            <img src="../assets/imgs/home_list_item.png" />
          </div>
          <div class="item-bottom">
            <div class="item-title">Post描述文字</div>
            <el-row
              class="item-operate-box"
              align="middle"
              justify="space-between"
            >
              <el-row align="middle">
                <img
                  class="item-user-img"
                  src="../assets/imgs/home_list_item_head.png"
                />
                <div class="item-user-name">Name</div>
              </el-row>
              <el-button class="item-operate-btn">Follow</el-button>
            </el-row>
            <el-row
              align="middle"
              justify="space-between"
              class="item-info-box"
            >
              <el-row align="middle">
                <img
                  class="item-info-box-left-img"
                  src="../assets/imgs/home_list_item_left.png"
                />
                <div>$GWJ</div>
              </el-row>
              <el-row align="middle">
                <el-row class="item-info-box-right-item" align="middle">
                  <img
                    class="item-info-box-right-item-img"
                    src="../assets/imgs/home_list_item_tick.png"
                  />
                  <div>234</div>
                </el-row>
                <el-row class="item-info-box-right-item" align="middle">
                  <img
                    class="item-info-box-right-item-img"
                    src="../assets/imgs/home_list_item_user.png"
                  />
                  <div>0</div>
                </el-row>
              </el-row>
            </el-row>
          </div>
        </div>
      </el-row>
    </div>
    <div class="footer-box">
      <div class="footer-main-box">
        <el-row class="footer-top-box" justify="space-between">
          <div class="footer-left">27s</div>
          <el-row class="footer-center">
            <div class="footer-center-list-box">
              <div class="footer-center-item">COMPANY</div>
              <div class="footer-center-item footer-center-item-weak">
                About
              </div>
              <div class="footer-center-item footer-center-item-weak">
                Support
              </div>
              <div class="footer-center-item footer-center-item-weak">
                Careers
              </div>
              <div class="footer-center-item footer-center-item-weak">
                Investment Advisor
              </div>
            </div>
            <div class="footer-center-list-box">
              <div class="footer-center-item">Community</div>
              <div class="footer-center-item footer-center-item-weak">
                Developer
              </div>
              <div class="footer-center-item footer-center-item-weak">
                Fluidity
              </div>
              <div class="footer-center-item footer-center-item-weak">Wiki</div>
            </div>
          </el-row>
          <div class="footer-right">
            <div class="footer-right-title">Social</div>
            <el-row align="middle">
              <img
                class="footer-right-list-item"
                src="../assets/imgs/footer_social_2.png"
              />
              <img
                class="footer-right-list-item"
                src="../assets/imgs/footer_social_1.png"
              />
            </el-row>
          </div>
        </el-row>
        <div class="footer-line"></div>
        <div class="footer-bottom-box">© 2021 Openart</div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/header.vue";
import pageFooter from "@/components/footer.vue";

import { useRouter } from "vue-router";
import { getCurrentInstance, reactive, toRefs } from "@vue/runtime-core";
export default {
  components: {
    pageHeader,
    pageFooter,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    let router = useRouter();
    const state = reactive({
      postData: [],
      navChoose: "all",
    });

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
            offset_timestamp: Date.now(), // todo - 如何通过时间戳分页
            limit: 10, // todo - 是限制获取的数量吗
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

    // 获取post
    const getPostsData = () => {
      getExplorePosts().then((res) => {
        if (res.success) {
        } else {
          return;
          proxy.$Message({
            message: "Error",
            type: "error",
          });
        }
      });
    };

    // 切换 nav
    const chooseNav = (choose) => {
      if (state.navChoose == choose) {
        return;
      }

      state.navChoose = choose;
      // state.list = [];

      switch (choose) {
        case "airdrop":
          getExploreItems([
            "linkdrop.bhc8521.testnet",
            `lockup-${window.accountId}.facility.bhc8521.testnet`,
            "bounty.bhc8521.testnet",
            "token.bhc8521.testnet",
            "facility.bhc8521.testnet",
          ]);
          break;
        case "post":
          getPostsData();
          break;
        case "all":
          getAll();
        default:
          break;
      }
    };

    const redirectPost = () => {
      router.push("/create/post");
    };

    const redirectDetail = () => {
      router.push("/detail");
    };


    chooseNav('all');
    return {
      ...toRefs(state),
      redirectPost,
      redirectDetail,
      getPostsData,
      chooseNav,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-box {
  background-color: #262b34;
  position: relative;
}

.footer-main-box {
  padding-right: 5%;
  padding-left: 30px;
  padding-top: 48px;
  box-sizing: border-box;
  margin: 0 auto;
}

.footer-top-box {
  margin-bottom: 42px;
}

.footer-bottom-box {
  padding-top: 34px;
  padding-bottom: 34px;
  font-size: 16px;
  color: #fff;
}

.footer-left {
  width: 100%;
  font-size: 30px;
  margin-bottom: 25px;
  font-weight: bold;
  color: #fff;
  line-height: 1;
}

.footer-line {
  position: absolute;
  bottom: 86px;
  left: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.55);
  width: 100%;
}

.footer-center {
  color: #969dae;
  width: 100%;
  margin-bottom: 35px;

  &-list-box {
    margin-right: 20px;
  }

  &-item {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  &-item-weak {
    opacity: 0.5;
  }
}

.footer-right {
  color: #969dae;
  width: 100%;

  &-title {
    margin-bottom: 20px;
  }

  &-list-item {
    margin-right: 40px;
    width: 17px;
    &:last-child {
      margin-right: 0;
    }
  }
}

@media screen and (min-width: 816px) {
  .header-box {
    display: flex;
  }
  .footer-main-box {
    width: 816px;
  }
  .footer-left {
    width: auto;
    margin-bottom: 0;
  }

  .footer-center {
    width: auto;
    margin-bottom: 0;

    &-list-box {
      margin-right: 100px;
    }
  }

  .footer-right {
    width: auto;
  }
}

@media screen and (min-width: 1200px) {
  .footer-main-box {
    width: 1197px;
  }

  .footer-center {
    &-list-box {
      margin-right: 195px;
    }
  }
}

.page-box {
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #000;
}

.list-box {
  .item {
    width: 100%;
    margin-bottom: 45px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .item-top {
    width: 100%;
    box-sizing: border-box;
    background-color: #262b34;
    display: flex;
    align-items: flex-end;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    > img {
      width: 100%;
    }
  }

  .item-bottom {
    height: 193px;
    background-color: #262b34;
    padding: 15px;
    box-sizing: border-box;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .item-title {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .item-operate-box {
    margin-bottom: 20px;
  }

  .item-user-img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin-right: 10px;
  }

  .item-user-name {
    font-size: 18px;
    font-weight: bold;
  }

  .item-operate-btn {
    width: 94px;
    height: 33px;
    background-color: transparent;
    font-size: 19px;
    color: #fff;
    padding: 0;
  }

  .item-info-box {
    border: 1px solid rgba(255, 255, 255, 0.55);
    padding: 10px 14px;
    border-radius: 47px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    &-left-img {
      width: 34px;
      margin-right: 7px;
    }

    &-right-item {
      margin-right: 17px;
      &:last-child {
        margin-right: 0;
      }
    }

    &-right-item-img {
      width: 24px;
      margin-right: 5px;
    }
  }
}

.main-box {
  position: relative;
  z-index: 2;
  padding: 0 30px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: transparent;
  color: #fff;
  img {
    display: block;
  }
}

.top-box {
  margin-bottom: 60px;
  text-align: center;
}

.top-title {
  font-size: 24px;
  padding-bottom: 27px;
}

.top-nav-box {
  position: relative;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.top-post-btn {
  cursor: pointer;
  width: 100%;
  height: 35px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #262b34;
  font-weight: bold;
  border: 0;
  margin-bottom: 23px;
  &-img {
    width: 16px;
    margin-right: 19px;
  }
}

.top-nav-item {
  position: relative;
  padding-top: 27px;
  padding-bottom: 23px;
  margin-right: 40px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;

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

@media screen and (min-width: 816px) {
  .top-post-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-bottom: 0;
    width: 138px;
    height: 48px;
    font-size: 22px;

    &-img {
      width: 20px;
    }
  }

  .top-nav-item {
    position: relative;
    margin-right: 60px;
    margin-bottom: 0;
    font-size: 20px;

    &-active {
      &::after {
        content: "";
        position: absolute;
        width: 68px;
      }
    }
  }
  .main-box {
    width: 816px;
  }

  .list-box {
    .item {
      width: 335px;
      height: 509px;
    }

    .item-top {
      height: 316px;
    }

    .item-bottom {
      height: 193px;
    }

    .item-title {
      font-size: 23px;
    }

    .item-user-name {
      font-size: 23px;
    }

    .item-info-box {
      font-size: 23px;

      &-right-item-img {
        margin-right: 10px;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .main-box {
    width: 1197px;
  }
}
</style>
