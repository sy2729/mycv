<template>
    <div class="each-work" :style="{ 'background-image': 'url(' + img + ')'}" @click=viewEachWork>
            <div class='work-cover'>
                <div class="work-info-wrap">
                    <h3 class='work-name'>{{name}}</h3>
                    <span class='current-type'><i :class="typeIconCode[type]"></i></span>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'eachWork',
    props: ['img', 'name', 'descrip', 'link', 'tags', 'id', 'type', 'youtubeID', 'biliID'],
    data: function(){
        return {
            typeIconCode: {
                'web': 'fa fa-code',
                'video': 'fa fa-play-circle',
                'design': 'fa fa-paint-brush',
            }
        }
    },
    methods: {
        viewEachWork(){
            let data = JSON.parse(JSON.stringify(this.$props));
            this.$emit('view-work-detail', data);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

