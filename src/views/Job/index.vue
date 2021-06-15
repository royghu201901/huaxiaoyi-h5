<template>
  <div>
    <v-img src="@/assets/h5-job-banner.png" />
    <v-container fluid>
      <v-card
        elevation="5"
        v-for="(job, index) in jobs"
        :key="index"
        class="my-8"
        @click="job.overlay = !job.overlay"
      >
        <v-img :src="job.img" />
        <v-card-subtitle>
          <v-icon>
            mdi-format-list-bulleted
          </v-icon>
          <span class="text-subtitle-1" style="vertical-align: middle;">
            招聘岗位
          </span>
        </v-card-subtitle>
        <v-card-text class="text--primary">
          <div v-text="job.title"></div>
          <div v-text="job.position"></div>
        </v-card-text>

        <v-overlay
          :value="job.overlay"
          opacity="0.4"
        >
          <v-card width="20rem" max-height="80vh" style="overflow-y: scroll">
            <v-card-title v-text="job.title" />
            <v-card-text class="text--white">
              <p>
                岗位名称：{{ job.title }}
              </p>
              <p v-if="job.num">
                人数：{{ job.num }}
              </p>
              <p v-text="job.responsibility" style="white-space: pre-line;"></p>
              <p v-text="job.requirement" style="white-space: pre-line;"></p>
              <p v-text="job.position"></p>
              <p v-text="job.salary"></p>
              <p>简历投递：<a href="mailto:hxy_hr@hmviplus.com">hxy_hr@hmviplus.com</a></p>
              <p>联系电话：<a href="tel:13958129217">13958129217</a> 金女士</p>
            </v-card-text>
          </v-card>
        </v-overlay>
      </v-card>
    </v-container>

    <MyBackToTop2 />
  </div>
</template>

<script>
// 工作数据从jobs.js引入
import jobs from './jobs'

import MyBackToTop2 from '@/components/MyBackToTop2'

export default {
  components: {
    MyBackToTop2
  },
  data: () => ({
    jobs,
  })
}
</script>