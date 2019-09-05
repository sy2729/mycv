<template>
    <div :class="['each-experience', 'flex', 'justify-center', 'align-center', 'each-clickable', 'relative',{active: activeState, viewDetail: viewDetailState}]" @click=viewEach>
             <transition name='show-content'>
                <div class="summary-wrap w-100 flex align-center" v-if=!viewDetailState>
                    <div class='experience-logo-wrap'>
                        <img :src=logo class='experience-logo'>
                    </div>
                    <div class="experience-info-wrap">
                        <div class="experience-info">
                            <p class='company'>{{company}}</p>
                            <p class='experience-date'>
                                <span>{{beginDate}}</span>
                                    -
                                <span>{{endDate}}</span>
                            </p>
                            <p class='role'>{{role}}</p>
                        </div>   
                    </div>
                </div>
             </transition>

            <transition name='show-content'>
                <div class='experience-detail w-100 relative ov-hide' v-if=viewDetailState>
                    <div class="experience-abstract-info">
                        <div class="experience-info">
                            <p class='company'>{{company}}</p>
                            <p class='experience-date'>
                                <span>{{beginDate}}</span>
                                    -
                                <span>{{endDate}}</span>
                            </p>   
                            <p class='role'>{{role}}</p>
                        </div>
                    </div>
                    <ul>
                        <li class="exp-description-line" v-for='(i, index) in detail && detail.descrip' :key='index'>{{i}}</li>
                    </ul>
                    <div class="company-logo-bg-wrap absolute">
                        <img :src=logo class='experience-logo'>
                        <!-- <div class="company-logo-bg w-100"></div>
                        <div class="company-logo-bg-cover w-100"></div> -->
                    </div>
                </div>
            </transition>

            <!-- <div class='change-state absolute hide view-summary' v-if=viewDetailState>Back</div> -->
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
               /* border: 1px solid #ededed; */
               margin-top: 10px;
               /* margin-right: 10px; */
               transition: min-height .4s;
                min-width: 300px;

                &.viewDetail {
                    min-height: 120px;
                    align-items: flex-start;
                    // height: 180px;
                    overflow-y: scroll;

                    .company-logo-bg-wrap {
                        bottom: 0; right: 0;
                        transition: transform 1s ease-in-out;
                        transform: translate(0%, 100%);
                        
                        img {height: 200px; opacity: .08;}
                    }
                    &:hover {
                        .company-logo-bg-wrap {
                            transform: translate(0%, 0%);
                        }
                    }

                    .exp-description-line {
                        margin-bottom: 5px;
                    }
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
                    min-width: 100px;
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
                color: #767676;
            }

            .experience-detail {
                padding-top: 10px;

                ul {
                    width: 89%;
                    padding: 20px;
                    list-style: none;
                    padding-left: 0;
                }
            }

            @media screen and(max-width: 700px) {
                min-width: unset;
                width: 100% !important;

                &:after {
                    opacity: 0 !important;
                }
            }
    }


    .each-clickable, .header-bar {
        cursor: pointer;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            left: 10px;
            background: $theme;
            top: 10px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            opacity: 0;
            transition: opacity .4s;
        }

        &:hover:after{
            opacity: 1;
        }

        &.viewDetail:after {
            opacity: 1;
        }
    }
</style>
