<template>
  <div class="mvp-27s-message-box" ref="messageBoxRef">
    <div class="mvp-27s-message-item">
      <div class="icon success" v-if="msg.type === 'success'">
        <img src="../assets/imgs/message-success.svg">
      </div>
      <div class="icon error" v-if="msg.type === 'error'">
        <img src="../assets/imgs/message-error.svg">
      </div>
      <div class="mvp-27s-message-text" v-html="msg.message">
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, ref } from 'vue';
export default {
  props: {
    msg: {
      type: Object,
      value: {
        message: "success",
        type: "error"
      }
    }
  },
  setup(props) {
    let messageBoxRef = ref(null);
    
    onMounted(() => {
      setTimeout(() => {
        messageBoxRef.value.parentNode.removeChild(messageBoxRef.value);
      }, 2500);
    })

    return {
      messageBoxRef,
    }
  },
}
</script>

<style lang="scss" scoped>
@keyframes message_show {
  from {
    transform: translate(-50%, 0);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 80px);
    opacity: 1;
  }
}
@keyframes message_hide {
  from {
    transform: translate(-50%, 80px);
    opacity: 1;
    
  }
  to {
    transform: translate(-50%, 0);
    opacity: 0;
  }
}
.mvp-27s-message-box {
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 5px;
  z-index: 9;
  animation: message_show .5s, message_hide .5s 2s;
  animation-fill-mode: forwards;
}
.mvp-27s-message-item {
  display: flex;
  align-items: center;
  padding: 14px 23px;
  background: #262B34;
  border-radius: 15px;
  box-shadow: 0 2px 5px 0 #000;

  .icon {
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 23px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 50%;

    &.success {
      background: #81FA48;
    }
    &.error {
      background: #F56C6C;
    }
  }
}
.mvp-27s-message-text {
  line-height: 28px;
  text-align: center;
  color: #FFFFFF;
  font-weight: 900;
  font-size: 20px;
}
</style>