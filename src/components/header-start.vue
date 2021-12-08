<template>
  <el-row class="page-header" align="middle">
    <el-row class="right-box" align="middle" :gutter="30">
      <div class="right-nav-item" @click="redirectFaq">FAQs</div>
      <el-button
        class="right-nav-item right-login-btn"
        @click="redirectRegister"
        >Pre-Register</el-button
      >
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

    const redirectFaq = () => {
      location.href =
        "https://27s.notion.site/FAQs-81506fb8e8ab4a68b837aee0decfb888";
    };

    const redirectRegister = () => {
      location.href = "https://0smaupbwvz0.typeform.com/to/FRGjZMut";
    };

    return {
      redirectFaq,
      redirectRegister,
      redirectCreate,
    };
  },
};
</script>

<style lang="less" scoped>
.page-header {
  padding: 32px 10px 5px 10px;
  display: flex;
  justify-content: right;

  .right-box {
    font-weight: bold;
    color: #1f222c;
    font-size: 15px;
  }

  .right-nav-item {
    cursor: pointer;
    margin-right: 30px;
    font-family: "gilroyBold";
    &:last-child {
      margin-right: 0;
    }
  }

  .right-login-btn {
    height: 44px;
    padding: 0 20px;
    color: #1f222c;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid rgba(31, 34, 44, 0.2);
    border-radius: 43px;
    font-size: 15px;
    animation: all 0.1s;
    &:hover {
      color: #1f222c;
      border: 1px solid #1f222c;
      background-color: #fff;
    }
  }

  .theme-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(31, 34, 44, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    &-img {
      width: 12px;
    }
  }
}
</style>
