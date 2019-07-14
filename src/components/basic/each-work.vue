<template>
    <div class="each-work relative pointer" :style="{ 'background-image': 'url(' + presentImg + ')'}" @click=viewEachWork>
        <div class='work-cover absolute top left'>
            <div class="banner absolute full" v-if="star"><img :src="banner" alt=""></div>
            <div class="work-info-wrap p-1 t-left">
                <h3 class='work-name thin'>{{name}}</h3>
                <a :title="'preview the ' + name " @click.stop="()=>null" :href="link.preview" target="_blank" class="p-1 preview-link" v-if="type==='web' && link && link.preview"><i class='iconfont'>&#xe649;</i></a>
                <!-- <span class='current-type'><i :class="typeIconCode[type]"></i></span> -->
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
    .preview-link {
        border-radius: 50%;
        &:hover {
            background: #434142;
        }
    }
</style>

