<template>
  <div class="from-radio">
    <div
      class="radio-group"
      v-for="(item, index) in radioList"
      :key="index"
      @click="onClick(index)"
    >
      <img
        class="radio-icon"
        v-if="index === checked"
        src="../assets/imgs/create-mint/radio_check.svg"
      />
      <img
        class="radio-icon"
        v-else
        src="../assets/imgs/create-mint/radio.svg"
      />
      <div class="radio-text">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  props: {
    radioList: {
      // 单选列表
      type: Array,
      value: [],
    },
  },
  setup(props, context) {
    const state = reactive({
      checked: 0,
    });
    const onClick = (index) => {
      if (index !== state.checked) {
        state.checked = index;
        context.emit("onChange", index);
      }
    };

    return {
      ...toRefs(state),
      onClick,
    };
  },
};
</script>

<style scoped lang="scss">
.from-radio {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  color: #969dae;
}
.radio-group {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 43px;
  line-height: 43px;
  padding: 0 10px;
  margin-bottom: 5px;
  background: #262b34;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:last-child {
    margin: 0;
  }
}
.radio-icon {
  width: 22px;
  margin-right: 19px;
}
.radio-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}

@media screen and (min-width: 750px) {
  .from-radio {
    flex-direction: initial;
  }
  .radio-group {
    height: 63px;
    line-height: 63px;
    margin-right: 48px;
    margin-bottom: 0;
    padding: 0 29px;
    border-radius: 20px;
    &:last-child {
      margin: 0;
    }
  }
  .radio-icon {
    width: 27px;
    margin-right: 19px;
  }
}
</style>