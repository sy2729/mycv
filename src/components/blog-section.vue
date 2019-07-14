<template>
  <div class="each-section blog-section">
    <section-title :order=order name="My blogs"></section-title>
    <div class="section-content flex flex-wrap" v-if="blogData.length !== 0">
      <each-blog v-for="(i, index) in blogData" :key='i._id || index' :blog-data=i />
      <div class="w-100 t-center m-2">
        <button v-if="page !== 3" class="load-more pointer uppercase" @click="loadMore">{{loading ? '...' : 'load more'}}</button>
        <button v-else class="load-more pointer uppercase" @click="window.open('http://sy2729.github.io/')">View Blog Site</button>
      </div>
    </div>
    <div class="section-content" v-else>
      <ImgLoader :loading="loadingImage" :img="loadingImage" loadingText="loading the blog" :height="300" />
    </div>
    <!-- <div class="section-content background-cover w-100" :style="{'background-image': }" v-else></div> -->
  </div>  
</template>

<script>
import sectionTitle from './basic/section-title';
import eachBlog from './basic/each-blog';
import { getBlog } from "@/api";
import ImgLoader from '@/components/basic/img-loader.vue';

export default {
  data(){
    return {
      order: '05',
      blogData: [],
      loading: false,
      page: 0,
      window,
      loadingImage: '/img/loading2.gif'
    }
  },
  components: {
    sectionTitle,
    eachBlog,
    ImgLoader
  },
  methods: {
    loadMore(){
      //switch loading status
      this.loading = true
      //get more blog data from here;
      this.page++
      this.blogData = this.allBlogData.slice(0, 3 * (this.page + 1))

       //switch loading status
      this.loading = false
    }
  },

  created(){
    getBlog()
      .then(r=>{
        this.allBlogData = r;
        // console.log(r)
        this.blogData = r.slice(0,3)
      })
  }
}
</script>

<style lang="scss" scoped>
  .load-more {padding: 10px 15px; border-radius: 25px; border: 2px solid $theme; font-size: 1em; color: $theme;}

  .section-content {
    @media screen and (max-width: 732px){
      justify-content: center;
    }
  }
</style>
