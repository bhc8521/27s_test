<template>
  <el-upload
    class="upload-cover"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleCoverSuccess"
    :before-upload="beforeCoverUpload"
  >
    <img
      v-if="false"
      src="https://img2.baidu.com/it/u=1757366683,4113258251&fm=26&fmt=auto"
      class="avatar"
    />
    <div v-else class="upload-cover-default">
      <div class="cover">
        <img src="../assets/imgs/create-airdrop/upload.svg" />
        Image
      </div>
    </div>
  </el-upload>
  <div class="mint-item-tips cover">Upload cover</div>
</template>

<script>
export default {
  emits: ["success", "before"],
  setup(props, context) {
    const handleCoverSuccess = () => {
      context.emit("success");
    };
    const beforeCoverUpload = () => {
      context.emit("before");
    };
    return {
      handleCoverSuccess,
      beforeCoverUpload,
    };
  },
};
</script>

<style scoped lang="scss">
.upload-cover {
  ::v-deep .el-upload {
    border-radius: 6px;
    background: #262b34 !important;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .upload-cover-default {
      position: relative;
      font-size: 14px;
      width: 166px;
      height: 166px;
      .cover {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 102px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #4b4c50;
        color: #fff;
        border-radius: 15px;
        img {
          width: 18px;
          margin-right: 10px;
          vertical-align: middle;
        }
      }
    }
    .avatar {
      width: 136px;
      height: 136px;
      display: block;
      object-fit: cover;
    }
  }
}

.mint-item-tips {
  margin-top: 10px;
  color: #969dae;
  font-size: 16px;
}



@media screen and (min-width: 750px) {
  .upload-cover {
    ::v-deep .el-upload {
      border-radius: 6px;
      background: #262b34 !important;
      border-radius: 20px;
      .upload-cover-default {
        font-size: 28px;
        width: 336px;
        height: 336px;
        .cover {
          width: 182px;
          height: 43px;
          line-height: 43px;
          border-radius: 22px;
          img {
            margin-right: 20px;
          }
        }
      }
      .avatar {
        height: 336px;
      }
    }
  }
  
  .mint-item-tips {
    margin-top: 31px;
    &.cover {
      margin-top: 20px;
    }
  }
}
</style>