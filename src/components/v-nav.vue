<template>
    <nav>
            <img :src=logoImg>
            <ul class='nav-options'>
                <li v-for='i in navList' @click='chooseToView(i.name)' :key=i.name>{{i.name}}</li>
            </ul>
    </nav>
</template>


<script>
export default {
    data(){
        return {
            logoImg: './img/logo.png',
            navList: [
                {
                    name: 'Web'
                },
                {
                    name: 'Video'
                },
                {
                    name: 'Design'
                },
                {
                    name: 'Blog'
                },
            ]
        }
    },
    
    methods: {
        chooseToView(e){
            this.$emit(e)
        }
    },

    // mounted(){
    //     // this.$store.dispatch('judgeSystemLanguage')
    // }
}
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        height: 40px;
        background: transparent;
        justify-content: space-between;
        margin: 20px;
        align-items: center;
        position: relative;
        z-index: 4;

        img {
            align-self: flex-end;
            width: 40px;
            
        }


        .nav-options {
            display: flex;
            width: 60%;
            justify-content: space-around;
            align-self: center;
            color: #f4f4f4;
            
            li {
                list-style: none;
                cursor: pointer;
            }
        }   
    }
</style>
