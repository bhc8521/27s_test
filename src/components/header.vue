<template>
  <el-row class="page-header" justify="space-between" align="middle">
    <img
      class="left-img"
      src="../assets/imgs/header_27s.png"
      @click="redirectHome"
    />
    <el-row class="right-box" align="middle">
      <div class="right-nav-item" @click="redirectExplore">Explore</div>
      <div class="right-nav-item" @click="redirectCreate">Create</div>
      <div class="right-nav-item">Learn</div>
      <!-- <el-button class="right-nav-item right-login-btn">Login</el-button> -->
      <div class="right-nav-item theme-btn">
        <img class="theme-btn-img" src="../assets/imgs/header_black.png" />
      </div>
      <div class="right-nav-item user-photo">
        <el-popover
          popper-class="user-menu-box"
          placement="bottom-end"
          :width="200"
          trigger="hover"
        >
          <template #reference>
            <img
              class="user-photo-img"
              src="https://img2.baidu.com/it/u=1757366683,4113258251&fm=26&fmt=auto"
            />
          </template>
          <el-row class="user-menu-top" justify="space-between" align="middle">
            <el-row align="middle">
              <img
                class="user-menu-top-left-img"
                src="../assets/imgs/header_wallet_near.svg"
              />
              <div>CHRIS.NEAR</div>
            </el-row>
            <img
              class="user-menu-top-copy-img"
              src="../assets/imgs/header_copy.svg"
            />
          </el-row>
          <div class="user-menu-list">
            <el-row
              align="middle"
              class="user-menu-item"
              @click="redirectCreate"
            >
              <el-row
                align="middle"
                justify="center"
                class="user-menu-item-left"
              >
                <img class="icon" src="../assets/imgs/user-menu/create.svg" />
              </el-row>
              <div>Create</div>
            </el-row>
            <el-row
              align="middle"
              class="user-menu-item"
              @click="redirectProfile"
            >
              <el-row
                align="middle"
                justify="center"
                class="user-menu-item-left"
              >
                <img class="icon" src="../assets/imgs/header_profile.svg" />
              </el-row>
              <div>Profile</div>
            </el-row>
            <el-row
              align="middle"
              class="user-menu-item"
              @click="redirectWallet"
            >
              <el-row
                align="middle"
                justify="center"
                class="user-menu-item-left"
              >
                <img class="icon" src="../assets/imgs/header_wallet.svg" />
              </el-row>
              <div>Wallet</div>
            </el-row>
            <el-row
              align="middle"
              class="user-menu-item"
              @click="redirectExplore"
            >
              <el-row
                align="middle"
                justify="center"
                class="user-menu-item-left"
              >
                <img class="icon" src="../assets/imgs/header_explore.svg" />
              </el-row>

              <div>Explore</div>
            </el-row>
            <el-row align="middle" iv class="user-menu-item">
              <el-row
                align="middle"
                justify="center"
                class="user-menu-item-left"
              >
                <img class="icon" src="../assets/imgs/user-menu/create.svg" />
              </el-row>
              <div>Learn</div>
            </el-row>
          </div>
          <el-row class="user-menu-exit" align="middle" justify="center">
            <img
              class="user-menu-exit-img"
              src="../assets/imgs/header_exit.svg"
            />
            <div>Log Out</div>
          </el-row>
        </el-popover>
      </div>
    </el-row>
  </el-row>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    const redirectCreate = () => {
      // router.push({path: "/create/mint"})
      router.push("/create-list");
    };

    const redirectExplore = () => {
      router.push("/explore");
    };

    const redirectHome = () => {
      // router.push({path: "/create/mint"})
      router.push("/");
    };

    const redirectProfile = () => {
      router.push("/user-profile");
    };

    const redirectWallet = () => {
      router.push("/wallet");
    };

    return {
      redirectCreate,
      redirectProfile,
      redirectWallet,
      redirectHome,
      redirectExplore,
    };
  },
};
</script>

<style lang="scss">
.user-menu-box {
  background: #222222 !important;
  border-radius: 14px !important;
  font-weight: normal;
  color: #969dae !important;
  border: 0 !important;
  padding: 0 !important;
  .el-popper__arrow {
    &::before {
      background-color: #222222 !important;
      border-color: #222 !important;
    }
  }

  .user-menu-item {
    margin-bottom: 10px;
    padding: 10px 0 10px 28px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #101217;
    }

    &-left {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #101217;
      margin-right: 35px;
      > img {
        width: 11px;
      }
    }
  }

  .user-menu-exit {
    border-top: 1px solid rgba(150, 157, 174, 0.2);
    height: 51px;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;

    &-img {
      width: 13px;
      margin-right: 26px;
    }
  }

  .user-menu-top {
    border: 1px solid #464b4e;
    border-radius: 28px;
    height: 40px;
    box-sizing: border-box;
    font-size: 12px;
    color: #969dae;
    padding: 0 15px;
    margin: 14px 14px 31px 14px;

    &-left-img {
      width: 20px;
      margin-right: 16px;
    }

    &-copy-img {
      width: 10px;
    }
  }
}
</style>

<style lang="less" scoped>
.page-header {
  padding: 5px 10px;
  .left-img {
    width: 40px;
    cursor: pointer;
    display: none;
  }

  .right-box {
    color: #fff;
    font-size: 15px;
    display: none;
  }

  .right-nav-item {
    cursor: pointer;
    margin-right: 30px;
    font-weight: bold;
    &:last-child {
      margin-right: 0;
    }
  }

  .right-login-btn {
    width: 108px;
    height: 44px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 43px;
    color: #fff;
    font-size: 15px;
  }

  .theme-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    &-img {
      width: 12px;
    }
  }

  .user-photo {
    position: relative;
    width: 36px;
    height: 36px;
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}

@media screen and (min-width: 816px) {
  .page-header {
    .left-img {
      display: block;
    }

    .right-box {
      display: flex;
    }
  }
}
</style>
