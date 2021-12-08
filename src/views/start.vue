<template>
  <div class="page-box">
    <!-- <img src="../assets/imgs/home-white/home_topbak.png" class="top-bak-img" />
    <img
      src="../assets/imgs/home-white/home_topbak2.png"
      class="top-bak-img-2"
    /> -->

    <img
      src="../assets/imgs/home-white/home_bottom_bak.png"
      class="bottom-bak-img"
    />
    <div class="bak-lottie-box" ref="page"></div>
    <div class="main-box">
      <page-header></page-header>
      <div class="guide-box">
        <img
          class="guide-title-img"
          src="../assets/imgs/home-white/header_27s.svg"
        />
        <div class="guide-content">
          Supercharge your community<br />
          with social tokens
        </div>
        <div class="guide-intro">
          A permissionless platform where anyone can issue tokens.
        </div>
        <el-row align="middle">
          <el-button class="guide-operate-btn" @click="redirectRegister"
            >Pre-Register</el-button
          >
        </el-row>
        <div class="top-bak-line"></div>
      </div>
      <el-row align="middle" justify="space-between" class="about-box">
        <div class="about-left">
          <img class="about-left-img" src="../assets/imgs/start_tokens.svg" />
        </div>
        <div class="about-right">
          <div class="about-right-content">
            Social tokens are utility tokens issued by individuals, brands and
            communities to boost network effects, enabling the issuers to build
            a mutually beneficial and robust relationship with their
            communities.
          </div>
        </div>
        <div class="top-bak-line"></div>
      </el-row>
      <div class="bottom-title">Benefits</div>
      <div class="bottom-box">
        <el-row class="bottom-item" align="middle">
          <div class="bottom-item-content-box bottom-item-content-box-left">
            <div class="title">Create independent communities</div>
            <div class="content">
              Build up a direct relationship with<br />
              your community without gatekeepers <br />to mediate your
              interactions.
            </div>
          </div>
          <img
            src="../assets/imgs/home-white/home_bottom_1.png"
            class="bottom-item-img bottom-item-img-right"
          />
        </el-row>
        <el-row class="bottom-item" align="middle">
          <img
            src="../assets/imgs/home-white/home_bottom_2.png"
            class="bottom-item-img bottom-item-img-left"
          />
          <div class="bottom-item-content-box bottom-item-content-box-right">
            <div class="title">Unlock New Monetisation Models</div>
            <div class="content">
              Unlock a variety of direct <br />
              monetisation streams and <br />opportunities that benefit both
              you<br />
              and your community alike.
            </div>
          </div>
        </el-row>
        <el-row class="bottom-item" align="middle">
          <div class="bottom-item-content-box bottom-item-content-box-left">
            <div class="title">Drive Engagement</div>
            <div class="content">
              Better understand the needs of your<br />
              supporters, and reward them for<br />
              their engagement, thus incentivising<br />
              active contribution to your<br />
              community growth.
            </div>
          </div>
          <img
            src="../assets/imgs/home-white/home_bottom_3.png"
            class="bottom-item-img bottom-item-img-right"
          />
        </el-row>
        <el-row class="bottom-item" align="middle">
          <img
            src="../assets/imgs/home-white/home_bottom_4.png"
            class="bottom-item-img bottom-item-img-left"
          />
          <div class="bottom-item-content-box bottom-item-content-box-right">
            <div class="title">Align With Your Community</div>
            <div class="content">
              Allow your fans to participate in the<br />
              upside of your work and network,<br />
              creating a powerful incentives-aligned<br />
              community.
            </div>
          </div>
        </el-row>
        <el-row class="bottom-item" align="middle">
          <div class="bottom-item-content-box bottom-item-content-box-left">
            <div class="title">Stand out</div>
            <div class="content">
              Stand out from the crowd by being<br />
              an early adopter of this new<br />
              paradigm, enlarge every community<br />
              members’ value in this evolution of<br />
              creator economy.
            </div>
          </div>
          <img
            src="../assets/imgs/home-white/home_bottom_5.png"
            class="bottom-item-img bottom-item-img-right"
          />
        </el-row>
      </div>
      <div class="bottom-card bottom-card-white">
        <div class="card-title">Unleash your true potential</div>
        <el-row align="middle">
          <el-button class="guide-operate-btn" @click="redirectRegister"
            >Pre-Register</el-button
          >
        </el-row>
        <div class="card-vice">
          Be the first to be notified when the platform is live!
        </div>
      </div>
      <div class="bottom-card bottom-card-black">
        <div class="card-title">FAQs</div>
        <div class="card-vice" @click="redirectFaq">
          <u>Got questions? Check our FAQs.</u>
        </div>
      </div>
      <div class="footer-box">
        <div class="footer-title">About 27s</div>
        <div class="footer-about">
          27s is a Web3 open platform for the creator economy, that leverages
          social tokens to enable individuals, brands and communities to expand
          and monetise social engagement.
        </div>
        <div class="footer-app">
          <div class="icon">
            <img
              src="../assets/imgs/home-white/twitter.svg"
              class="icon-normal"
            />
            <img
              src="../assets/imgs/home-white/twitter_active.svg"
              class="icon-active"
            />
          </div>
          <div class="icon">
            <img src="../assets/imgs/home-white/mail.svg" class="icon-normal" />
            <img
              src="../assets/imgs/home-white/mail_active.svg"
              class="icon-active"
            />
          </div>
          <div class="icon">
            <img src="../assets/imgs/home-white/play.svg" class="icon-normal" />
            <img
              src="../assets/imgs/home-white/play_active.svg"
              class="icon-active"
            />
          </div>
          <div class="icon">
            <img
              src="../assets/imgs/home-white/github.svg"
              class="icon-normal"
            />
            <img
              src="../assets/imgs/home-white/github_active.svg"
              class="icon-active"
            />
          </div>
          <div class="icon">
            <img
              src="../assets/imgs/home-white/medium.svg"
              class="icon-normal"
            />
            <img
              src="../assets/imgs/home-white/medium_active.svg"
              class="icon-active"
            />
          </div>
        </div>
        <div class="footer-bottom">© 2021 27s All Right Reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/header-start.vue";
import lottie from "lottie-web";
import { onMounted, ref } from "vue";
export default {
  components: {
    pageHeader,
  },
  setup() {
    const page = ref(null);
    const redirectFaq = () => {
      location.href =
        "https://27s.notion.site/FAQs-81506fb8e8ab4a68b837aee0decfb888";
    };

    const redirectRegister = () => {
      location.href = "https://0smaupbwvz0.typeform.com/to/FRGjZMut";
    };

    onMounted(() => {
      let path = `./public/data/lottie_start.json`;
      if (import.meta.env.PROD) {
        path = `http://b.innben.com/27s/data/lottie_start.json`;
      }
      lottie.loadAnimation({
        container: page.value, // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        path,
      });
    });

    return {
      redirectFaq,
      redirectRegister,
      page,
    };
  },
};
</script>

<style scoped lang="scss">
.page-box {
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #f4f5f6;
  font-family: "gilroy";
}

.bak-lottie-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.main-box {
  position: relative;
  z-index: 2;
  padding: 0 30px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: transparent;
  // color: #1F222C;
  color: #494c54;
  img {
    display: block;
  }
}
.top-bak-img {
  position: absolute;
  z-index: 1;
  width: 80%;
  top: 0;
  right: 0;
  pointer-events: none;
}
.top-bak-img-2 {
  position: absolute;
  z-index: 1;
  width: 60%;
  top: 0;
  left: 0;
  pointer-events: none;
}
.bottom-bak-img {
  position: absolute;
  z-index: 1;
  width: 50%;
  top: 600px;
  left: 0;
  pointer-events: none;
}
.guide-box {
  position: relative;
  padding: 100px 0 40px 0;
  margin-bottom: 35px;
}

.guide-title-img {
  width: 150px;
  margin-bottom: 30px;
}

.guide-tips {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 12px;
}

.guide-content {
  font-size: 33px;
  font-weight: bold;
  line-height: 114.5%;
  margin-bottom: 30px;
  font-family: "gilroyHeavy";
}
.guide-intro {
  font-size: 16px;
  margin-bottom: 15px;
}
.guide-operate-btn {
  width: 100%;
  height: 48px;
  margin-top: 22px;
  color: #fff;
  font-family: "gilroyBold";
  background-color: #1f222c;
  border: none;
  font-size: 16px;
  margin-left: 0;
  border-radius: 5px;
  animation: all 0.1s;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: #1f222c;
    border: 1px solid #1f222c;
    background-color: #fff;
  }
}
.top-bak-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 20px);
  height: 1px;
  background: #000;
  opacity: 0.2;
}

.about-box {
  position: relative;
  height: auto;
  margin-bottom: 35px;
}

.about-left {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 60px;
}

.about-left-img {
  width: 250px;
}

.about-right {
  width: 100%;
  padding: 20px 20px 50px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-right-content {
  font-size: 18px;
  line-height: 32px;
}

.bottom-title {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 40px;
  border-bottom: 1px solid #3d4a5e;
  padding-bottom: 40px;
  font-family: "gilroyHeavy";
}

.bottom-item {
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #3d4a5e;
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }

  &:nth-child(2n + 2) {
    flex-flow: column-reverse;
  }
}

.bottom-item-img {
  width: 100%;
}

.bottom-item-content-box {
  background: rgba(255, 255, 255, 0.07);
  box-sizing: border-box;
  width: 100%;

  .title {
    font-size: 24px;
    font-weight: bold;
    font-family: "gilroyBold";
    padding-bottom: 10px;
    margin-bottom: 40px;
  }

  .content {
    font-size: 18px;
    color: #1f222c;
    opacity: 0.6;
    line-height: 24px;
    margin-bottom: 30px;
  }

  &-left,
  &-right {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 20px;
    top: 0;
  }
  &-left {
    left: 0;
    margin-bottom: 20px;
  }
  &-right {
    right: 0;
  }
}

.bottom-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  color: rgba(31, 34, 44, 0.8);
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw - 20px);
    height: 100%;
    z-index: -1;
  }
  &-white {
    &::before {
      background: #fff;
    }
  }
  &-black {
    height: 250px;
    text-align: center;
    &::before {
      background: #f4f5f6;
    }
    .card-vice {
      letter-spacing: 0.115em;
      cursor: pointer;
    }
  }
  .card-title {
    width: 100%;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 20px;
    font-family: "gilroyHeavy";
  }

  .guide-operate-btn {
    margin-top: 0;
    margin-bottom: 30px;
  }
  .card-vice {
    font-size: 18px;
  }
}

.footer-box {
  position: relative;
  padding-top: 44px;
  padding-bottom: 15px;
  color: rgba(31, 34, 44, 0.8);
  box-sizing: border-box;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw - 20px);
    height: 100%;
    background: #fff;
    z-index: -1;
  }
  .footer-title {
    font-weight: bold;
    font-family: "gilroyHeavy";
    font-size: 28px;
  }
  .footer-about {
    margin-top: 26px;
    margin-bottom: 50px;
    font-size: 16px;
    line-height: 23px;
    color: rgba(31, 34, 44, 0.6);
  }
  .footer-app {
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    .icon {
      width: 32px;
      height: 32px;
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.1s;
      img {
        width: 100%;
      }
      &:hover {
        .icon-normal {
          display: none;
        }

        .icon-active {
          display: block;
        }
      }
    }

    .icon-active {
      display: none;
    }
  }
  .footer-bottom {
    position: relative;
    margin-top: 20px;
    padding-top: 21px;
    font-size: 16px;
    line-height: 25px;
    color: #1f222c;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100vw - 20px);
      height: 1px;
      background: #1f222c;
      z-index: -1;
    }
  }
}

@media screen and (min-width: 816px) {
  .about-left-img {
    width: 419px;
  }
  .main-box {
    width: 816px;
    padding: 0;
  }
  // .top-bak-line {
  //   width: calc(100vw - 20px);
  // }
  .guide-operate-btn {
    width: 239px;
    height: 76px;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: bold;
    &:last-child {
      margin-right: 0;
    }
  }

  .guide-box {
    padding: 200px 0 69px 0;
    margin-bottom: 155px;
  }

  .guide-title-img {
    width: 309.81px;
  }

  .guide-tips {
    font-size: 17px;
  }

  .guide-content {
    font-size: 55px;
  }
  .guide-intro {
    font-size: 26px;
    line-height: 157.5%;
  }

  .about-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 155px;
    margin-bottom: 85px;
  }

  .about-right-content {
    font-size: 26px;
    line-height: 157.5%;
  }
  .about-left {
    width: 419px;
    height: 100%;
    border-bottom: 0;
    margin-right: 0;
  }

  .about-right {
    width: 536px;
    height: 100%;
  }

  .bottom-title {
    text-align: left;
    font-size: 42px;
    line-height: 42px;
    margin-bottom: 60px;
    border-bottom: 0;
  }

  .bottom-item {
    margin-bottom: 90px;
    border-bottom: 0;
  }

  .bottom-title {
    font-size: 66px;
  }

  .bottom-item-content-box {
    text-align: left;
    position: absolute;
    height: 100%;
    width: 45%;
    background: rgba(255, 255, 255, 0.07);
    box-sizing: border-box;
    padding: 0;
    border-top: 1px solid #3d4a5e;
    justify-content: flex-start;
    padding-top: 7%;
    .title {
      font-size: 30px;
      padding-bottom: 20px;
      margin-bottom: 25px;
    }

    .content {
      font-size: 21px;
      line-height: 30px;
    }

    &-left {
      margin-bottom: 0;
      margin-right: 5%;
    }

    &-right {
      margin-top: 0;
      margin-left: 5%;
    }
  }
  .bottom-item-img {
    width: 50%;

    &-left {
      margin-right: 50%;
    }

    &-right {
      margin-left: 50%;
    }
  }

  .bottom-card {
    height: 450px;
    text-align: center;
    // &::before {
    //   width: calc(100vw - 20px);
    // }
    &-black {
      height: 400px;
    }
    .card-title {
      font-size: 46.5px;
      line-height: 84.5%;
    }
    .card-vice {
      margin-top: 16px;
      font-size: 26px;
      line-height: 157.5%;
    }
    .guide-operate-btn {
      width: 495px;
      height: 55px;
      margin: 50px auto 40px auto;
      padding: 0%;
      line-height: 55px;
    }
  }
  .footer-box {
    height: 400px;
    padding-top: 74px;
    text-align: left;
    // &::before {
    //   width: calc(100vw - 20px);
    // }
    .footer-title {
      font-size: 32px;
    }
    .footer-about {
      margin-top: 36px;
      font-size: 20px;
    }
    .footer-app {
      justify-content: left;
      margin-top: 32px;
      margin-bottom: 80px;
      .icon {
        width: 40px;
        height: 40px;
        margin-right: 14px;
      }
    }

    .footer-bottom {
      padding-bottom: 20px;

      &::after {
        content: "";
        position: absolute;
        width: calc(100vw - 20px);
        left: 50%;
        transform: translateX(-50%);
        height: calc(100% - 1px);
        top: 1px;
        z-index: -1;
        background-color: #fff;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .guide-content {
    font-size: 66.5px;
  }
  .bottom-item-content-box {
    .title {
      font-size: 40px;
      padding-bottom: 38px;
      margin-bottom: 37px;
    }

    .content {
      font-size: 26px;
      line-height: 40px;
    }
  }
  .main-box {
    width: 1197px;
  }
}

/*
@media screen and (min-width: 1200px) {
  .main-box {
    width: 1197px;
  }
  .guide-box {
    margin-bottom: 205px;
  }
  .about-box {
    padding-bottom: 205px;
  }
  .about-left-img {
    width: 419px;
  }
  .about-right {
    width: 536px;
  }
  .bottom-title {
    font-size: 66.5px;
    line-height: 114.5%;
    margin-bottom: 78px;
  }

  .bottom-item {
    margin-bottom: 110px;
  }

  .bottom-item-content-box {
    .title {
      font-size: 40px;
      line-height: 157.5%;
      padding-bottom: 58px;
      margin-bottom: 57px;
    }
    .content {
      font-size: 26px;
      line-height: 157.5%;
    }
  }
  .bottom-item-img {
    width: 550px;
  }
  .bottom-card {
    height: 483px;
    &-black {
      height: 392px;
    }
    .card-title {
      font-size: 66.5px;
      line-height: 114.5%;
    }
    .card-vice {
      margin-top: 23px;
      font-size: 26px;
      line-height: 157.5%;
    }
    .guide-operate-btn {
      width: 695px;
      height: 68px;
      margin: 75px auto 0;
    }
  }

  .footer-box {
    height: 500px;
    padding-top: 94px;
    .footer-title {
      line-height: 114%;
      font-size: 46px;
    }
    .footer-about {
      margin-top: 46px;
      line-height: 157%;
      font-size: 20px;
    }
    .footer-app {
      margin-top: 52px;
      .icon {
        width: 48px;
        height: 48px;
        margin-right: 20px;
      }
    }
    .footer-bottom {
      margin-top: 89px;
    }
  }
}
*/
</style>
