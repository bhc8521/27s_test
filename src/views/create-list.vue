<template>
  <div class="page-box">
    <div class="main-box">
      <page-header class="header-box"></page-header>
      <div class="main-head">
        <div class="head-label">Create</div>
      </div>
      <div class="main-body">
        <div class="main-list">
          <div class="main-item big">
            <div class="main-item-content" @click="redirectMint">
              <div class="main-item-left">
                <div class="icon">
                  <img src="../assets/imgs/create/mint.png" />
                </div>
                <div class="title">Mint</div>
              </div>
              <div class="main-item-right">
                <img class="arrow" src="../assets/imgs/create/arrow.png" />
              </div>
            </div>
          </div>
          <div class="main-item">
            <div class="main-item-content" @click="redirectWallet">
              <div class="main-item-left">
                <div class="icon">
                  <img src="../assets/imgs/create/wallet.png" />
                </div>
                <div class="title">Wallet</div>
              </div>
              <div class="main-item-right">
                <img class="arrow" src="../assets/imgs/create/arrow.png" />
              </div>
            </div>
          </div>
          <div class="main-item">
            <div class="main-item-content" @click="redirectPost">
              <div class="main-item-left">
                <div class="icon">
                  <img src="../assets/imgs/create/post.png" />
                </div>
                <div class="title">Post</div>
              </div>
              <div class="main-item-right">
                <img class="arrow" src="../assets/imgs/create/arrow.png" />
              </div>
            </div>
          </div>
          <div class="main-item">
            <div class="main-item-content" @click="redirectAirdrop">
              <div class="main-item-left">
                <div class="icon">
                  <img src="../assets/imgs/create/airdrop.png" />
                </div>
                <div class="title">Airdrop</div>
              </div>
              <div class="main-item-right">
                <img class="arrow" src="../assets/imgs/create/arrow.png" />
              </div>
            </div>
          </div>
          <div class="main-item">
            <div class="main-item-content" @click="redirectLock">
              <div class="main-item-left">
                <div class="icon">
                  <img src="../assets/imgs/create/lock.png" />
                </div>
                <div class="title">Lock</div>
              </div>
              <div class="main-item-right">
                <img class="arrow" src="../assets/imgs/create/arrow.png" />
              </div>
            </div>
          </div>
          <div class="main-item">
            <div class="main-item-content" @click="redirectRewards">
              <div class="main-item-left">
                <div class="icon">
                  <img src="../assets/imgs/create/rewards.png" />
                </div>
                <div class="title">Rewards</div>
              </div>
              <div class="main-item-right">
                <img class="arrow" src="../assets/imgs/create/arrow.png" />
              </div>
            </div>
          </div>
          <div class="main-item">
            <div class="main-item-content" @click="redirectLearn">
              <div class="main-item-left">
                <div class="icon">
                  <img src="../assets/imgs/create/more.png" />
                </div>
                <div class="title">Learn more</div>
              </div>
              <div class="main-item-right">
                <img class="arrow" src="../assets/imgs/create/arrow.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import pageHeader from "@/components/header.vue";
export default {
  components: {
    pageHeader,
  },
  setup() {
    let router = useRouter();
    const redirectMint = () => {
      // router.push({path: "/create/mint"})
      router.push("/create/mint");
    };
    const redirectAirdrop = () => {
      router.push("/create/airdrop");
    };
    const redirectRewards = () => {
      router.push("/create/reward");
    };

    const redirectWallet = () => {
      router.push("/wallet");
    };
    const redirectPost = () => {
      router.push("/create/post");
    };
    const redirectLock = () => {
      router.push("/create/lock");
    };

    return {
      redirectMint,
      redirectAirdrop,
      redirectRewards,
      redirectWallet,
      redirectPost,
      redirectLock,
    };
  },
};
</script>

<style scoped lang="scss">
/* 
.page-box {
  height: 100%;
  background-color: #000;
  color: #fff;
}

.main-box {
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
  font-weight: bold;
}
.main-head {
  padding: 23px 0;
}
.head-label {
  font-size: 20px;
}

.main-item {
  padding: 30px 0;
  overflow: hidden;
  &.big {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    .main-item-content {
      height: 258px;
      .main-item-left {
        flex: 1;
        display: flex;
        align-items: center;
        .icon {
          height: 42px;
          margin-right: 14px;
        }
        .title {
          font-size: 60px;
          line-height: 154px;
        }
      }
    }
  }
}
.main-item-content {
  height: 205px;
  display: flex;
  align-items: center;
  padding: 0 34px 0 51px;
  background: #262b34;
  border-radius: 32px;
  .main-item-left {
    flex: 1;
    display: flex;
    align-items: center;
    .icon {
      height: 38px;
      margin-right: 34px;
      img {
        height: 100%;
      }
    }
    .title {
      font-size: 36px;
      line-height: 99px;
    }
  }
  .main-item-right {
    .arrow {
      width: 6px;
    }
  }
}


@media screen and (min-width: 750px) {
  .main-box {
    width: 716px;
  }
}
@media screen and (min-width: 1200px) {
  .main-box {
    width: 1097px;
  }
}
*/

.page-box {
  height: 100%;
  background-color: $bak-color;
  color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
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

.main-body {
  padding-bottom: 50px;
}

.main-item {
  padding-top: 10px;
  &.big {
    padding-bottom: 10px;
    border-bottom: 1px solid #262b34;
    .main-item-content {
      height: 98px;
    }
    .main-item-left {
      flex: 1;
      display: flex;
      align-items: center;
      .icon {
        height: 22px;
        margin-right: 14px;
      }
      .title {
        font-size: 24px;
        line-height: 50px;
      }
    }
  }
}
.main-item-content {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  height: 75px;
  padding: 0 24px 0 21px;
  background: #262b34;
  border-radius: 12px;
  cursor: pointer;
}
.main-item-left {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 2;
  .icon {
    height: 20px;
    margin-right: 14px;
    img {
      height: 100%;
    }
  }
  .title {
    font-size: 20px;
    line-height: 49px;
  }
}
.main-item-right {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  .arrow {
    width: 6px;
  }
}

.main-item-content:hover {
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(../assets/imgs/create/mask2.png);
    background-size: 100% 100%;
  }
  .main-item-left {
    justify-content: center;
    .icon {
      padding: 10px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-right: 9px !important;
    }
  }
}

@media screen and (min-width: 816px) {
  .main-box {
    width: 816px;
    // width: 375px;
    padding: 0 50px;
    margin: 0 auto;
  }

  .header-box {
    display: flex;
  }
}

// @media screen and (min-width: 1200px) {
//   .main-box {
//     width: 1197px;
//   }
// }

// @media screen and (min-width: 750px) {
//   .main-item {
//     padding-top: 30px;
//     &.big {
//       padding-bottom: 30px;
//       .main-item-content {
//         height: 258px;
//       }
//       .main-item-left {
//         .icon {
//           height: 42px;
//           margin-right: 14px;
//         }
//         .title {
//           font-size: 60px;
//           line-height: 154px;
//         }
//       }
//     }
//   }
//   .main-item-content {
//     height: 205px;
//     padding: 0 34px 0 51px;
//     border-radius: 32px;
//   }
//   .main-item-left {
//     .icon {
//       height: 38px;
//       margin-right: 34px;
//       img {
//         height: 100%;
//       }
//     }
//     .title {
//       font-size: 36px;
//       line-height: 99px;
//     }
//   }
//   .main-item-right {
//     right: 34px;
//   }

//   .main-item-content:hover {
//     .main-item-left {
//       justify-content: center;
//       .icon {
//         padding: 25px;
//         margin-right: 29px !important;
//       }
//     }
//   }
// }
</style>
