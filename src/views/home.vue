<template>
  <div class="page-box">
    <img src="../assets/imgs/home_topbak.png" class="top-bak-img" />
    <div class="main-box">
      <page-header class="header-box"></page-header>
      <div class="guide-box">
        <img
          class="guide-title-img"
          src="../assets/imgs/home_guide_title.png"
        />
        <div class="guide-tips">Topic goes here..</div>
        <div class="guide-content">
          Supercharge Your Community<br />
          with Social Tokens
        </div>
        <el-row align="middle">
          <el-button class="guide-operate-btn" @click="redirectCreate"
            >CREATE</el-button
          >
          <el-button class="guide-operate-btn" @click="redirectExplore"
            >EXPLORE</el-button
          >
        </el-row>
      </div>
      <el-row align="middle" class="about-box">
        <div class="about-left">
          <img
            class="about-left-img"
            src="../assets/imgs/home_about_title.svg"
          />
        </div>
        <div class="about-right">
          <div class="about-right-content">
            27s is a Web3 open platform for the creator<br />
            economy, that leverages social tokens to<br />
            enable individuals, brands and communities <br />
            to expand and monetise social<br />
            engagement.
          </div>
        </div>
      </el-row>
      <el-row align="middle" justify="space-between" class="list-box">
        <div class="item" v-for="item in 6" :key="item" @click="redirectDetail">
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
      <el-row align="middle" justify="center" class="more-box">
        <el-row align="middle" class="more-btn" @click="redirectExplore">
          <div class="more-txt">Load More</div>
          <img
            class="more-arrow-img"
            src="../assets/imgs/home_more_arrow.png"
          />
        </el-row>
      </el-row>
      <div class="bottom-box">
        <img src="../assets/imgs/home_bottom_bak.png" class="bottom-bak-img" />
        <div class="bottom-title">
          Benefits of launching your<br />
          own token
        </div>
        <el-row class="bottom-item" align="middle">
          <div class="bottom-item-content-box bottom-item-content-box-left">
            <div class="title">Rebuild social graph</div>
            <div class="content">
              Creators can establish a direct <br />
              relationship with their followers without <br />
              permission and gain ownership of their <br />
              content without any commission being taken by the platform.
            </div>
          </div>
          <img
            src="../assets/imgs/home_bottom_1.png"
            class="bottom-item-img bottom-item-img-right"
          />
        </el-row>
        <el-row class="bottom-item" align="middle">
          <img
            src="../assets/imgs/home_bottom_2.png"
            class="bottom-item-img bottom-item-img-left"
          />
          <div class="bottom-item-content-box bottom-item-content-box-right">
            <div class="title">Align creators with community</div>
            <div class="content">
              Followers will come for the exclusive contents and events as well
              as social tokens and stay to invest in creators' future returns.
              By this means, creators will also be able to expand their network
              effect and get start-up capitals with the help of their followers.
            </div>
          </div>
        </el-row>
        <el-row class="bottom-item" align="middle">
          <div class="bottom-item-content-box bottom-item-content-box-left">
            <div class="title">Sustainable Monetisation</div>
            <div class="content">
              Creators can choose to unlock tokens <br />
              linearly for sustainable revenue and <br />
              receive crowdfunding directly from their <br />
              followers and investors in exchange for their future rewards.
            </div>
          </div>
          <img
            src="../assets/imgs/home_bottom_3.png"
            class="bottom-item-img bottom-item-img-right"
          />
        </el-row>
      </div>
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
import { useRouter } from "vue-router";
import { reactive, toRefs, getCurrentInstance } from 'vue';
import { onMounted } from '@vue/runtime-core';

export default {
  setup() {
    let router = useRouter();
    let {proxy} = getCurrentInstance();
    let state = reactive({

    })
    const redirectCreate = () => {
      router.push("/create-list");
    };

    const redirectExplore = () => {
      router.push("/explore");
    };

    const redirectDetail = () => {
      router.push("/detail");
    };


    // 获取推荐数据
    const getRecommendData = () => {
      proxy.$axios.home.get_recommend_posts().then(res => {

      })
    }

    onMounted(() => {
      getRecommendData();
    })

    return {
      ...toRefs(state),
      redirectDetail,
      redirectCreate,
      redirectExplore,
    };
  },
  components: {
    pageHeader,
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
  background-color: #1f242d;
}

.header-box {
  display: none;
}

.bottom-box {
  position: relative;
}

.bottom-bak-img {
  position: absolute;
  left: -10%;
  bottom: -5%;
  width: 40%;
  transform: matrix(0.57, 0.85, -0.79, 0.58, 0, 0);
  filter: blur(40px);
}

.bottom-title {
  font-size: 42px;
  font-weight: bold;
  line-height: 52px;
  margin-bottom: 20px;
}

.bottom-item {
  margin-bottom: 66px;
}

.bottom-item-img {
  width: 100%;
}

.bottom-item-content-box {
  background: rgba(255, 255, 255, 0.07);
  box-sizing: border-box;
  padding: 20px;

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .content {
    font-size: 18px;
    color: #969dae;
    line-height: 24px;
  }

  &-left {
    padding-left: 20px;
    padding-right: 20px;
    top: 0;
    left: 0;
  }

  &-right {
    padding-left: 20px;
    padding-right: 20px;
    top: 0;
    right: 0;
  }
}

.more-box {
  margin-bottom: 40px;
}

.more-btn {
  cursor: pointer;
}

.more-txt {
  font-size: 20px;
  color: #fff;
  margin-right: 11px;
}

.more-arrow-img {
  width: 6px;
}

.list-box {
  .item {
    width: 100%;
    margin-bottom: 45px;
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
    > img {
      width: 100%;
    }
  }

  .item-bottom {
    height: 193px;
    background-color: #262b34;
    padding: 15px;
    box-sizing: border-box;
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
    transition: all 0.1s;

    &:hover {
      color: #262b34;
      background-color: #fff;
    }
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

.about-box {
  border: 1px solid rgba(255, 255, 255, 0.55);
  height: auto;
  margin-bottom: 80px;
}

.about-left {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.55);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-left-img {
  width: 150px;
}

.about-right {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-right-content {
  font-size: 18px;
  line-height: 32px;
}

.guide-box {
  padding-top: 100px;
  margin-bottom: 80px;
}

.guide-title-img {
  width: 100px;
  margin-bottom: 35px;
}

.guide-tips {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 12px;
}

.guide-content {
  font-size: 33px;
  font-weight: bold;
  margin-bottom: 25px;
}

.guide-operate-btn {
  width: 100%;
  height: 48px;
  margin-bottom: 20px;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  font-size: 16px;
  margin-left: 0;
  border-radius: 34px;
  &:last-child {
    margin-bottom: 0;
  }
}

.top-bak-img {
  position: absolute;
  z-index: 1;
  width: 80%;
  top: 0;
  right: 0;
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

@media screen and (min-width: 750px) {
  .header-box {
    display: flex;
  }

  .about-box {
    height: 332px;
  }

  .about-left {
    width: 35%;
    height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.55);
    border-bottom: 0;
  }

  .about-right {
    width: 65%;
    height: 100%;
  }

  .guide-operate-btn {
    width: 188px;
    margin-right: 30px;
    margin-bottom: 0;
    &:last-child {
      margin-right: 0;
    }
  }

  .guide-box {
    padding-top: 200px;
    margin-bottom: 155px;
  }

  .guide-title-img {
    width: 125px;
  }

  .guide-tips {
    font-size: 17px;
  }

  .guide-content {
    font-size: 55px;
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

  .bottom-item-img {
    width: 50%;

    &-left {
      margin-right: 50%;
    }

    &-right {
      margin-left: 50%;
    }
  }

  .bottom-item-content-box {
    position: absolute;
    height: 100%;
    width: 50%;
    background: rgba(255, 255, 255, 0.07);
    box-sizing: border-box;
    padding: 0;
    padding-top: 30px;

    &-left {
      padding-left: 20px;
      padding-right: 20px;
      top: 0;
      left: 0;
    }

    &-right {
      padding-left: 20px;
      padding-right: 20px;
      top: 0;
      right: 0;
    }
  }
}

@media screen and (min-width: 1200px) {
  .main-box {
    width: 1197px;
  }

  .about-left-img {
    width: 307px;
  }

  .about-right-content {
    font-size: 24px;
    line-height: 42px;
  }

  .bottom-title {
    font-size: 68px;
    line-height: 78px;
  }

  .bottom-item-content-box {
    padding-top: 88px;

    .title {
      font-size: 30px;
    }

    .content {
      font-size: 24px;
      line-height: 38px;
    }

    &-left {
      padding-left: 5%;
      padding-right: 4%;
    }

    &-right {
      padding-right: 5%;
      padding-left: 4%;
    }
  }
}
</style>
