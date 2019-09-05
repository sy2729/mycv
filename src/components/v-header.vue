<template>
    <div class="header w-100 h-100vh relative over-hidden" >
            <div class="header-bg w-100 h-100vh relative background-cover background-cover-fixed" :style="{backgroundImage: `url(${bgUrlClear})`}"></div>
            <div class="logo absolute background-cover" :style="{backgroundImage: `url(${logoUrl})`}"></div>
            <!-- <cv-nav @choose-to-view='headerSelect'></cv-nav> -->

            <div class="title-wrap absolute hide flex justify-center align-center" ref='titleWrap'>
                <div class="title-wrap-inner absolute" v-if="!videoPlaying">
                    <h4 class="subtitle" v-if='header.target'>
                        尊敬的<span class="subtitle subtitle-target bold">{{header.target}}</span>面试官您好，我是
                    </h4>
                    <h4 class="subtitle" v-else>{{header.greeting || 'nihao'}}</h4>
                    <h1 class="title">{{header.name || 'Wait Please'}}</h1>
                    <!-- <div class='arrow-wrap pointer flex align-center justify-center' @click=arrowScroll ref='arrow'><i class="fa fa-arrow-down"></i></div> -->
                </div>
                <!-- <video v-else class="absolute left top w-100" controls autoplay :src="bgVideoUrl"></video> -->
                <!-- <i class="fa fa-play-circle pointer" @click="videoPlaying = true"></i> -->
            </div>

            <!-- <div class='language-switch'>
                <span :class="['option', {'active': currentLanguage === 'en'}]" @click="switchLang('en')">En</span>
                <span>／</span>
                <span :class="['option', {'active': currentLanguage === 'zh'}]" @click="switchLang('zh')">中</span>
            </div> -->
    </div>
</template>


<script>
import cvNav from './v-nav.vue';
import imgLoader from './../mixins/img-loader.js';

export default {
    data(){
        return {
             bgUrl: './img/bg-blur.jpg',
             bgUrlClear: 'https://shuai-cv-data.oss-cn-shenzhen.aliyuncs.com/img/bg-clear-v2.png',
             logoUrl: './img/logo.png',
             header: {},
             bgVideoUrl: './img/bg-video.mp4',
             videoPlaying: false
        }
    },
    props: [
         'currentLanguage',
         'headerData'
         ],
    methods: {
        scrollTo(position, timeout){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                direction = position - scrollTop > 0 ? 1 : -1,
                distance = Math.abs(position - scrollTop),
                split = distance / 50,
                _timeout;

            if (position !== scrollTop) {
                timeout = timeout || 1000;
                split *= direction;

                _timeout = setInterval(function () {
                    scrollTop += split;
                    distance -= Math.abs(split);
                    if (0 >= distance) {
                        window.scrollTo(0, position);
                        clearInterval(_timeout);
                        _timeout = null;
                    } else {
                        window.scrollTo(0, scrollTop);
                    }
                }, timeout / 100);
            }
        },
        arrowScroll(){
            let value = document.querySelector('.skill-section').offsetTop;
            this.scrollTo(value, 20);
        },
        myCallback(){
            this.$refs.arrow.classList.add('active');
        },
        // detectLayerLoading(){
        //     // detect the layer loading
        //     let img = document.createElement('img');
        //     img.setAttribute("src", 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535384915/cv-img/hero-layer.png');
        //     img.onload = ()=>{
        //         img = null;
        //         this.loadText();
        //     }
        // },
        loadText(){
            this.$refs.titleWrap.classList.add('active')
        },
        headerSelect(data){
            let value = document.querySelector('.work-section').offsetTop;
            this.scrollTo(value, 500);
        },
        // switchLang(data){
        //     // console.log(this.$route.path)
        //     let route_name = this.$route.path;
        //     route_name = route_name.length <= 1?this.$route.name:this.$route.path;
        //     if(data==='en' && this.$props.currentLanguage !== 'en') {
        //         this.$store.dispatch('switchLanguage', {route_name, language: data})
        //     } else if (data === 'zh' && this.$props.currentLanguage !== 'zh') {
        //         this.$store.dispatch('switchLanguage', {route_name, language: data})  
        //     }
        // }
    },
    components: {
        cvNav
    },
    mounted(){
        ScrollReveal().reveal('.arrow-wrap', { afterReveal: this.myCallback });
        this.loadText();
        // this.detectLayerLoading();
       if(this.$props.headerData) {
            this.header = this.$props.headerData;
        }

    },
    beforeDestroy() {
        ScrollReveal().destroy();
    },
    watch: {
        'headerData'() {
            this.header = this.$props.headerData;
        }
    },
    mixins: [imgLoader],
    created() {
        // loading clearer image
        // this.run(this.bgUrl, this.bgUrlClear, 'bgUrl')
    }
}
</script>

<style lang="scss" scoped>
    .header {
        // height: 470px;
        &:before {
            content: "";
            position: absolute;
            left: 0;top: 0;width: 100%;height: 100%;
            background: #FEFFFF;
            /* background-image: linear-gradient(-229deg, #C8C8C8 0%, #E9EAE6 65%, #C2C4BE 100%); */
        }

        .logo {right: 30px; top: 30px; width: 110px; height: 125px; transform: scale(.8);}

        .header-bg {
            @media screen and (max-width: 600px) {
                background-attachment: unset;
                background-image: url('/img/bg-clear.jpg') !important;

            }
        }
    }


        .title-wrap {
            /* border: 15px solid rgba(212,103,104, .5); */
            width: 430px;
            height: 255px;
            max-height: 320px;
            top: 50%;
            right: 0;
            transform: scale(1.2);
            transform-origin: right;
            /* transform: translate(50%,-50%) scale(1.3); */
            color: #222;
            padding: 20px 0;
            transition: all 3s;

            .fa-play-circle {font-size: 2em; color: $theme;}

            &.active {
                opacity: 1;
            }

            .title-wrap-inner {
                left: 0;
                top: 50%;
                transform: translate(-50%, -50%);
                .subtitle {
                    font-weight: 400;

                    .subtitle-target {
                        font-size: 32px;
                        color: $theme;
                        /* font-weight: bold; */
                    }
                }

                .title {
                    font-size: 3em;
                    font-weight: 700;
                }


                @media screen and (max-width: 600px) {
                    transform: unset;
                    color: #FEFFFF;
                }
            }
        

        

       /* .arrow-wrap {
           width: 32px;
           height: 32px;
           border-radius: 50%;
           border: 1px solid #222;
           transform: translateY(150px);

           &.active {
               animation: jump .5s alternate ease-in-out infinite;
           }

           @keyframes jump {
               from {transform: translateY(150px);}
               to {transform: translateY(165px);}
           }
       } */
    }

    /* .language-switch {
        position: absolute;
        bottom: 10px;
        right: 10px;
        z-index: 5;

        span {
            color: #f4f4f4;
            font-size: 1em;
            cursor: pointer;
            vertical-align: middle;
            vertical-align: text-bottom;
            &.option {
                padding: 3px 5px;
            }
            &.active {
                color: $theme;
                font-size: 1.4em;
            }
        }
    } */
</style>
