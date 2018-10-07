<template>
    <aside class='sideBar'>
        <switch-type @switch-type=switchType :types=worktypes></switch-type>
        <ul>
            <router-link v-for='(i, index) in filteredWorks' :key='index' :to='`/work?id=${index}`'>
                <li :class="{'header-bar': i.id === currentId}" @click='switchWork(i.id)' :data-id=i.id ><span class="li-name">{{i.name}}</span> <span class="li-tag">{{i.type}}</span></li>
            </router-link>
        </ul>
    </aside>
</template>

<script>
import switchType from './switch-type';
export default {
    name: 'sideBarInWorkDetail',
    data: function () {
        return {
            filteredWorks: [],
            works: [],
        }
    },
    props: ['worktypes', 'allwork'],
    methods: {
        switchWork(data){
            this.filteredWorks.map((i)=>{
                if(data === i.id) {
                    this.$emit('switch-work-detail', i)
                }
            })
        },

        switchType(data) {
            console.log(data)
            if (data.toLowerCase() === 'all') {
                this.filteredWorks = this.works;
            } else {
                let results = this.works.filter((i) => {
                    if (i.type.toLowerCase() === data.toLowerCase()) {
                        return i
                    }
                });
                this.filteredWorks = results;
            };
        },
    },
    props: ['allwork', 'currentId', 'worktypes'],
    beforeMount(){
        this.works = this.$props.allwork;
        this.filteredWorks = this.works;
    },
    watch: {
        allwork: function(val) {
            this.works = this.$props.allwork;
            this.filteredWorks = this.works;
        }
    },
    components: {
        switchType,
    }
}
</script>

<style lang="scss">
    .sideBar {
            min-width: 300px;
            width: 30%;
            display: table;
            height: 100%;
            padding: 20px;
            background: #FEFFFF;

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

                li {
                    padding: 10px 0 10px 10px;
                    cursor: pointer;
                    order: 2;
                    border-bottom: 1px solid #dedede;

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
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: 4px;
                            margin-left: 2px;
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
