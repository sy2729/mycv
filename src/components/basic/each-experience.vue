<template>
    <div :class="['each-experience', 'flex', 'justify-center', 'align-center', 'each-clickable', 'relative',{active: activeState, viewDetail: viewDetailState}]" @click=viewEach>
             <transition name='show-content'>
                <div class="summary-wrap w-100 flex align-center" v-if=!viewDetailState>
                    <div class='experience-logo-wrap'>
                        <img :src=logo class='experience-logo'>
                    </div>
                    <div class="experience-info-wrap flex justify-space-between">
                        <div class="experience-info">
                            <p class='company'>{{company}}</p>
                            <p class='role'>{{role}}</p>
                        </div>

                        <p class='experience-date'>
                            <span>{{beginDate}}</span>
                                -
                            <span>{{endDate}}</span>
                        </p>   
                    </div>
                </div>
             </transition>

            <transition name='show-content'>
                <div class='experience-detail w-100' v-if=viewDetailState>
                    <div class="experience-abstract-info flex justify-space-between">
                        <div class="experience-info">
                            <p class='company'>{{company}}</p>
                            <p class='role'>{{role}}</p>
                        </div>

                        <p class='experience-date'>
                            <span>{{beginDate}}</span>
                                -
                            <span>{{endDate}}</span>
                        </p>   
                    </div>
                    <ul>
                        <li v-for='(i, index) in detail && detail.descrip' :key='index'>{{i}}</li>
                    </ul>
                </div>
            </transition>

            <div class='change-state absolute hide view-summary' v-if=viewDetailState>Back</div>
        </div>
</template>


<script>
export default {
    name: 'eachExperience',
    props: ['logo', 'role', 'company', 'beginDate', 'endDate', 'activeState', 'detail'],
    data: function(){
        return {
            viewDetailState: true,

        }
    },
    methods: {
        viewEach(){
            this.viewDetailState = !this.viewDetailState;
        }
    }
}
</script>

<style lang="scss" scoped>
    .each-experience {
               padding: 10px 40px;
               min-height: 75px;
            //    background: #fff; 
               border: 1px solid #F4F4F4;
               margin-top: 10px;
               margin-right: 10px;
               transition: min-height .4s;

                &.viewDetail {
                    min-height: 120px;
                    align-items: flex-start;
                    // height: 180px;
                    overflow-y: scroll;
                }

                .change-state {
                    right: 20px;
                    top: 20px;
                    color: #ddd;
                }
                &:hover {
                    box-shadow: $activeBoxShadow;
                }
                &:hover .change-state {
                    opacity: 1;
                }


            .summary-wrap {
                .experience-logo-wrap {
                    min-width: 100px;
                    .experience-logo {
                        width: 40px;
                        height: auto;
                    }
                }

                .experience-info-wrap {
                    flex: 1 1 auto;
                }
            }

            .experience-info {
                margin-right: 5px;
                .company {
                    font-size: 1.1em;
                }
                .role {
                    color: $theme;
                }
            }

            .experience-date {
                justify-self: flex-end;
                color: #9B9B9B;
            }

            .experience-detail {
                padding-top: 10px;

                ul {
                    width: 89%;
                    padding: 20px;
                }
            }
    }
</style>
