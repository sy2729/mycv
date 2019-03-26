<template>
    <div class="each-work" :style="{ 'background-image': 'url(' + presentImg + ')'}" @click=viewEachWork>
        <div class='work-cover'>
            <div class="banner absolute full" v-if="star"><img :src="banner" alt=""></div>
            <div class="work-info-wrap">
                <h3 class='work-name'>{{name}}</h3>
                <span class='current-type'><i :class="typeIconCode[type]"></i></span>
            </div>
            <div class="work-tag absolute flex flex-wrap">
                <!-- only get the first 4 tags, otherwise it will overflow -->
                <p v-for="(i, index) in tags.slice(0,4)" :key='index'>{{i}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import imgLoader from './../../mixins/img-loader.js';

export default {
    name: 'eachWork',
    props: ['img', 'name', 'descrip', 'link', 'tags', 'id', 'type', 'youtubeID', 'biliID', 'star'],
    data: function(){
        return {
            typeIconCode: {
                'web': 'fa fa-code',
                'video': 'fa fa-play-circle',
                'design': 'fa fa-paint-brush',
            },
            presentImg: null,
            banner: './img/banner.png'
        }
    },
    
    methods: {
        viewEachWork(){
            let data = JSON.parse(JSON.stringify(this.$props));
            this.$emit('view-work-detail', data);
        },
        usePlaceholder(data){
            this.presentImg = data
        },
        imgLoaded(){
            this.presentImg = this.img
        }
    },
    mixins: [imgLoader],
    beforeMount(){
        this.run(undefined, this.img, 'presentImg')
    }
}
</script>

<style lang="scss" scoped>

</style>

