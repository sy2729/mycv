<template>
    <div class="skill-section each-section" :style="{background: sectionColor}">
        <section-title :order=order :name=skills.sectionName></section-title>
        <div class='section-content'>
            <!-- <p class="content-description" v-html='skills.description'></p> -->
            <div :class="['skill-wrap', {active: skillBarShort}]">
                <div class="each-skill w-100" v-for='(i, index) in skills.allSkills' :key=index>
                    <div class="bar-info-wrap flex justify-space-between align-center">
                        <p class='skill-name'>{{i.name}}</p>
                        <time-num-updater class="skill-extent" :scale=i.extent />
                    </div>
                    <div class="bar-outter w-100 relative">
                        <div class="bar-inner absolute top left h-100" :style="{width: i.extent + '%'}"></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import sectionTitle from './basic/section-title';
import timeNumUpdater from '@/components/basic/timeNumUpdater'
import {getSkill} from '@/api';
// import fetchData from '@/mixins/fetchData';

export default {
    name: 'skillSection',
    props: ['skillData','currentLanguage'],
    // mixins: [fetchData],
    data: function(){
        return {
            order: '01',
            sectionName: 'Skills',
            sectionColor: '#C93639',
            skillBarShort: true,
            skills: [],
        }
    },
    methods: {
        removeActive(){
            this.skillBarShort = false;
        },
        fetchSkill() {
            getSkill(this.currentLanguage)
                .then(d=>{
                    this.skills = d;
                })
        }
    },
    watch: {
        'currentLanguage': function () {
            // this.fetchSkill();
        },
        'skillData':function(){
            if(this.$props.skillData) {
                this.skills = this.$props.skillData;
            };    
        }
    },
    created(){
        // this.fetchSkill();
    },
    mounted(){
        ScrollReveal().reveal('.skill-wrap', { afterReveal: this.removeActive});
        if(this.$props.skillData) {
            this.skills = this.$props.skillData;
        };
    },
    components: {
        sectionTitle,
        timeNumUpdater
    }
}
</script>

<style lang="scss" scoped>
      .skill-section {
       color: #f4f4f4;

       .skill-wrap {
            color: #FBF7F7;

            &.active .bar-inner{
                width: 0% !important;
            }
            .each-skill {
                margin-bottom: 10px;
                font-size: 14px;
                font-weight: 100;
                
                .bar-info-wrap {
                    .skill-name {
                        margin-bottom: 4px;
                    }
                }
                .bar-outter {
                    height: 3px;    
                    background: #D25355;

                    .bar-inner {
                        background: #f4f4f4;
                        transition: width 5s;
                    }
                }
            }
                    
        }
   }
</style>
