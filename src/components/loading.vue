<template>
  <div class="mvp-27s-loading-mask"> 
    <div class="mvp-27s-loading-dialog">
      <div class="mvp-27s-loading-title">
        {{msg.title}}
      </div>
      <div class="mvp-27s-loading-doc-box">
        <div class="doc"></div>
        <div class="doc"></div>
        <div class="doc"></div>
      </div>
      <div class="mvp-27s-loading-tips">
        Waiting
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Object,
      value: {
        title: "Loading"
      }
    }
  },
  setup(props) {
    console.log(props)
  },
}
</script>

<style lang="scss" scoped>
@keyframes loading_doc {
  0%, 100% {
    background: #fff;
  }
  33% {
    background: #fff;
  }
  66% {
    background: #9BCFE8;
  }
}
@keyframes loading_show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes loading_hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.mvp-27s-loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background: rgba(255, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.4);
  z-index: 9;
  text-align: center;
  animation: loading_show .3s linear;
  animation-fill-mode: forwards;
  &.hide {
    animation: loading_hide .3s linear;
    animation-fill-mode: forwards;
    animation-direction: alternate;
  }
}
.mvp-27s-loading-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 408px;
  height: 267px;
  padding: 40px 0 44px 0;
  background: #262B34;
  border-radius: 24px;
  box-sizing: border-box;
}
.mvp-27s-loading-title {
  font-size: 36px;
  line-height: 36px;
  color: #fff;
  font-weight: bold;
}
.mvp-27s-loading-doc-box {
  display: flex;
  justify-content: center;
  margin-top: 67px;
  .doc {
    width: 10px;
    height: 10px;
    background: #6A777D;
    margin-right: 7px;
    animation: loading_doc .6s linear infinite;
    animation-delay: .2s;
    &:first-child {
      animation-delay: 0s;
    }
    &:last-child {
      margin: 0;
      animation-delay: .4s;
    }
  }
}
.mvp-27s-loading-tips {
  margin-top: 50px;
  font-size: 16px;
  line-height: 28px;
  color: #969DAE;
  opacity: 0.6;
}
</style>