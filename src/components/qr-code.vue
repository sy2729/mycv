<template>
  <div>
    <div class="qrcode-wrapper flex align-center justify-center">
      <img :src="imgUrl" alt="微信二维码">
    </div>  
    <p class="t-center">扫码添加我的微信</p>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      imgUrl: "https://shuai-cv-data.oss-cn-shenzhen.aliyuncs.com/img/qr-code.jpg"
    }
  }
}
</script>

<style lang="scss" scoped>
  .qrcode-wrapper { 
    
    background: $theme;
    width: 250px;
    height: 250px;
    top: 0;
    right: 0;
    /* position: fixed;
    z-index: 6;
    box-shadow: $activeBoxShadow; */
    
    img {
      /* display: block; */
      width: 95%;
      height: 95%;
      border-radius: 10px;
    }

    &:after {
      content: '';
      left: 0;
      height: 200px;
    }
  }
</style>

