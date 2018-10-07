<template>
    <div class="experience-section each-section" :style="{background: sectionColor}">
             <section-title :order=order :name=experiences.sectionName></section-title>
             <div class='section-content'>
                <each-experience v-for='(i, index) in experiences.allExperiences' :key=index v-bind='i'></each-experience>
             </div>
        </div>
</template>

<script>
import sectionTitle from './basic/section-title';
import eachExperience from './basic/each-experience';
export default {
    name: 'experienceSection',
    data: function(){
        return {
            sectionColor: '#FFFFFF',
            order:'02',
            experiences: [],
        }
    },
    components: {
        sectionTitle,
        eachExperience,
    },
    props: ['experienceData'],
    watch: {
        'experienceData': function () {
            this.experiences = this.$props.experienceData;
        }
    },
    beforeMount(){
         if(this.$props.experienceData) {
            this.experiences = this.$props.experienceData;
        }
    }  
}
</script>

<style lang="scss" scoped>
// .experience-section {
//        .section-content {
           
//        }
//    }
</style>
