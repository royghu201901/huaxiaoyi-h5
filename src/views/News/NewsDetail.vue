<template>
  <div>
    <v-container fluid>
      <div
        v-for="news in newsDetail"
        :key="news.id"
      >
        <v-card
          v-if="id === news.id"
          elevation="5"
          class="pb-4"
        >
          <v-card-title v-text="news.title"/>
          <v-card-subtitle class="mt-0">
            <span class="mr-2">发布时间：{{ news.date }}</span>
            <span> | </span>
            <span class="ml-2">浏览量 {{ readNum }} </span>
          </v-card-subtitle>

          <v-divider class="mx-4"/>

          <!-- 新闻内容数据从newsDetail.js引入，如果不够再添加 -->
          <v-card-text v-if="news.content_01" v-html="news.content_01" />
          <v-img v-if="news.img_01" :src="news.img_01" class="mx-8"/>
          <div
            v-if="news.video_01"
            class="d-flex justify-center"
          >
            <video
              :src="news.video_01"
              id="videoShow"
              controls
            />
          </div>
          <v-card-text v-if="news.content_02" v-html="news.content_02" />
          <v-img v-if="news.img_02" :src="news.img_02" class="mx-8"/>
          <v-card-text v-if="news.content_03" v-html="news.content_03" />
          <v-img v-if="news.img_03" :src="news.img_03" class="mx-8"/>
          <v-card-text v-if="news.content_04" v-html="news.content_04" />
          <v-img v-if="news.img_04" :src="news.img_04" class="mx-8"/>
          <v-card-text v-if="news.content_05" v-html="news.content_05" />
          <v-img v-if="news.img_05" :src="news.img_05" class="mx-8"/>
          <v-card-text v-if="news.content_06" v-html="news.content_06" />
          <v-img v-if="news.img_06" :src="news.img_06" class="mx-8"/>
          <v-card-text v-if="news.content_07" v-html="news.content_07" />
          <v-img v-if="news.img_07" :src="news.img_07" class="mx-8"/>
          <v-card-text v-if="news.content_08" v-html="news.content_08" />
          <v-img v-if="news.img_08" :src="news.img_08" class="mx-8"/>
          <v-card-text v-if="news.content_09" v-html="news.content_09" />
          <v-img v-if="news.img_09" :src="news.img_09" class="mx-8"/>
          <v-card-text v-if="news.content_10" v-html="news.content_10" />
          <v-img v-if="news.img_10" :src="news.img_10" class="mx-8"/>
          <v-card-text v-if="news.content_11" v-html="news.content_11" />
          <v-img v-if="news.img_11" :src="news.img_11" class="mx-8"/>
          <v-card-text v-if="news.content_12" v-html="news.content_12" />
          <v-img v-if="news.img_12" :src="news.img_12" class="mx-8"/>
          <v-card-text v-if="news.content_13" v-html="news.content_13" />
          <v-img v-if="news.img_13" :src="news.img_13" class="mx-8"/>
          <v-card-text v-if="news.content_14" v-html="news.content_14" />
          <v-img v-if="news.img_14" :src="news.img_14" class="mx-8"/>
          <v-card-text v-if="news.content_15" v-html="news.content_15" />
          <v-img v-if="news.img_15" :src="news.img_15" class="mx-8"/>
          <v-card-text v-if="news.content_16" v-html="news.content_16" />
          <v-img v-if="news.img_16" :src="news.img_16" class="mx-8"/>

          <div class="mt-8 d-flex justify-center">
            <v-btn
              elevation="2"
              dark
              color="indigo"
              @click="backToList"
            >
              <v-icon class="mr-2">
                mdi-backup-restore
              </v-icon>
              <span>返回新闻中心</span>
            </v-btn>
          </div>
        </v-card>
      </div>
    </v-container>

    <MyBackToTop2 />
  </div>
</template>

<script>
// 新闻内容数据从newsDetail.js引入
import newsDetail from './newsDetail'

import MyBackToTop2 from '@/components/MyBackToTop2'
import { getReadNum } from '@/utils/api'

export default {
  components: {
    MyBackToTop2
  },
  data() {
    return {
      id: Number(this.$route.query.id),
      readNum: null,
      newsDetail,
    }
  },
  mounted() {
    this.getReadNum()
  },
  methods: {
    getReadNum() {
      getReadNum(
        this.id
      ).then(res => {
        if (res.code === 0) {
          this.readNum = res.data.read_num
        }
      })
    },
    backToList() {
      this.$router.push('newslist')
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    },
  },
}
</script>

<style>

</style>