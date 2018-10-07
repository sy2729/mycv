<template>
  <div class="home">
    <v-header :header-data='cvData.header' :current-language='currentLanguage' />
    <skill-section :skill-data=cvData.skills />
    <experience-section :experience-data=cvData.experiences />
    <education-section :education-data=cvData.educations />
    <work-section l :worktypes=workTypes :work-data=cvData.works />
    <v-footer />
    <!-- {{getUserIcons}} -->
  </div>
</template>

<script>
import basicStyle from '@/assets/basic.scss'
import vHeader from '@/components/v-header.vue'
import skillSection from '@/components/skill-section.vue'
import experienceSection from '@/components/experience-section.vue'
import educationSection from '@/components/education-section.vue'
import workSection from '@/components/work-section.vue'
import vFooter from '@/components/v-footer.vue'
import { mapState } from 'vuex'

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
    experienceSection,
    educationSection,
    workSection,
    vFooter
  },
  created(){
      if(this.cvData.works === undefined) {
        this.$store.dispatch('judgeSystemLanguage', 'pm')
      }
  },
}
</script>
