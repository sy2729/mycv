<template>
  <div class="each-section blog-section">
    <section-title :order=order name="My blogs"></section-title>
    <div class="section-content flex flex-wrap">
      <each-blog v-for="(i, index) in blogData" :key='i._id || index' :blog-data=i />
      <div class="w-100 t-center m-2">
        <button v-if="page !== 3" class="load-more pointer uppercase" @click="loadMore">{{loading ? '...' : 'load more'}}</button>
        <button v-else class="load-more pointer uppercase" @click="window.open('http://sy2729.github.io/')">View Blog Site</button>
      </div>
    </div>
  </div>  
</template>

<script>
import sectionTitle from './basic/section-title';
import eachBlog from './basic/each-blog';
import { getBlog } from "@/api";

export default {
  data(){
    return {
      order: '05',
      blogData: [
        {
          title: 'title1',
          abstract: 'test abstract 1',
          view: 1,
          up: 1
        },
        {
          title: 'title2',
          abstract: 'test abstract 2',
          view: 1,
          up: 1
        },
        // {
        //   title: 'title2',
        //   abstract: 'test abstract 2',
        //   view: 1,
        //   up: 1
        // },
        // {
        //   title: 'title2',
        //   abstract: 'test abstract 2',
        //   view: 1,
        //   up: 1
        // },
        // {
        //   title: 'title2',
        //   abstract: 'test abstract 2',
        //   view: 1,
        //   up: 1
        // },
        // {
        //   title: 'title2',
        //   abstract: 'test abstract 2',
        //   view: 1,
        //   up: 1
        // },
        // {
        //   title: 'title2',
        //   abstract: 'test abstract 2',
        //   view: 1,
        //   up: 1
        // },
      ],
      loading: false,
      page: 0,
      window
    }
  },
  components: {
    sectionTitle,
    eachBlog
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
</style>
