<template>
  <div id="app">
    <router-view/>
    <div :class="['transition-cover', 'fixed', 'top', 'left', 'h-100vh', 'w-100', {'active': cover}]"></div>
    <notifications group="foo" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      cover: false,
    }
  },

  watch: {
    $route(to, from) {
      // console.log(111)
      // this.cover = true;
      // this.transition = true;
      // this.timeId = setTimeout(()=>{
      //   this.cover = false;
      //   let id = setTimeout(()=>{
      //     this.transition = false;
      //     clearTimeout(id);
      //   }, 1000);
      //   clearTimeout(this.timeId)
      // },1000)
      
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .transition-cover {
    pointer-events: none;
    opacity: 0;
    background: white;
    z-index: 6;
    transition: opacity 1s;
  }
  .transition-cover.active {
    opacity: 1;
  }

  .page-transition-enter-active, .page-transition-leave-active {
    transition: opacity .5s;
  }
  .page-transition-enter, .page-transition-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
