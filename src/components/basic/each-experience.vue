<template>
    <div :class="['each-experience', 'each-clickable',{active: activeState, viewDetail: viewDetailState}]" @click=viewEach>
             <transition name='show-content'>
                <div class="summary-wrap" v-if=!viewDetailState>
                    <div class='experience-logo-wrap'>
                        <img :src=logo class='experience-logo'>
                    </div>
                    <div class="experience-info-wrap">
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
                <div class='experience-detail' v-if=viewDetailState>
                    <ul>
                        <li v-for='(i, index) in detail.descrip' :key='index'>{{i}}</li>
                    </ul>
                </div>
            </transition>

            <div class='change-state view-summary' v-if=viewDetailState>Back</div>
        </div>
</template>


<script>
export default {
    name: 'eachExperience',
    props: ['logo', 'role', 'company', 'beginDate', 'endDate', 'activeState', 'detail'],
    data: function(){
        return {
            viewDetailState: false,

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
            //    height: 75px;
               border: 1px solid #F4F4F4;
               margin-top: 10px;
               margin-right: 10px;
               position: relative;
               transition: min-height .4s;
            //    transition: height .4s;
               display: flex;
               justify-content: center;
               align-items: center;

                &.active {
                    box-shadow: $activeBoxShadow;
                }

                &.viewDetail {
                    min-height: 120px;
                    align-items: flex-start;
                    // height: 180px;
                    overflow-y: scroll;
                }

                .change-state {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    color: #ddd;
                    opacity: 0;
                }
                &:hover .change-state {
                    opacity: 1;
                }


            .summary-wrap {
                width: 100%;
                display: flex;
                align-items: center;
                .experience-logo-wrap {
                    min-width: 100px;
                    .experience-logo {
                            width: 40px;
                            height: auto;
                    }
                }

                .experience-info-wrap {
                    display: flex;
                    justify-content: space-between;
                    flex: 1 1 auto;

                    .experience-info {
                        margin-right: 5px;
                        .role {
                            color: $theme;
                        }
                    }

                    .experience-date {
                        justify-self: flex-end;
                        color: #9B9B9B;
                    }
                }
            }

            .experience-detail {
                width: 100%;

                ul {
                    width: 89%;
                    padding: 20px;
                }
            }
    }
</style>
