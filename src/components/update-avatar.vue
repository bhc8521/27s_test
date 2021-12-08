<template>
  <el-upload
    class="upload-cover"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img
      v-if="false"
      src="https://image.xuexiwangzhe.com/FhNc40y1bslJciXPvppbw1E4WBJ0"
      class="avatar"
    />
    <div v-else class="upload-cover-default">
      <div class="cover">
        <img src="../assets/imgs/create-airdrop/upload.svg" />
      </div>
    </div>
  </el-upload>
</template>

<script>
export default {
  emits: ["success", "before"],
  setup(props, context) {
    const handleAvatarSuccess = () => {
      context.emit("success");
    };
    const beforeAvatarUpload = () => {
      context.emit("before");
    };
    return {
      handleAvatarSuccess,
      beforeAvatarUpload,
    };
  },
};
</script>

<style scoped lang="scss">
.upload-cover {
  ::v-deep .el-upload {
    border-radius: 50%;
    background: #262b34 !important;
    cursor: pointer;
    overflow: hidden;
    .upload-cover-default {
      position: relative;
      width: 130px;
      height: 130px;
      .cover {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        img {
          width: 22px;
        }
      }
    }
    .avatar {
      width: 130px;
      height: 130px;
      display: block;
      object-fit: cover;
    }
  }
}
</style>