<template>
  <div class="image-loader">
    <img :src="placeholder" alt="Descriptive Image" ref='imgEl'>
    <p class="loading-text" v-if="loadingState">image loading...</p>
  </div>
</template>


<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    loading: {
      type: String,
      default: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif'
    }
  },
  data(){
    return {
      placeholder: '',
      loadingState: true
    }
  },
  methods: {
    replaceImg(node){
      this.placeholder = this.img;
      this.loadingState = false;
      node.removeEventListener('transitionend', this.replaceImg);
      node.classList.remove('hide');
    }
  },
  beforeMount(){
    //set the placeholder
    this.placeholder = this.$props.loading
    // then load the specific img
    let imgEl = document.createElement('img');
    imgEl.src = this.img;
    imgEl.onload = ()=> {
      this.$refs.imgEl.classList.add('hide');
      this.$refs.imgEl.addEventListener('transitionend', ()=> {
        this.replaceImg(this.$refs.imgEl)
      })
    }
  },
}
</script>


<style scoped lang="scss">
  .image-loader {
    position: relative;
    width: 100%;

    img {
      display: block;
      margin: 0 auto;
      width: 100%;
      transition: opacity .4s;
    }

    .loading-text {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
    }
  }
</style>
