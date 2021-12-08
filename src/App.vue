<template>
  <router-view></router-view>
</template>

<script>
import { watch } from "vue";
import { useStore } from "vuex";
import theme from "./utils/theme.js";
import "./assets/theme/input.scss";

export default {
  setup() {
    const store = useStore();
    watch(
      () => store.state.theme,
      (newVal) => {
        theme[newVal]();
      },
      {
        immediate: true,
      }
    );
  },
};
</script>

<style lang="scss">
@import "./styles/common.scss";
html,
body {
  height: 100%;
}

body {
  margin: 0;
}

#app,
textarea {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.main-box {
  background-color: $bak-color;
}
</style>
