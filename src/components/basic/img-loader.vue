<template>
  <div class="image-loader">
    <img :src="placeholder" alt="Descriptive Image">
    <p class="loading-text" v-if="loading">image loading...</p>
  </div>
</template>


<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      placeholder: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif',
      loading: true
    }
  },
  beforeMount(){
    // then load the specific img
    let imgEl = document.createElement('img');
    imgEl.src = this.img;
    imgEl.onload = ()=> {
      this.placeholder = this.img;
      this.loading = false;
    }
  },
}
</script>


<style scoped lang="scss">
  .image-loader {
    position: relative;
    width: 100%;

    img {
      width: 90%;
      height: auto;
      margin: 0 auto;
      display: block;
      // float: right;
      padding: 20px 0;
      max-width: 400px;
      min-width: 200px;
    }

    .loading-text {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
    }
  }
</style>
