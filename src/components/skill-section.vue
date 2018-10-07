<template>
    <div class="skill-section each-section" :style="{background: sectionColor}">
        <section-title :order=order :name=skills.sectionName></section-title>
        <div class='section-content'>
            <p class="content-description">{{skills.description}}</p>
            <div :class="['skill-wrap', {active: skillBarShort}]">
                <div class="each-skill" v-for='(i, index) in skills.allSkills' :key=index>
                    <div class="bar-info-wrap">
                        <p class='skill-name'>{{i.name}}</p>
                        <p class="skill-extent">{{i.extent}}%</p>
                    </div>
                    <div class="bar-outter">
                        <div class="bar-inner" :style="{width: i.extent + '%'}"></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import sectionTitle from './basic/section-title';

export default {
    name: 'skillSection',
    props: ['skillData'],
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
        }
    },
    watch: {
        'skillData': function () {
            this.skills = this.$props.skillData;
        }
    },
    mounted(){
        ScrollReveal().reveal('.skill-wrap', { afterReveal: this.removeActive});
        if(this.$props.skillData) {
            this.skills = this.$props.skillData;
        }
    },
    components: {
        sectionTitle
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
                width: 100%;
                margin-bottom: 10px;
                font-size: 14px;
                font-weight: 100;
                
                .bar-info-wrap {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .skill-name {
                        margin-bottom: 4px;
                        
                    }
                }

                .bar-outter {
                    width: 100%;
                    position: relative;
                    height: 3px;    
                    background: #D25355;

                    .bar-inner {
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: #f4f4f4;
                        height: 100%;
                        transition: width 5s;
                    }
                }
            }
                    
        }
   }
</style>
