<template>
    <div :class="['work-section', 'each-section', 'relative', {'full': mode === 'full'}]" :style="{background: sectionColor}">
        <switch-type :types=worktypes @switch-type=switchType></switch-type>
        <section-title :order=order :name=works.sectionName>
            <div class="expand-btn relative circle-btn flex justify-center align-center sticky" @click=changeMode>
                <i :class="['fa',{'fa-angle-down': mode !== 'full'}, {'fa-angle-up': mode === 'full'}]"></i>
            </div>
        </section-title>
        <div class='section-content flex flex-nowrap' ref='works'>
            <router-link v-for='i in filteredWorks.allWorks' :key=i.id :to='`/work?id=${i.id}`'>
                <each-work v-bind='i' v-if="i.display || true"></each-work>
            </router-link>
        </div>
        <button :class="['next-btn', 'flex', 'absolute', 'justify-center', 'align-center', 'circle-btn',{'deactive': scrollToEnd}]" @click=scrollRight v-if="mode !== 'full'"><i class='fa fa-angle-right'></i></button>
        <progress-bar :totalLength=allWorkLength :viewLength=viewLength :scrolledDistance=scrolledDistance v-if="mode !== 'full'"></progress-bar>
    </div>
</template>

<script>
// sectionTitle,
//         eachWork,
//         progressBar,
//         switchType,
import sectionTitle from './basic/section-title';
import eachWork from './basic/each-work';
import progressBar from './basic/progress-bar';
import switchType from './basic/switch-type';
import { starFirst } from '../utils/workArrange';
// import workSkeleton from './basic/work-skeleton'


export default {
    name: 'workSection',
    data: function(){
        return {
            initWorkType: 'web',
            sectionColor: '#F5F5F5',
            order: '02',
            sectionName: 'Portfolio',
            filteredWorks: [],
            works: [],
            allWorkLength: 0,
            viewLength: 20,
            scrolledDistance: 0,
            scrollToEnd: false,
            mode: 'full'
        }
    },
    props: ['worktypes', 'workData'],
    methods: {
        detectScrollDistance(){
            let value = this.getScrollDistance();
            this.scrolledDistance = this.initialDistanceBeforeScroll - value;
            this.detectScrollToEnd();
        },

        getScrollDistance(){
            return document.querySelectorAll('.each-work')[0].getBoundingClientRect().left;
        },

        getInitialScrollDistance(){
            return document.querySelector('.section-content').getBoundingClientRect().left;
        },
        getBarStyle(){
            let allLength = this.$refs.works.scrollWidth;
            let viewLength = this.$refs.works.getBoundingClientRect().width;
            this.viewLength = viewLength;
            this.allWorkLength = allLength;
        },
        scrollRight(){
            this.scrollHorizontal(this.$refs.works, this.$refs.works.scrollLeft + 280, 500);
            // this.$refs.works.scrollLeft = this.$refs.works.scrollLeft + 280;
            this.detectScrollToEnd();
        },
        detectScrollToEnd(){
            if (this.scrolledDistance + this.viewLength >= this.allWorkLength) {
                this.scrollToEnd = true;
            }else {
                this.scrollToEnd = false;
            }
        },
        viewWorkDetail(data){
            this.$emit('view-work-detail', data)
        },
        scrollHorizontal(node, position, timeout){
            var scrollLeft = node.scrollLeft,
                direction = position - scrollLeft > 0 ? 1 : -1,
                distance = Math.abs(position - scrollLeft),
                split = distance / 50,
                _timeout;

            if (position !== scrollLeft) {
                timeout = timeout || 1000;
                split *= direction;

                _timeout = setInterval(function () {
                    scrollLeft += split;
                    distance -= Math.abs(split);
                    if (0 >= distance) {
                        node.scrollLeft = position;
                        clearInterval(_timeout);
                        _timeout = null;
                    } else {
                        node.scrollLeft = scrollLeft;
                    }
                }, timeout / 100);
            }
        },

        switchType(data){
            if(data.toLowerCase() === 'all') {
                this.filteredWorks = JSON.parse(JSON.stringify(this.works));
            }else {
                let results = this.works.allWorks.filter((i) => {
                    if (i.type.toLowerCase() === data.toLowerCase()) {
                        return i
                    }
                });
                this.filteredWorks.allWorks = starFirst(results);
            };
        },
        shuffle(arr) {
            var i = arr.length, t, j;
            while (i) {
                j = Math.floor(Math.random() * i--); //!!!
                t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            } 
        },
        loadData(){
            this.filteredWorks = JSON.parse(JSON.stringify(this.works));
            this.switchType(this.initWorkType)
        },
        changeMode(){
            this.mode = this.mode === 'full' ? 'horizontal' : 'full';
        },
        recalculateBar() {
            this.getBarStyle();
            this.initialDistanceBeforeScroll = this.getInitialScrollDistance();
        }
    },
    components: {
        sectionTitle,
        eachWork,
        progressBar,
        switchType,
        // workSkeleton
    },
    mounted(){
        if(this.$props.workData) {
            this.works = this.$props.workData;
        }
        // get alllength and view length of the work
        this.getBarStyle();

        // watch the work scroll
        this.$refs.works.onscroll = this.detectScrollDistance;
        // get the initial left value to calculate how long scrolled
        this.initialDistanceBeforeScroll = this.getInitialScrollDistance();

        // watch the browser resize to recalculate the initial left value
        window.addEventListener('resize', this.recalculateBar);
        ScrollReveal().reveal('.work-section', { afterReveal: this.loadData });

        // detect mobile to change display mode
        if(window.innerWidth < 500) {
          this.changeMode();
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.recalculateBar);
        ScrollReveal().destroy();
    },
    updated(){
        // update the scrollbar visual everytime change the work content
        this.getBarStyle();
        this.detectScrollToEnd();
    },
    watch: {
        'workData': function(){
            this.works = this.$props.workData;
            this.shuffle(this.works.allWorks);
            this.loadData();
            // use all works by default
            // this.filteredWorks = this.works;
        }
    }
}
</script>

<style lang="scss">
    .work-section {
        .switch-type {
            flex-basis: 100%;
        }
        .expand-btn {
            width: 40px;
            height: 40px;
        }

        &.full {
            align-items: flex-start;
            
            .section-title-wrap {
                position: sticky;
                top: 50px;
                @media screen and(max-width: 745px) {
                    position: static;
                }
            }
        }


        &.full .section-content{
            /* justify-content: space-around; */
            flex-wrap: wrap;
            overflow: unset;
            
            .each-work {
                margin-top: 7px;
                margin-bottom: 7px;
                margin-right: 10px;
            }
            @media screen and(max-width: 1024px) {
                width: calc(100% - 300px);
                justify-content: center;
                .each-work {
                    min-width: 240px;
                    height: 220px;
                    .work-cover {
                        .work-info-wrap {
                            font-size: .9em;
                        }
                        .work-tag {
                            font-size: .5em;
                            p {
                                margin: 0 3px;
                            }
                        }
                    }
                }
                /* justify-content: space-around; */
            }
        }
        .section-content {
            overflow-x: scroll;

            .each-work {
                min-width: 280px;
                height: 250px;
                background: transparent center no-repeat;
                background-size: cover;
                margin-right: 10px;
                box-shadow: 2px 2px 6px 0 rgba(110, 110, 110, 0.5);

                .work-cover {
                    width: 100%;
                    height: 100%;
                    background: rgba(100, 100, 100, 0.5);
                    /* opacity: 0; */
                    transition: opacity .5s;
                    color: #f4f4f4;

                    .work-info-wrap {
                        width: 100%;
                        margin: 0 auto;
                        text-shadow: 2px 2px 2px rgba(100, 100, 100, .5);
                        .work-name {margin-bottom: 10px;}
                        .current-type {
                            font-size: 1.2em;
                            font-weight: 100;
                        }
                    }
                    .work-tag {
                        left: 10px;
                        bottom: 10px;
                        width: 100%;
                        p {
                            font-size: .7em;
                            padding: 5px 10px;
                            background: $theme;
                            margin: 0 5px;
                            border-radius: 4px;
                        }
                    }
                }

                /* &:hover .work-cover{
                    opacity: 1;
                } */

            }

            
        }
        
        .next-btn {
            // position: absolute;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            height: 40px;
            width: 40px;
            top: 50%;
            transform: translate(50%, -50%);
            right: 125px;
            
        }
    }
</style>
