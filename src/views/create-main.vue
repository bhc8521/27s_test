<template>
  <div class="page-box">
    <div class="main-box">
      <page-header class="header-box"></page-header>
      <div class="main-head">
        <div class="head-label">Create</div>
      </div>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
      </router-view>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from "@/components/header.vue";
import pageFooter from "@/components/footer.vue";
export default {
  components: {
    pageHeader,
    pageFooter,
  },
};
</script>

<style scoped lang="scss">
.page-box {
  height: 100%;
  background-color: $bak-color;
  color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
}

.main-box {
  padding: 0 10px 50px 10px;
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

@media screen and (min-width: 816px) {
  .main-box {
    width: 816px;
    // width: 375px;
    padding: 0 50px 50px 50px;
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
</style>
