<template>
  <div class="date-box">
    <el-date-picker
      class="date-picker"
      v-if="isRange === 'start' || isRange === 'all'"
      v-model="startDate"
      @change="onStartChange"
      type="date"
      :disabled-date="startDatePicker"
      :editable="false"
      :clearable="false"
      popper-class="mvp-custom-date-picker-dialog"
      :style="{ width: width }"
      placeholder="Start time"
    >
    </el-date-picker>
    <div class="between" v-if="isRange === 'all'">To</div>
    <el-date-picker
      class="date-picker"
      v-model="endDate"
      v-if="isRange === 'end' || isRange === 'all'"
      @change="onEndChange"
      :disabled-date="endDatePicker"
      type="date"
      :editable="false"
      :clearable="false"
      popper-class="mvp-custom-date-picker-dialog"
      :style="{ width: width }"
      placeholder="End time"
    >
    </el-date-picker>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  emits: ["onStartChange", "onEndChange", "onChange"],
  props: {
    isRange: {
      type: String,
      value: "all",
    },
    width: {
      type: String,
      value: "100%",
    },
  },
  setup(props, context) {
    const state = reactive({
      startDate: "",
      endDate: "",
    });

    const onStartChange = (date) => {
      if (props.isRange === 'all') {
        context.emit("onStartChange", date);
      } else {
        context.emit("onChange", date);
      }
    };
    const onEndChange = (date) => {
      if (props.isRange === 'all') {
        context.emit("onEndChange", date);
      } else {
        context.emit("onChange", date);
      }
    };
    const startDatePicker = (time) => {
      if(state.endDate) {
        return time.getTime() > new Date(state.endDate).getTime();
      } else {
        return false
      }
    }
    const endDatePicker = (time) => {
      if(state.startDate) {
        return time.getTime() < new Date(state.startDate).getTime();
      } else {
        return false
      }
    }

    return {
      ...toRefs(state),
      onStartChange,
      onEndChange,
      startDatePicker,
      endDatePicker
    };
  },
};
</script>

<style lang="scss">
.mvp-custom-date-picker-dialog {
  background: #262b34 !important;
  .el-popper__arrow {
    display: none;
  }
}

.mvp-custom-date-picker-dialog .el-date-picker {
  background: #262b34 !important;
}
.mvp-custom-date-picker-dialog .el-date-picker__header {
  button,
  span {
    color: #fff !important;
    font-weight: bold;
  }
}
.mvp-custom-date-picker-dialog .el-picker-panel__content {
  th,
  td,
  span {
    color: #8a92a6;
  }
  th {
    font-weight: bold;
    border-bottom: none;
  }

  .next-month {
    span {
      color: #adb5bd !important;
    }
  }
  .today a {
    color: #fff !important;

  }
  .available, .el-month-table {
    a, span {
      color: #8a92a6 !important;
      &:hover {
        color: #fff !important;
      }
    }
  }
  .current {
    span {
      position: relative;
      bottom: 8px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      background: #dee2e6 !important;
      color: red;
      border-radius: 16px;
    }
  }
  .disabled div{
    background: transparent;
    span{
      color: #666 !important;
    }
  }
  .disabled a {
    background: transparent;
    color: #666 !important;
  }
  .el-year-table, .el-month-table {
    .disabled a {
      color: #666 !important;
    }
  }

  
}
</style>
<style scoped lang="scss">
.date-box {
  display: flex;
  flex-direction: column;
}
.between {
  display: none;
}
::v-deep .date-picker {
  .el-input__inner {
    padding: 0 20px;
    background: #262b34;
    border: none;
    color: #fff;
    border-radius: 10px;
  }
  .el-input__prefix {
    display: none;
  }
  &:last-child {
    margin-top: 10px;
  }
}

@media screen and (min-width: 750px) {
  .date-box {
    flex-direction: initial;
    justify-content: space-between;
    align-items: center;
  }
  .between {
    display: block;
    margin: 0 43px;
  }
  ::v-deep .date-picker {
    .el-input__inner {
      height: 63px;
      border-radius: 20px;
      padding: 18px 40px;
      font-size: 20px;
    }
    &:last-child {
      margin-top: 0;
    }
  }
}
</style>
