/*
主题切换
*/

const theme = {
  // 日间模式
  light() {
    document.body.style.setProperty("--bak-color", "#fff");
  },
  // 夜间模式
  black() {
    document.body.style.setProperty("--bak-color", "#101217");
  },
};

export default theme;
