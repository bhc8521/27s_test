<template>
    <div :class="{'select-wrap': true, 'is-open': optionShow}">
        <div :class="['g-select select-item', optionShow ? 'open' : '']" @click="showOption">{{data || 'Choose'}}</div>
        <div class="options-wrap">
            <div class="add-option-item">
                <input placeholder="Add New Token" v-model="addItemValue" />
                <el-button class="add-option-btn" @click="onAddClick">Confirm</el-button>
            </div>
            <div class="option-item" v-for="item in list" :key="item" @click="onClickItem(item)">
                <img /> <span>{{item}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'

export default {
    props: {
        data: {
            type: String,
            value: ''
        },
        list: {
            type: Array,
            default: () => []
        }
    },
    setup(props,context) {
        const state = reactive({
            optionShow: false,
            addItemValue: ''
        });

        return {
            ...toRefs(state),
            showOption: () => {
                state.optionShow = !state.optionShow;
            },
            onAddClick() {
                context.emit('onAddItem', state.addItemValue);
                state.addItemValue = '';
            },
            onClickItem(item) {
                context.emit("update:data", item);
                context.emit("change", item);
                state.optionShow = false;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.add-option-btn{
    height: 33px;

    background: #FFFFFF;
    border-radius: 13px;

    font-family: Gilroy;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 28px;
    /* or 140% */

    display: flex;
    align-items: center;

    color: #262B34;
}
</style>