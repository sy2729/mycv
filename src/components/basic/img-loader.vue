<template>
  <img :src="placeholder" alt="Descriptive Image">
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
      placeholder: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif'
    }
  },
  beforeMount(){
    // then load the specific img
    let imgEl = document.createElement('img');
    imgEl.src = this.img;
    imgEl.onload = ()=> {
      this.placeholder = this.img
    }
  },
}
</script>


<style scoped>

</style>
