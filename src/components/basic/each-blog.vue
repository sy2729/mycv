<template>
  <div class="each-blog p-2 m-r-1 m-t-1 ov-hide">
    <h3 class="p-b-1">{{blogData.title}}</h3>
    <p class="date m-b-1">{{convertDate(blogData.date)}}</p>
    <!-- <div class="cover m-b-1" :style="{'background-image': `url(${blogData.cover||'/img/404.png'})`}"></div> -->
    <p class="abstract m-b-1">{{introDisplay(blogData.intro)}}</p>
    <a target="_blank" class="uppercase read-more relative" :href="blogData.url || `http://sy2729.github.io/${calculateUrl(blogData.title, blogData.date)}`"> Read More</a>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    blogData: {
      type: Object,
      required: true,
      default: {
        title: 'blog title',
        intro: 'preview of the blog',
        cover: '/img/404.png',
        view: 0,
        up: 0
      }
    }
    // title: {
    //   type: String,
    //   default: 'blog title',
    //   required: true
    // },
    // abstract: {
    //   type: String,
    //   default: 'preview of the blog',
    //   required: true
    // },
    // cover: {
    //   type: String,
    //   default: '/img/404.png',
    //   required: true
    // },
    // view: {
    //   type: Number,
    //   default: 0,
    //   required: true
    // },
    // up: {
    //   type: Number,
    //   default: 0,
    //   required: true
    // },
  },
  methods:{
    calculateUrl(title, date){
      if(!date) {return undefined}
      let number = moment(new Date(date)).format('YYYY/MM/DD').split('/')  // ---- 04/29/2019
      if(date.toLowerCase().includes('eastern')) {
        number[number.length - 1] = number[number.length - 1] - 0 + 1
      }
      number = number.map(e=>e - 0 < 10 ? `0${e - 0}` : e);
      number = number.join('/')
      return `${number}/${title}`
    },
    introDisplay(string){
      if(!string) {return undefined}
      if(string.length > 50) {
        string = string.substr(0, 50) + '......';
      }
      return string
    },
    convertDate(string) {
      return moment(new Date(string)).format('YYYY/MM/DD')
    }
  },
}
</script>

<style lang="scss" scoped>
  .each-blog {
    width: 30%;
    min-width: 300px;
    /* height: 400px; */
    border: 1px solid rgb(236, 238, 238);
    /* background: $theme; */

    h3 {font-size: 1.3em;}

    .cover {
      background: transparent center center;
      background-size: cover;

      width: 100%;
      height: 170px;
    }

    .abstract, .date {color: #7A7A7A; font-size: 14px;}

    .read-more {
      font-size: .8em;
      font-weight: bold;
      letter-spacing: 1px;
      padding-bottom: 5px;
      overflow: hidden;
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background: #222;
        bottom: 0;
        left: 0;
        z-index: 1;
      }

      &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 3px;
        background: $theme;
        bottom: 0;
        left: 0;
        z-index: 2;
        transition: width .6s ease-in-out;
      }
    }

    &:hover {
      .read-more {
        &:after {
          width: 100%;
        }
      }
    }
  }
</style>
