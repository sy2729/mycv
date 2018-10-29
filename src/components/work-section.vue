<template>
    <div class="work-section each-section" :style="{background: sectionColor}">
        <switch-type :types=worktypes @switch-type=switchType></switch-type>
            <section-title :order=order :name=works.sectionName></section-title>
            <div class='section-content' ref='works'>
            <router-link v-for='(i, index) in filteredWorks.allWorks' :key=i.id :to='`/work?id=${i.id}`'>
                <each-work v-bind='i'></each-work>
            </router-link>
            </div>
            <button :class="['next-btn',{end: scrollToEnd}]" @click=scrollRight><i class='fa fa-angle-right'></i></button>
            <progress-bar :totalLength=allWorkLength :viewLength=viewLength :scrolledDistance=scrolledDistance></progress-bar>
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



export default {
    name: 'workSection',
    data: function(){
        return {
            sectionColor: '#F5F5F5',
            order: '04',
            sectionName: 'Portfolio',
            filteredWorks: [],
            works: [],
            allWorkLength: 0,
            viewLength: 20,
            scrolledDistance: 0,
            scrollToEnd: false,
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
                this.filteredWorks.allWorks = results;
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
        }
    },
    components: {
        sectionTitle,
        eachWork,
        progressBar,
        switchType,
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
        window.addEventListener('resize', ()=>{
            this.getBarStyle();
            this.initialDistanceBeforeScroll = this.getInitialScrollDistance();
        });
        ScrollReveal().reveal('.work-section', { afterReveal: this.loadData });
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
        position: relative;
        .switch-type {
            flex-basis: 100%;
            .type-wrap {
                float: right;
            }
        }
        .section-content {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: scroll;

            .each-work {
                position: relative;
                min-width: 280px;
                height: 250px;
                background: transparent center no-repeat;
                background-size: cover;
                cursor: pointer;
                margin-right: 10px;
                box-shadow: 2px 2px 6px 0 rgba(110, 110, 110, 0.5);

                .work-cover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(100, 100, 100, 0.5);
                    opacity: 0;
                    transition: opacity .5s;
                    color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .work-info-wrap {
                        width: 70%;
                        margin: 0 auto;
                        text-align: center;
                        .work-name {

                        }

                        .current-type {
                            font-size: 1.5em;
                            font-weight: 100;
                        }
                    }
                }

                &:hover .work-cover{
                    opacity: 1;
                }

            }

            
        }
        
        .next-btn {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
            font-size: 1.35em;
            color: #fefefe;
            top: 50%;
            transform: translate(50%, -50%);
            right: 125px;
            border: none;
            background: #f4f4f4;
            border-radius: 50%;
            box-shadow: 2px 2px 10px 0 rgba(100, 100, 100, 0.5);
            cursor: pointer;

            i {
                position: relative;
                z-index: 3;
            }

            &:focus {
                outline: none;
            }

            &:after {
                content: '';
                border-radius: inherit;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;                
                background: $theme;
                transition: all .4s ease-in-out;
                transform-origin: center;
                z-index: 2;
            }

            &.end {
                color: #ddd;
                cursor: not-allowed;

                &:after {
                    background: #ddd;
                    transform: scale(0);
                }
            }
        }
        
        .progress-out {
            margin: 30px 0 10px;
            width: 60%;
            min-width: 200px;
            position: relative;
            background-color: #DEDEDE;
            height: 2px;
            overflow: hidden;
            .progress-in {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background-color: $theme;
            }
        }
    }
</style>
