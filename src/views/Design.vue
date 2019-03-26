<template>
  <div class="w-100">
    <ImgLoader :loading="placeholder" img="/img/design/design-1.png"/>
    <ImgLoader :loading="placeholder" img="/img/design/design-2.png"/>
    <ImgLoader :loading="placeholder" img="/img/design/design-3.png"/>
    <ImgLoader :loading="placeholder" img="/img/design/design-4.png"/>
    <ImgLoader :loading="placeholder" img="/img/design/design-5.png"/>
    <ImgLoader :loading="placeholder" img="/img/design/design-6.png"/>
    <router-link to="/"><button class="btn fixed top left-1 top-1 bold">到主页, 查看更多信息</button></router-link>
  </div>
</template>

<script>
import ImgLoader from '@/components/basic/img-loader.vue';

export default {
  data() {
    return {
      placeholder: '/img/loading2.gif'
    }
  },
  components: {
    ImgLoader
  }
}
</script>

<style scoped>
  .btn {
    padding: 1em 2em;
    min-height: 40px;
    font-size: 1em;
  }
  img {
    width: 100%;
  }

  @media screen and (max-width: 650px){
    .btn {
      border: none;
      top: unset;
      bottom: 0;
      left: unset;
      border-radius: unset;
      width: 100%;
      font-size: .8em;
    }
  }
</style>

