<template>
  <div class="image-loader" >
    <img :src="placeholder" alt="Descriptive Image" ref='imgEl' :style="{'height': height + 'px', 'width': width + 'px'}">
    <p class="loading-text" v-if="loadingState">{{loadingText || 'image loading...'}}</p>
    <p class="loading-text" >{{loadingText || null}}</p>
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
    },
    loadingText: {
      type: String,
    },
    height: {
      type: String | Number,
      default: 'unset'
    },
    width: {
      type: Number | String,
      default: 'unset'
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
