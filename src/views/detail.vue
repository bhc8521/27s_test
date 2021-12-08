<template>
  <div class="page-box">
    <div class="main-box">
      <page-header></page-header>
      <el-row align="middle">
        <el-row class="back-box" align="middle" @click="back">
          <img src="../assets/imgs/detail_back.svg" class="back-img" />
          <div>Back</div>
        </el-row>
      </el-row>
      <el-row justify="space-between">
        <div class="swiper-box">
          <swiper class="swiper-main-box" @swiper="setListSwiper">
            <swiper-slide
              class="swiper-item"
              v-for="(item, index) in list"
              :key="index"
            >
              <img :src="item" />
            </swiper-slide>
            <el-row
              align="middle"
              justify="center"
              class="list-swiper-btn list-swiper-btn-left"
              v-if="listSwiper && listSwiper.activeIndex > 0"
              @click="listSwiperPrev"
            >
              <img src="../assets/imgs/detail_arrow_left.svg" />
            </el-row>
            <el-row
              align="middle"
              justify="center"
              class="list-swiper-btn list-swiper-btn-right"
              @click="listSwiperNext"
              v-if="listSwiper && listSwiper.activeIndex < list.length - 1"
            >
              <img src="../assets/imgs/detail_arrow_right.svg" />
            </el-row>
          </swiper>
          <el-row class="swiper-list-box" justify="center" align="middle">
            <img
              v-for="(item, index) in list"
              class="swiper-list-item"
              :class="{
                'swiper-list-item-active':
                  listSwiper && listSwiper.activeIndex == index,
              }"
              :key="index"
              :src="item"
            />
          </el-row>
        </div>
        <div class="info-box">
          <div class="info-item-box info-user-box">
            <el-row align="middle" class="info-top-user-box">
              <img
                src="../assets/imgs/detail_user_head.png"
                class="info-top-head"
              />
              <div>
                <div class="info-top-name">Gift Habeshaw</div>
                <div class="info-top-date">2021-09-21</div>
              </div>
            </el-row>
            <el-row class="info-top-detail-item" justify="space-between">
              <div>
                <div class="info-top-detail-item-value">234</div>
                <div class="info-top-detail-item-title">HodLer</div>
              </div>
              <div>
                <div class="info-top-detail-item-value">234</div>
                <div class="info-top-detail-item-title">Tatol Followers</div>
              </div>
              <div>
                <div class="info-top-detail-item-value">234</div>
                <div class="info-top-detail-item-title">Followed</div>
              </div>
            </el-row>
            <el-row
              class="info-center-box"
              align="middle"
              justify="space-between"
            >
              <el-row align="middle">
                <img
                  class="info-center-logo"
                  src="../assets/imgs/home_list_item_left.png"
                />
                <div class="info-center-name">$GWJ</div>
              </el-row>
              <div>234323</div>
            </el-row>
            <div class="info-bottom-box">
              <div class="info-bottom-content">
                DescriptionDescriptionDescriptionDescription34335345354535DescriptionDescriptionDescriptionDescription34335345354535Description
              </div>
              <div class="info-bottom-link">unfold</div>
            </div>
          </div>
          <div class="info-item-box info-number-box">
            <div class="info-number-title">No. to Access</div>
            <el-row align="middle">
              <img
                src="../assets/imgs/home_list_item_left.png"
                class="info-number-result-logo"
              />
              <div class="info-number-result-value">122.00</div>
            </el-row>
          </div>
          <button class="info-share-btn">
            <img
              src="../assets/imgs/detail_share_btn.svg"
              class="info-share-btn-img"
            />
            <div>share</div>
          </button>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/header.vue";
import { toRefs, reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import list1 from "@/assets/imgs/detail_list_1s.png";
import list2 from "@/assets/imgs/detail_list_2s.png";
import list3 from "@/assets/imgs/detail_list_3s.png";
export default {
  components: {
    pageHeader,
    Swiper,
    SwiperSlide,
  },

  setup() {
    let state = reactive({
      list: [list1, list2, list3],
      listSwiper: null,
    });

    const setListSwiper = (swiper) => {
      state.listSwiper = swiper;
    };

    const listSwiperPrev = () => {
      if (state.listSwiper) {
        state.listSwiper.slidePrev();
      }
    };

    const listSwiperNext = () => {
      if (state.listSwiper) {
        state.listSwiper.slideNext();
      }
    };

    const back = () => {
      history.go(-1);
    };

    return {
      back,
      setListSwiper,
      listSwiperPrev,
      listSwiperNext,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.page-box {
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #000;
}

.info-box {
  width: 100%;
}

.info-item-box {
  background: #262b34;
  border: 1px solid #262b34;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 17px 18px;
}

.info-top-user-box {
  margin-bottom: 49px;
}

.info-top-head {
  width: 54px;
  height: 54px;
  object-fit: cover;
  margin-right: 10px;
}

.info-top-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 3px;
}

.info-top-date {
  color: #969dae;
  font-size: 16px;
}

.info-top-detail-item {
  margin-bottom: 20px;
  margin-right: 12px;
  text-align: center;
  &:last-child {
    margin-right: 0;
  }
  &-value {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 7px;
  }

  &-title {
    font-size: 16px;
    color: #969dae;
  }
}

.info-center-box {
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 40px;
  padding: 12px 14px;
  margin-bottom: 40px;
  font-size: 16px;
}

.info-center-name {
  font-size: 20px;
  font-weight: bold;
}

.info-center-logo {
  width: 34px;
  margin-right: 14px;
}

.info-bottom-box {
  color: #969dae;
  font-size: 16px;
}

.info-bottom-content {
  margin-bottom: 4px;
  line-height: 28px;
  word-wrap: break-word;
}

.info-bottom-link {
  font-size: 16px;
  text-decoration-line: underline;
  color: #ffffff;
}

.info-user-box {
  margin-bottom: 20px;
}

.info-number-box {
  padding-top: 16px;
  margin-bottom: 50px;
}

.info-number-title {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
}

.info-number-result-logo {
  width: 34px;
  margin-right: 14px;
}

.info-number-result-value {
  font-size: 30px;
  font-weight: bold;
}

.info-share-btn {
  width: 100%;
  height: 58px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background: transparent;
  color: #fff;

  &-img {
    width: 18px;
    margin-right: 13px;
  }
}

.main-box {
  color: #fff;
  margin: 0 auto;
  padding: 0 20px 50px 20px;
  box-sizing: border-box;
  background-color: transparent;
}

.back-box {
  padding-left: 15px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
}

.back-img {
  width: 7px;
  margin-right: 13px;
}

.swiper-box {
  width: 100%;
  position: relative;
  user-select: none;
  margin-bottom: 29px;
}

@media screen and (min-width: 1200px) {
  .swiper-box {
    width: 740px;
    margin-bottom: 0;
  }

  .info-box {
    width: 292px;
  }
}

.swiper-main-box {
  margin-bottom: 29px;
}

::v-deep .swiper-item {
  > img {
    width: 100%;
    height: 440px;
    object-fit: cover;
    border-radius: 20px;
  }
}

::v-deep .swiper-wrapper {
  z-index: 1;
}

::v-deep .list-swiper-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(16, 18, 23, 0.3);
  opacity: 0.9;
  z-index: 2;
  cursor: pointer;

  > img {
    width: 12px;
  }

  &-left {
    left: 24px;
  }

  &-right {
    right: 24px;
  }
}

.swiper-list-box {
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  justify-content: flex-start !important;
}

.swiper-list-item {
  margin-right: 27px;
  width: 74px;
  height: 74px;
  border-radius: 10px;
  object-fit: cover;

  &-active {
    width: 92px;
    height: 92px;
    border: 4px solid #ff1267;
    box-sizing: border-box;
  }

  &:last-child {
    margin-right: 0;
  }
}

@media screen and (min-width: 750px) {
  .swiper-list-box {
    justify-content: center !important;
  }
  .main-box {
    width: 716px;
  }

  ::v-deep .swiper-item {
    > img {
      height: 740px;
    }
  }
}

@media screen and (min-width: 1200px) {
  .main-box {
    width: 1100px;
  }
}
</style>
