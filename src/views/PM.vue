<template>
  <div class="home">
    <cv-button :current-language='currentLanguage' :cv-path='cvData.cvPath'></cv-button>
    <v-header :header-data='cvData.header' :current-language='currentLanguage' />
    <skill-section :skill-data=cvData.skills />
    <badge-band />
    <experience-section :experience-data=cvData.experiences />
    <education-section :education-data=cvData.educations />
    <work-section l :worktypes=workTypes :work-data=cvData.works />
    <v-footer />
  </div>
</template>

<script>
import basicStyle from '@/assets/basic.scss'
import vHeader from '@/components/v-header.vue'
import skillSection from '@/components/skill-section.vue'
import badgeBand from '@/components/badge-band.vue'
import experienceSection from '@/components/experience-section.vue'
import educationSection from '@/components/education-section.vue'
import workSection from '@/components/work-section.vue'
import vFooter from '@/components/v-footer.vue'
import cvButton from '@/components/cv-button.vue'
import { mapState } from 'vuex'
import local from '@/store/local.js'

export default {
  name: 'home',
  data(){
    return {
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
  components: {
    vHeader,
    skillSection,
    badgeBand,
    experienceSection,
    educationSection,
    workSection,
    vFooter,
    cvButton
  },
  created(){
      let route = this.$route.path;
      if(this.cvData.works === undefined) {
        this.$store.dispatch('judgeSystemLanguage', this.$route.path)
      }

      local.setLocalStore('path', 'pm')
  },
  // watch: {
  //   '$route'(to, from) {
  //      let route = this.$route.path;
  //       if(this.cvData.works === undefined) {
  //         this.$store.dispatch('judgeSystemLanguage', this.$route.path)
  //       }      
  //   }
  // }
}
</script>
<style lang="scss" scoped>
  .cv-button {
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 5;
  }
</style>