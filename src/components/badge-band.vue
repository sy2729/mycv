<template>
   <!-- <div class="each-section badge-band">
        <each-badge v-for='i in badges' :key='i.name' :bg-url='i.url'/>
   </div> -->

   <swiper :options="swiperOption" class="each-section badge-band">
    <swiper-slide v-for="(i, index) in badges" :key="index" >
        <each-badge :bg-url='i.url' />
    </swiper-slide>
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import eachBadge from './basic/each-badge';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
    name: 'badgeBand',
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    data() {
        return {
            swiperOption: {
                reeMode : true,
                speed: 4000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 9,
                },
                slidesPerView: 'auto',
                spaceBetween: 50,
                // slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                // observer:true,//修改swiper自己或子元素时，自动初始化swiper
                // observeParents:true,//修改swiper的父元素时，自动初始化swiper
            },
            badges: [
                {
                    name: 'vue',
                    url: 'vuejs'
                },
                {
                    name: 'js',
                    url: 'js'
                },
                {
                    name: 'css',
                    url: 'css'
                },
                {
                    name: 'sass',
                    url: 'sass'
                },
                {
                    name: 'react',
                    url: 'reactjs'
                },
                {
                    name: 'html',
                    url: 'html'
                },
                {
                    name: 'wechat mini program',
                    url: 'wechat-mini'
                },
                {
                    name: 'firebase',
                    url: 'firebase'
                },
                {
                    name: 'webpack',
                    url: 'webpack'
                },

            ]
        }
    },

    components: {
        eachBadge,
        swiper,
        swiperSlide
    },
    created(){
        this.badges.forEach((i)=>{
            i.url = './img/' + i.url + '.png';
        })

        // if(this.$props.headerData) {
        //     this.header = this.$props.headerData;
        // }
    },
    // props: [],
    watch: {
        // 'headerData'() {
        //     this.header = this.$props.headerData;
        // }
    }
}
</script>

<style lang="scss">
    .swiper-wrapper {
        transition-timing-function: linear;
    }
    .badge-band {
        background: #f7f7f7;
        flex-wrap: unset;
        overflow-x: hidden;
        padding: 75px 125px 75px 20px;

        .swiper-slide {
            width: 150px;
            height: 150px;
        }
    }
</style>
