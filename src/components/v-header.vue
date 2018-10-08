<template>
    <div class="header" :style="{backgroundImage: `url(${bgUrl})`}">

            <cv-nav @choose-to-view='headerSelect'></cv-nav>

            <div class="title-wrap" ref='titleWrap'>
                <h4 class="subtitle">{{header.greeting || 'nihao'}}</h4>
                <h1 class="title">{{header.name || 'Wait Please'}}</h1>
                <div class='arrow-wrap' @click=arrowScroll ref='arrow'><i class="fa fa-arrow-down"></i></div>
            </div>

            <div class='language-switch'>
                <span :class="['option', {'active': currentLanguage === 'en'}]" @click="switchLang('en')">En</span>
                <span>／</span>
                <span :class="['option', {'active': currentLanguage === 'zh'}]" @click="switchLang('zh')">中</span>
            </div>
    </div>
</template>


<script>
import cvNav from './v-nav.vue';

export default {
    data(){
        return {
             bgUrl: './img/bg-blur.jpg',
             bgUrlClear: './img/bg-clear.jpg',
             header: {}
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
        detectLayerLoading(){
            // detect the layer loading
            let img = document.createElement('img');
            img.setAttribute("src", 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535384915/cv-img/hero-layer.png');
            img.onload = ()=>{
                img = null;
                this.loadText();
            }
        },
        loadText(){
            this.$refs.titleWrap.classList.add('active')
        },
        headerSelect(data){
            let value = document.querySelector('.work-section').offsetTop;
            this.scrollTo(value, 500);
        },
        switchLang(data){
            // console.log(this.$route.path)
            let route_name = this.$route.path;
            route_name = route_name.length <= 1?this.$route.name:this.$route.path;
            if(data==='en' && this.$props.currentLanguage !== 'en') {
                this.$store.dispatch('switchLanguage', {route_name, language: data})
            } else if (data === 'zh' && this.$props.currentLanguage !== 'zh') {
                this.$store.dispatch('switchLanguage', {route_name, language: data})  
            }
        }
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
    watch: {
        'headerData'() {
            this.header = this.$props.headerData;
        }
    },
    created() {
        let img = document.createElement('img');
            img.setAttribute("src", this.bgUrlClear);
            img.onload = ()=>{
                img = null;
                this.bgUrl = this.bgUrlClear;
            }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        // height: 470px;
        height: 100vh;
        width: 100%;
        background: transparent center no-repeat;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        overflow: hidden;
    }


        .title-wrap {
        position: absolute;
        top: 50%;
        // left: 50%;
        transform: translateY(-50%) scale(1.3);
        color: #fff;
        padding: 20px 0;
        opacity: 0;
        transition: all 3s;
        left: 15%;
        &.active {
            opacity: 1;
        }
        

        .subtitle {
            font-weight: 100;
            
        }

        .title {
            font-weight: 700;
        }

       .arrow-wrap {
           width: 32px;
           height: 32px;
           border-radius: 50%;
           border: 1px solid #f4f4f4;
           transform: translateY(150px);
           cursor: pointer;
           display: flex;
           justify-content: center;
           align-items: center;

           &.active {
               animation: jump .5s alternate ease-in-out infinite;
           }

           @keyframes jump {
               from {transform: translateY(150px);}
               to {transform: translateY(165px);}
           }
       }
    }

    .language-switch {
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
    }
</style>
