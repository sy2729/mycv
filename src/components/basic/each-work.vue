<template>
    <div class="each-work" :style="{ 'background-image': 'url(' + presentImg + ')'}" @click=viewEachWork>
            <div class='work-cover'>
                <div class="work-info-wrap">
                    <h3 class='work-name'>{{name}}</h3>
                    <span class='current-type'><i :class="typeIconCode[type]"></i></span>
                </div>
            </div>
            <!-- <img-loader @imgLoaded=imgLoaded @usePlaceholder=usePlaceholder :img="img"></img-loader> -->
    </div>
</template>

<script>
import imgLoader from './../../mixins/img-loader.js';

export default {
    name: 'eachWork',
    props: ['img', 'name', 'descrip', 'link', 'tags', 'id', 'type', 'youtubeID', 'biliID'],
    data: function(){
        return {
            typeIconCode: {
                'web': 'fa fa-code',
                'video': 'fa fa-play-circle',
                'design': 'fa fa-paint-brush',
            },
            presentImg: null
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

