<template>
    <div class="education-section each-section" :style="{background: sectionColor}">
             <section-title :order=order :name=educations.sectionName></section-title>
             <div class='section-content'>
                <each-education v-for='(i, index) in educations.allEducations' :key=index v-bind='i'></each-education>
             </div>
    </div>
</template>

<script>
import eachEducation from './basic/each-education'
import sectionTitle from './basic/section-title';
export default {
    name: 'educationSection',
    data: function(){
        return {
            sectionColor: '#fff',
            order: '03',
            sectionName: 'Education',
            educations: [],
        }
    },
    props: ['educationData'],
    components: {
        sectionTitle,
        eachEducation,
    },
    watch: {
        'educationData': function(){
            this.educations = this.$props.educationData;
        }
    },
    beforeMount(){
         if(this.$props.educationData) {
            this.educations = this.$props.educationData;
        }
    }    
}
</script>

<style lang="scss">
     .education-section {
        .section-content {
            display: flex;
            flex-wrap: wrap;

            .each-education {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 22px 20px;
                border: 1px solid #F4F4F4;
                width: calc(50% - 10px);
                min-width: 280px;
                margin-top: 10px;
                margin-right: 10px;
                // height: 110px;
                font-size: 13px;
                transition: .6s;

                &.active {
                    box-shadow: $activeBoxShadow;
                }

                .school-info-wrap {
                    display: flex;
                    justify-content: space-between;

                    .major {
                        color: $theme;
                    }
                }

                .education-date {
                    margin-top: 30px;
                    color: #9E9E9E;
                }
            }
        }

    }
</style>
