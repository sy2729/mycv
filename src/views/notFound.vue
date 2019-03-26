<template>
    <div class="t-center vh-100 w-100 flex justify-center align-center flex-column">
        <div class="404-img-wrap ">
            <img src="/img/404.png" alt="" width="300">
        </div>
        <router-link class="underline p-1" to="/">Go back to the Home Page</router-link>
        <p class="gray">Will auto redirect in <span class="t-color">{{second}}</span> second</p>
    </div>
</template>

<script>
import local from "@/store/local.js";
export default {
    data() {
        return {
            second: 6,
            timerId: null
        }
    },

    mounted() {
        this.timerId = setInterval(()=> {
            this.second = this.second - 1;
            //when time is out
            if(this.second <= 0) {
                window.clearInterval(this.timerId);
                //redirect
                let path = local.getLocalStore('path') || 'dev'
                this.$router.push({name: path})
            }
        },1000)
    }
}
</script>
