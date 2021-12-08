<template>
  <div class="footer-box">
    <div class="footer-main-box">
      <el-row class="footer-top-box" justify="space-between">
        <div class="footer-left">27s</div>
        <el-row class="footer-center">
          <div class="footer-center-list-box">
            <div class="footer-center-item">COMPANY</div>
            <div class="footer-center-item footer-center-item-weak">About</div>
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
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
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
</style>
