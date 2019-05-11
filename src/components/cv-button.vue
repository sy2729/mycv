<template>
  <div :class="buttonWrapClass" @mousemove="moveIn" @mouseleave="moveOut">
    <template v-if="hoverState || initialLoad">
      <div :class="buttonBGClass"></div>
      <div v-tooltip.top-center="'切换到中文模式'" :class="['inner-wrap', 'button-on', 'relative', {'active': buttonState === 'zh'}]" @click="switchLan('zh')">
        <span>中</span>
      </div>
      <div :class="['inner-wrap', 'button-download', 'relative', 'pointer']" v-tooltip.top-center="msg">
        <div class="icon-wrap flex align-center justify-center">
          <a :href="cvFileLocation" target="_blank"><i class='iconfont'>&#xe619;</i></a>
        </div>
      </div>
      <div v-tooltip.top-center="'Switch to English'" :class="['inner-wrap', 'button-on', 'relative', {'active': buttonState === 'en'}]" @click="switchLan('en')">
        <span>EN</span>
      </div>
    </template>
    <template v-else>
      <div class="button-layer absolute full flex align-center justify-center">
        <i class='iconfont'>&#xe619;</i>
      </div>
    </template>
  </div>
</template>

<script>
import local from "../store/local.js";

export default {
  props: ['currentLanguage', 'cvPath'],
  data() {
    return {
      buttonState: null, //default to the props langugae
      hoverState: false,
      initialLoad: true,
      cvPathData: null,
      cvFileLocation: undefined
    }
  },
  computed:{
    buttonWrapClass() {
      let stateClass = this.hoverState || this.initialLoad ? '' : 'fold';
      return `cv-button fixed btn outter-wrap over-hidden flex relative justify-space-between align-center ${stateClass}`
    },
    buttonBGClass() {
      let stateClass = this.buttonState === 'en' ? 'right' : 'left' 
      return `btn-bg absolute ${stateClass}`
    },
    msg() {
      return this.buttonState === 'en' ? 'Download my Resume' : '下载我的简历'
    }
  },
  methods: {
    switchLan(data){
      //switch the button state
      this.buttonState = data;

      // switch the data
      let route_name = this.$route.path;
      route_name = route_name.length <= 1?this.$route.name:this.$route.path;
      if(data==='en' && this.$props.currentLanguage !== 'en') {
          this.$store.dispatch('switchLanguage', {route_name, language: data})
      } else if (data === 'zh' && this.$props.currentLanguage !== 'zh') {
          this.$store.dispatch('switchLanguage', {route_name, language: data})  
      }
      this.cvFileLocation = this.switchCv(data);
      //set local storage for next load
      local.setLocalStore('lang', data);
    },

    moveIn(){
      this.hoverState = true;
      this.initialLoad = false;
    },
    moveOut(){
      this.hoverState = false;
    },
    switchCv(data) {
      let cvData = this.cvPathData ? this.cvPathData : this.$props.cvPath;
      return cvData && cvData[data];
    }
  },
  mounted() {
    this.buttonState = this.$props.currentLanguage;
    this.cvFileLocation = this.switchCv(this.$props.currentLanguage);
  },
  watch: {
    'cvPath'() {
      this.cvPathData = this.$props.cvPath;
      this.cvFileLocation = this.switchCv(this.$props.currentLanguage);
    }
  },
  created() {
    this.timeId = setTimeout(()=> {
      this.initialLoad = false;
      window.clearTimeout(this.timeId);
    }, 3000)
  }
}
</script>


<style lang="scss" scoped>
// #F5F5F5
// #FFFFFF
.outter-wrap {
  width: 200px;
  transition: width .6s;

  &.fold {
    width: 52px;
  }

  .button-layer {
    color: #fefefe;
  }

  .inner-wrap {
    color: #fefefe;
    padding: 15px 20px;

    &.button-download {
      color: $theme;
      position: relative;
      padding: 0;
      .icon-wrap {
        padding: 15px 16px;
        width: 22px;
        height: 22px;
        &:hover {
          border-radius: 50%;
          background: #dedede;
        }
      }
    }
    &.active {
      color: $theme;
    }


  }

  .btn-bg {
    background: #f5f5f5;
    border-radius: 27px;
    height: 75%;
    top: 50%;
    transform: translateY(-50%);
    width: 60%;
    z-index: 0;
    transition: all .5s;

    &.left {
      left: 8px;
    }

    &.right {
      left: calc(200px - 120px - 8px);
    }
  }
}



</style>
