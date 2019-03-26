<template>
     <div class='progress-out' ref='progressBar'>
            <div class="progress-in" :style="{width: (viewLength/totalLength) * 100 + '%', left: (scrolledDistance / totalLength) * 100 + '%'}"></div>
    </div>
</template>

<script>
export default {
    name: 'progressBar',
    props: ['totalLength', 'viewLength', 'scrolledDistance'],
    data: function(){
        return {
            progressBarLength: 0,
        }
    },
    computed: {
        calcScrollDistance(){
            
        }
    },
    mounted(){
        let width = this.$refs.progressBar.getBoundingClientRect().width;  
        this.progressBarLength = width;
    }
}
</script>

<style lang="scss" scoped>
    .progress-out {
        margin: 30px auto;
        width: 60%;
        min-width: 200px;
        position: relative;
        background-color: #DEDEDE;
        height: 2px;
        overflow: hidden;
        .progress-in {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            background-color: $theme;
        }
    }
</style>

