<template>
    <aside class='sideBar'>
        <switch-type @switch-type=switchType :types=worktypes></switch-type>
        <ul>
            <router-link class='sidebar-list-link' v-for='i in filteredWorks' :key='i.id' :to='`/work?id=${i.id}`'>
                <li :class="{'header-bar': i.id === currentId}" @click='switchWork(i.id)' :data-id=i.id >
                    <span class="li-name">{{i.name}}</span>
                    <span :class="`li-tag ${i.star ? 'star' : ''}`">{{i.type}}</span>
                </li>
            </router-link>
        </ul>
    </aside>
</template>

<script>
import switchType from './switch-type';
import { starFirst } from "../../utils/workArrange";
export default {
    name: 'sideBarInWorkDetail',
    data: function () {
        return {
            initWorkType: 'web',
            filteredWorks: [],
            works: [],
        }
    },
    props: ['worktypes', 'allwork'],
    methods: {
        switchWork(data){
            // filter the work from the data
            this.filteredWorks.map((i)=>{
                if(data === i.id) {
                    this.$emit('switch-work-detail', i)
                }
            });
        },

        switchType(data) {
            if (data.toLowerCase() === 'all') {
                this.filteredWorks = this.works;
            } else {
                let results = this.works.filter((i) => {
                    // console.log(i.type.toLowerCase())
                    if (i.type.toLowerCase() === data.toLowerCase()) {
                        return i
                    }
                });
                this.filteredWorks = starFirst(results);
            };
        },
    },
    props: ['allwork', 'currentId', 'worktypes'],
    beforeMount(){
        this.works = this.$props.allwork;
        this.filteredWorks = this.works;
        this.switchType(this.initWorkType)
    },
    watch: {
        allwork: function(val) {
            this.works = this.$props.allwork;
            // @TODOS also need to filter the works at initial rendering
            this.filteredWorks = starFirst(this.works);
        },
    },
    components: {
        switchType,
    }
}
</script>

<style lang="scss">
    .sideBar {
            min-width: 400px;
            max-width: 450px;
            display: table;
            height: 100%;
            padding: 20px;
            background: #FEFFFF;
            position: sticky;
            top: 20px;            

            .switch-type {
                margin: 0 0 10px 0;
                ul {
                    margin: 0;
                    li {
                        padding: 5px 0;
                        border: none;
                    }

                }
            }

            ul { 
                list-style: none;
                display: flex;
                flex-direction: column;
                /* make a scroll list when it's too long */
                overflow-y: auto;
                max-height: calc(100vh - 120px);

                a.sidebar-list-link:not(:last-of-type) {
                    li {
                        border-bottom: 1px solid #dedede;
                    }
                }

                li {
                    padding: 10px 0 10px 10px;
                    cursor: pointer;
                    order: 2;
                    span.li-name {
                        vertical-align: middle;
                    }
                    span.li-tag {
                        // margin-right: 4px;
                        // float: right;
                        // font-size: 0.9em;
                        // color: $light-theme;
                        float: right;
                        font-size: 0.7em;
                        color: #e69b9d;
                        padding: 0 10px;
                        background: #f3f3f3;
                        border-radius: 30px;
                        /* display: inline-block; */
                        vertical-align: middle;
                        margin-right: 4px;
                        margin-left: 2px;
                        &.star {
                          color: #f3f3f3;
                          background: $theme;
                        }
                    }

                    &.header-bar {
                        order: 1;
                        cursor: unset;
                        span.li-tag {
                            color: $theme;
                            background: #fff;
                        }
                    }
                }
             }
            
        }
</style>
