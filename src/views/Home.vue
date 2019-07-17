<template>
  <div class="home">
    <cv-button :current-language='currentLanguage' :cv-path='cvData.cvPath' v-if="showCVBtn"></cv-button>
    <v-header :header-data='cvData.header' :current-language='currentLanguage' />
    <!-- <vue-lazy-component> -->
    <skill-section 
      :skill-data=cvData.skills
      :current-language='currentLanguage' />
    <!-- </vue-lazy-component> -->
    <!-- <vue-lazy-component> -->
    <work-section :worktypes=workTypes :work-data=cvData.works />
    <!-- </vue-lazy-component> -->
    <!-- <badge-band  /> -->
    <!-- <vue-lazy-component> -->
    <experience-section :experience-data=cvData.experiences />
    <!-- </vue-lazy-component> -->
    <!-- <vue-lazy-component> -->
    <education-section :education-data=cvData.educations />
    <blog-section />
    <!-- </vue-lazy-component> -->
    <v-footer />
    <!-- <vue-lazy-component> -->
      <!-- real component-->
    <comments :current-language='currentLanguage'/>
      <!-- skeleton component -->
      <!-- <st-series-sohu-skeleton slot="skeleton"/> -->
    <!-- </vue-lazy-component> -->
    <!-- {{getUserIcons}} -->
  </div>
</template>

<script>
import basicStyle from '@/assets/basic.scss'
import vHeader from '@/components/v-header.vue'
// import skillSection from '@/components/skill-section.vue'
import badgeBand from '@/components/badge-band.vue'
// import experienceSection from '@/components/experience-section.vue'
// import educationSection from '@/components/education-section.vue'
// import workSection from '@/components/work-section.vue'
// import vFooter from '@/components/v-footer.vue'
import cvButton from '@/components/cv-button.vue'
// import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'
import { mapState } from 'vuex'
import { getCVBtnState } from "@/api";
import local from "@/store/local.js";
import changeTitle from '@/mixins/changeTitle';

export default {
  name: 'home',
  data(){
    return {
      showCVBtn: false
      // cvData: {}
    }
  },
  methods: {

  },
  computed: {
    ...mapState([
      'cvData',
      'currentLanguage',
      'workTypes'
    ])
  },
  mixins:[changeTitle],
  components: {
    vHeader,
    skillSection: ()=>import('@/components/skill-section.vue'),
    // badgeBand,
    experienceSection: ()=>import('@/components/experience-section.vue'),
    educationSection: ()=>import('@/components/education-section.vue'),
    workSection: ()=>import('@/components/work-section.vue'),
    vFooter: ()=>import('@/components/v-footer.vue'),
    cvButton,
    // 'vue-lazy-component': VueLazyComponent,
    comments: ()=>import('@/components/comments.vue'),
    blogSection:()=>import('@/components/blog-section.vue')
  },
  created(){
    if(this.cvData.works === undefined) {
      this.$store.dispatch('judgeSystemLanguage', 'dev')
    }

    //whether to show the cvBtn
    getCVBtnState()
      .then(data=>{
        /* {cvBtnShow: boolean} */
        this.showCVBtn = data.cvBtnShow
      })

    local.setLocalStore('path', 'dev')
  },
  mounted(){
    this.changeTitle('Shuai Yuan - Portfolio')
  },
}
</script>

<style lang="scss" scoped>
  .cv-button {
    right: 30px;
    bottom: 30px;
    z-index: 5;
  }
</style>
