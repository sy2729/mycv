<template>
    <div class='work-detail flex relative' ref='detail' @click="clearFocus">
        <div class="bg-cover fixed" v-if="focusedImage">
            <div class="focused-content">
                <img :src='focusedImage' :alt="focusedImage">
            </div>
        </div>
        <!-- {{currentWork}}
        {{currentWorkId}} -->
        <section class='current-content-wrap'>
            <div class='title-wrap relative'>
                <h2 class='title'>{{currentWork.name}}</h2>
                <span class='t-color current-work-type absolute'>{{currentWork.type}}</span>
                <div class="work-link-wrap" v-if="currentWork.type==='web'">
                    <a target='_blank' :class="['link-preview',{ 'disabled': currentWork.link.preview === '' }]" :href="currentWork.link.preview ? currentWork.link.preview : 'javascript:;'" title="preivew"><span><i class='fa fa-eye'></i>preview</span></a>
                    <a target='_blank' :class="[{ 'disabled': currentWork.link.repo === '' }]" :href="currentWork.link.repo ? currentWork.link.repo : 'javascript:;'" title="repo"><span><i class='fab fa-github'></i>repo</span></a>
                </div>
                <div class="work-link-wrap" v-if="currentWork.type==='video'">
                    <a target='_blank' :class="['link-preview',{ 'disabled': currentWork.youtubeID === '' }]" :href="currentWork.youtubeID ? currentWork.link.youtube: 'javascript:;'" title="YouTube - Worldwide Audience"><span><i class='fa fa-youtube'></i></span></a>
                    <a target='_blank' :class="[{ 'disabled': currentWork.biliID === '' }]" :href="currentWork.biliID ? currentWork.link.bili: 'javascript:;'" title="bilibili - Chinese Audience"><span><i class='iconfont'>&#xe607;</i></span></a>
                </div>
                <ul class='tags flex flex-wrap'>
                    <li v-for='i in currentWork.tags' :key="'key:'+ i">{{i}}</li><!-- Have to use this key value now, could change it to unique key with id in the future -->
                </ul>
            </div>
            <div class='work-content'>
                <div v-for="(i, index) in currentWork.descrip" :class="[{'each-descrip-img': i.type==='img'},{'work-videoWrapper': i.type==='video'} ]" :key="index + 'key'">
                    <transition-group name='show-content'>
                        <iframe key="youtube" :src="i.content.youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen v-if="i.type==='video' && currentLanguage === 'en' && currentWork.youtubeID !== ''" @load="videoLoad"></iframe>
                        <iframe key="bilibili" :src="i.content.bili" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen v-if="i.type==='video' && currentLanguage === 'zh' && currentWork.biliID !== ''"  @load="videoLoad"></iframe>
                        <div key="videoPlaceHolder" v-if="i.type==='video' && videoLoadState !== true">hahahha</div>
                    </transition-group>
                    <!-- <img :src='i.content' v-if="i.type==='img'" v-on:click.stop='viewLargePicture(i)'> -->
                    <img-loader :img='i.content' v-if="i.type==='img'" v-on:click.stop.native='viewLargePicture(i)'></img-loader>
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
import imgLoader from '@/components/basic/img-loader';
import {mapState} from 'vuex';
import changeTitle from '@/mixins/changeTitle';
import viewScaleOperation from '@/mixins/viewScaleOperation';

export default {
    name: 'workDetail',
    data: function(){
        return {
            // currentWork: {},
            // allWorks: [],
            currentWork: {},
            allWorks: [],
            currentWorkId: undefined,
            focusedImage: undefined,
            videoLoadState: false
        }
    },
    computed: {
        ...mapState([
            'cvData',
            'workTypes'
        ]),
        currentLanguage: {
            set: function(value) {
                this.$store.state.currentLanguage = value;
            },
            get: function(value) {
                return this.$store.state.currentLanguage
            }
        }
        // currentWork(){
        //     return this.$store.getters.cvData.works
        // }

    },
    mixins: [changeTitle, viewScaleOperation],
    watch: {
        cvData(val) {
            
            this.allWorks = this.$store.getters.cvData.works.allWorks
            this.currentWork = this.$store.getters.cvData.works.allWorks[this.currentWorkId];
            //change the page title
            this.changeTitle(this.currentWork['name']);
        },
        '$route'(to, from) {
            this.getId();
            var currentWork = this.$store.getters.cvData.works.allWorks;
            currentWork = currentWork.filter((i)=>{
                return i.id === this.currentWorkId - 0;
            });
            this.currentWork = currentWork[0];
            //change the page title
            this.changeTitle(this.currentWork['name']);
            // this.currentWork = this.$store.getters.cvData.works.allWorks[this.currentWorkId];
        }
    },

    components: {
        "side-bar-in-work-detail": sideBarInWorkDetail,
        imgLoader
    },
    methods: {
        switchWork(data){
            // plugin the data
            this.currentWork = data;
            // scroll back to the top
            window.scrollTo(0, 0);
        },
        changeVideo(data){
            // this.currentLanguage = 'zh';
            // return
            if(data === 'en' && this.currentLanguage !== 'en') {
                this.currentLanguage = 'en';
            } else if (data === 'zh' && this.currentLanguage !== 'zh') {
                this.currentLanguage = 'zh';
            }
        },
        getId(){
           this.currentWorkId = this.$route.query.id;
        },
        viewLargePicture(data) {
            this.focusedImage = data.content;

            //allow scale the page
            this.viewScaleOperation(true);
        },
        clearFocus() {
            //disallow scale the page
            this.viewScaleOperation(false);
            this.focusedImage = undefined;
        },
        videoLoad(){
            this.videoLoadState = true;
        }
    },
    beforeMount(){
        this.getId();
        // console.log(this.currentWorkId)
        // let name = this.$route.name;
        let name = 'dev'
        
        if(this.cvData.works === undefined) {
            this.$store.dispatch('judgeSystemLanguage', name)
        }else {
            this.allWorks = this.cvData.works.allWorks
            var currentWork = this.allWorks.filter((i)=>{
                return i.id === this.currentWorkId - 0;
            });
            this.currentWork = currentWork[0]
        }
    },
    mounted(){
        //change the page title
        this.changeTitle(this.currentWork['name']);
    }
    
}
</script>

<style lang="scss">

    .work-detail {
        min-height: 100vh;
        padding: 30px;
        /* overflow-y: auto; */
        align-items: baseline;
        background: #F6F6F6;
        z-index: 5;

        .bg-cover {
            z-index: 9;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.4);
            overflow: overlay;

            .focused-content {
                width: 70%; 
                margin: 30px auto;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }


        .current-content-wrap {
            flex: 1 1 auto;
            padding: 0 20px;
            margin-right: 20px;
            background: #FEFFFF;
            .title-wrap {
                padding: 25px;

                .current-work-type {
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

                        &.disabled {
                            i {
                                color: rgb(209, 209, 209) !important;
                                cursor: not-allowed !important;
                                pointer-events: none !important;
                            }
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
                    margin: 10px 0;
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

                    .image-loader {
                        img {
                            width: 100%;
                            height: auto;
                            margin: 0 auto;
                            display: block;
                            // float: right;
                            padding: 20px 0;
                            /* max-width: 400px; */
                            min-width: 200px;
                        }
                    }

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
                    font-size: 1em;

                    a {
                        color: $theme !important;
                    }

                    &.t-center {
                        font-size: inherit;
                        margin: 20px 0 -25px;
                        color: #7d7d7d;
                    }
                }
                .each-descrip-img {
                    /* background: #efefef; */
                    width: 90%;
                    margin: 30px auto;
                    min-width: 260px;
                    cursor: pointer;
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
