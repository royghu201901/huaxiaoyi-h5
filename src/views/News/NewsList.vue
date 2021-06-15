<template>
  <div>
    <v-img src="@/assets/h5-newslist-banner.png">
      <v-card-title class="d-flex justify-center white--text text-h4 mt-12" style="text-shadow: 0px 2px 4px rgb(0 0 0 / 50%);">
        新闻中心
      </v-card-title>
    </v-img>

    <v-container fluid>
      <v-card
        elevation="5"
        v-for="news in newsList"
        :key="news.id"
        class="my-4"
        @click="toDetail(news.id)"
      >
        <v-img :src="news.img" height="160" />
        <v-card-subtitle v-text="news.title" />
        <v-card-text v-text="news.date" class="text-right" />
      </v-card>
    </v-container>

    <MyBackToTop2 />
  </div>
</template>

<script>
// 新闻列表数据从newsList.js引入
import newsList from './newsList'

import MyBackToTop2 from '@/components/MyBackToTop2'

export default {
  components: {
    MyBackToTop2
  },
  data: () => ({
    newsList
  }),
  methods: {
    toDetail(id) {
      this.$router.push({ path: 'newsdetail', query: { id }})
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    },
  },
}
</script>