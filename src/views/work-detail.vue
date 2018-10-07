<template>
    <div class='work-detail' ref='detail'>
        <!-- {{currentWork}}
        {{currentWorkId}} -->
        <section class='current-content-wrap'>
            <div class='title-wrap'>
                <h2 class='title'>{{currentWork.name}}</h2>
                <span class='t-color current-work-type'>{{currentWork.type}}</span>
                <div class="work-link-wrap" v-if="currentWork.type==='web'">
                    <a class='link-preview' :href='currentWork.link.preview' title="preivew"><span><i class='fa fa-eye'></i>preview</span></a>
                    <a :href='currentWork.link.repo' title="repo"><span><i class='fa fa-github'></i>repo</span></a>
                </div>
                <div class="work-link-wrap" v-if="currentWork.type==='video'">
                    <a class='link-preview' :href='currentWork.link.youtube' title="YouTube - Worldwide Audience"><span><i class='fa fa-youtube'></i></span></a>
                    <a :href='currentWork.link.bili' title="bilibili - Chinese Audience"><span><i class='iconfont'>&#xe607;</i></span></a>
                </div>
                <ul class='tags'>
                    <li v-for='(i, index) in currentWork.tags' :key='index'>{{i}}</li>
                </ul>
            </div>
            <div class='work-content'>
                <div v-for="(i, index) in currentWork.descrip" :class="[{'each-descrip-img': i.type==='img'},{'work-videoWrapper': i.type==='video'} ]" :key='index'>
                    <transition name='show-content'>
                        <iframe :src="i.content.youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen v-if="i.type==='video' && currentLanguage === 'en'"></iframe>
                        <iframe :src="i.content.bili" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen v-if="i.type==='video' && currentLanguage === 'zh'"></iframe>
                    </transition>
                    <img :src='i.content' v-if="i.type==='img'">
                    <p v-html='i.content' v-if="i.type==='text'"></p>
                </div>

                <p class='t-warning' v-if="currentWork.type==='video' && currentLanguage === 'zh' && !currentWork.biliID">!No Bilibili Video Available, please choose other sources</p>
                <p class='t-warning' v-if="currentWork.type==='video' && currentLanguage === 'en' && !currentWork.youtubeID">No YouTube Video Available, please choose other sources</p>

                <div v-if="currentWork.type==='video'" class='video-source-wrap'>
                    <p>Choose the video source based on your country:</p>
                    <span @click="changeVideo('en')" :class="[{active: currentLanguage === 'en'}, {'no-available': !currentWork.youtubeID}]">YouTube</span><span @click="changeVideo('zh')" :class="[{active: currentLanguage === 'zh'}, {'no-available': !currentWork.biliID}]" >BiliBili</span>
                </div>
            </div>
        </section>
        <side-bar-in-work-detail :allwork=allWorks :currentId=currentWork.id @switch-work-detail="switchWork" :worktypes=workTypes></side-bar-in-work-detail>
        <router-link to='/'>
            <div class="close">
                <span><i class="fa fa-times"></i></span>
            </div>
        </router-link>
    </div>
</template>

<script>
import sideBarInWorkDetail from '@/components/basic/side-bar-in-work-detail';
import {mapState} from 'vuex';
export default {
    name: 'workDetail',
    data: function(){
        return {
            // currentWork: {},
            // allWorks: [],
            currentWork: {},
            allWorks: [],
            currentWorkId: undefined,
        }
    },
    computed: {
        ...mapState([
            'cvData',
            'currentLanguage',
            'workTypes'
        ]),
        // currentWork(){
        //     return this.$store.getters.cvData.works
        // }

    },
    watch: {
        cvData(val) {
            
            this.allWorks = this.$store.getters.cvData.works.allWorks
            this.currentWork = this.$store.getters.cvData.works.allWorks[this.currentWorkId];
        },
        '$route'(to, from) {
            
            this.getId();
            this.currentWork = this.$store.getters.cvData.works.allWorks[this.currentWorkId];
        }
    },

    components: {
        "side-bar-in-work-detail": sideBarInWorkDetail,
    },
    methods: {
        switchWork(data){
            this.currentWork = data;
            this.$refs.detail.scrollTop = 0;
        },
        changeVideo(data){
            if(data === 'en' && this.currentLanguage !== 'en') {
                this.currentLanguage = 'en';
            } else if (data === 'zh' && this.currentLanguage !== 'zh') {
                this.currentLanguage = 'zh';
            }
        },
        getId(){
           this.currentWorkId = this.$route.query.id;
        }
    },
    beforeMount(){
        this.getId();
        // let name = this.$route.name;
        let name = 'dev'
        
        if(this.cvData.works === undefined) {
            this.$store.dispatch('judgeSystemLanguage', name)
        }else {
            this.allWorks = this.cvData.works.allWorks
            this.currentWork = this.allWorks[this.currentWorkId];
        }
    },
    
}
</script>

<style lang="scss" scoped>

    .work-detail {
        // position: fixed;
        // top: 0;
        // left: 0;
        // bottom: 0;
        // right: 0;
        padding: 30px;
        overflow-y: auto;
        display: flex;
        align-items: baseline;
        background: #F6F6F6;
        z-index: 5;


        .current-content-wrap {
            flex: 1 1 auto;
            padding: 0 20px;
            margin-right: 20px;
            background: #FEFFFF;
            .title-wrap {
                padding: 25px;
                position: relative;

                .current-work-type {
                    position: absolute;
                    right: 10px;
                    top: 35px;

                }
                .work-link-wrap {
                    padding: 10px 0;

                    a {
                        padding: 5px 15px 5px 0;
                        text-decoration: none;
                        color: #AAABAC;
                        line-height: 1.2em;

                        i {
                            color: #1D1D1D;
                            font-size: 1.2em;
                            padding-right: 10px;
                            vertical-align: middle;
                        }

                        &:hover {
                            color: rgb(209, 209, 209);
                            i {
                                color: #C93639;
                            }
                        }

                    }
                }

                .tags {
                    list-style: none;
                    display: flex;
                    margin: 10px 0;
                    flex-wrap: wrap;
                    font-size: 14px;
                    li {
                        padding: 2px 10px;
                        background: #F4F5F6;
                        color: #AAABAC;
                        margin: 5px 4px;
                    }
                }
            }

            .work-content {
                padding: 25px;

                .video-source-wrap {
                    span {
                        padding: 4px 10px;
                        border: 1px solid $light-theme;
                        cursor: pointer;
                        color: $light-theme;

                        &.active {
                            color: #fefefe;
                            background: $theme;
                            border-color: $theme;
                        }
                        &.no-available {
                            cursor: not-allowed;
                            border-color: #AAABAC;
                            pointer-events: none;
                            background: #eee;
                            color: #ddd;
                        }
                    }
                }

                .work-videoWrapper {
                    overflow:hidden;
                    padding-bottom:56.25%;
                    position:relative;
                    height:0;
                    iframe {
                        left:0;
                        top:0;
                        height:100%;
                        width:100%;
                        position:absolute;
                    }
                }

                p {
                        margin: 20px 0;
                        line-height: 2em;

                        a {
                            color: $theme;
                        }

                    &.t-center {
                        margin: 20px 0 -25px;
                        color: #7d7d7d;
                    }
                }
                .each-descrip-img {
                    background: #efefef;
                    width: 70%;
                    margin: 30px auto;
                    min-width: 260px;
                    img {
                        width: 90%;
                        height: auto;
                        margin: 0 auto;
                        display: block;
                        // float: right;
                        padding: 20px 0;
                        max-width: 400px;
                        min-width: 200px;
                    }
                }
            }
        }

        .close {
            position: fixed;
            right: -100px;
            top: -100px;
            font-size: 2em;
            cursor: pointer;
            background: #C93639;
            width: 200px;
            height: 200px;
            transform: rotate(45deg);

            span {
                transform: rotate(-45deg);
                display: block;
                position: absolute;
                bottom: 32px;
                right: 88px;
                color: #f4f4f4;
                font-size: inherit;
            }
        }
    }
</style>
