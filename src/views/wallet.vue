<template>
  <div class="page-box">
    <div class="main-box">
      <page-header></page-header>
      <el-row align="middle" class="main-head">
        <div class="head-label">create</div>
        <img src="../assets/imgs/crumb_arrow.svg" class="head-arrow" />
        <div class="head-label head-label-active">Wallet</div>
      </el-row>
      <el-row class="wallet-top" justify="center" align="middle">
        <div>Chris_Wu.near</div>
      </el-row>
      <div class="wallet-table-box">
        <el-table
          :data="list"
          header-row-class-name="wallet-table-header-row"
          header-cell-class-name="wallet-table-header-cell"
          :highlight-current-row="false"
          class="wallet-table"
        >
          <el-table-column min-width="150" label="Social Money">
            <template #default="scope">
              <el-row class="money-box" align="middle">
                <img
                  class="money-logo"
                  src="../assets/imgs/user_list_logo.svg"
                />
                <div>$GWJ</div>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column min-width="150" label="Creator">
            <template #default="scope">
              <el-row class="creator-box" align="middle">
                <img
                  class="creator-head"
                  src="../assets/imgs/user_content_head.png"
                />
                <div>Name</div>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column label="Price">
            <template #default="scope">
              <div class="price-box">$342</div>
            </template>
          </el-table-column>
          <el-table-column label="Amount">
            <template #default="scope">
              <div class="amount-box">20,323,320</div></template
            >
          </el-table-column>
          <el-table-column align="center" min-width="100" label="Show">
            <template #default="scope">
              <el-button class="show-btn">On display</el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" label="Trade">
            <template #default="scope">
              <el-button class="trade-btn">Trade</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from "@/components/header.vue";
import PageFooter from "@/components/footer.vue";
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      list: ["", "", ""],
    });

    return {
      ...toRefs(state),
    };
  },
  components: {
    pageHeader,
    PageFooter,
  },
};
</script>
<style lang="scss">
.wallet-table-header-row {
  background-color: transparent !important;
}

.wallet-table-header-cell {
  color: #969dae;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 0 !important;
  background-color: #000 !important;
}
</style>

<style lang="scss" scoped>
.page-box {
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #000;
}

.main-box {
  color: #fff;
  margin: 0 auto 300px auto;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: transparent;
  overflow-x: auto;
}

.main-head {
  padding: 23px 0;
  border-bottom: 1px solid #262b34;
  margin-bottom: 27px;
  color: #969dae;
}

.head-arrow {
  width: 8px;
  margin-right: 8px;
}

.head-label {
  font-size: 20px;
  margin-right: 8px;

  &-active {
    color: #fff;
  }
}

.breadcrumb-container {
  padding: 20px 0;
  border-bottom: 1px solid rgba(212, 198, 198, 0.2);
}

.wallet-top {
  height: 258px;
  border-radius: 17px;
  background-color: #262b34;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;
}

.wallet-table-box {
  overflow-x: auto;
}

::v-deep.wallet-table {
  min-width: 770px;
  &::before {
    content: none;
  }
  .el-table__body {
    border-collapse: separate;
    border-spacing: 0 20px;
    background-color: #000;
    tr td {
      border-bottom: 0;
    }

    tr td:first-child {
      border-top-left-radius: 68px;
      border-bottom-left-radius: 68px;
      padding-left: 34px;
    }

    tr td:last-child {
      border-top-right-radius: 68px;
      border-bottom-right-radius: 68px;
    }

    tr:hover > td {
      background-color: #262b34 !important;
    }
  }

  .money-box {
    font-size: 20px;
    font-weight: bold;
  }

  .money-logo {
    margin-right: 7px;
    width: 34px;
  }

  .creator-box {
    font-size: 18px;
    font-weight: bold;
  }

  .creator-head {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 13px;
  }

  .price-box,
  .amount-box {
    font-size: 18px;
    font-weight: bold;
  }

  .show-btn {
    background: #ffffff;
    border-radius: 30px;
    font-size: 14px;
    color: #262b34;
    font-weight: bold;
    width: 93px;
    height: 35px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .trade-btn {
    opacity: 0.2;
    border: 1px solid #969dae;
    box-sizing: border-box;
    border-radius: 30px;
    width: 77px;
    height: 35px;
    display: block;
    background-color: transparent;
  }

  .el-table__row {
    background-color: #262b34;
    padding-left: 34px;
    padding-right: 24px;
    height: 93px;
    color: #fff;
  }
}

@media screen and (min-width: 900px) {
  .main-box {
    width: 816px;
    margin-bottom: 600px;
  }
}

@media screen and (min-width: 1200px) {
  .main-box {
    width: 1100px;
  }
}
</style>
