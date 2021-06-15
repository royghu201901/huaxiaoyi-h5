<template>
  <div>
    <v-carousel
      :continuous="true"
      :cycle="true"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      height="150"
      class="custom-class"
    >
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
      >
        <v-img :src="slide.img">
          <v-card-subtitle
            v-if="slide.subtitle"
            :class="slide.subtitleClass"
            v-text="slide.subtitle"
          />
          <v-card-title
            v-if="slide.title"
            :class="slide.titleClass"
            v-text="slide.title"
          />
          <v-card-text
            v-if="slide.content"
            :class="slide.contentClass"
            v-html="slide.content"
          />
          <v-btn
            v-if="slide.btn"
            x-small
            class="ml-4"
            :dark="slide.dark"
            :color="slide.btnColor"
            :class="slide.btnClass"
            @click="goToPartner"
          >
            <span class="text-caption">立即加入</span>
            <v-icon class="text-caption">mdi-arrow-right-circle-outline</v-icon>
          </v-btn>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        img: require('../assets/h5-hero-02.png'),
        subtitle: '花小易',
        title: '买单就用花小易 边享边付0压力',
        btn: true,
        dark: true,
        btnColor: 'red lighten-1',
        subtitleClass: 'mt-4 pb-2 text-subtitle-1',
        titleClass: 'pt-0 pb-2 text-subtitle-2 font-weight-bold',
      },
      {
        img: require('../assets/h5-hero-04.png'),
        subtitle: '什么是花小易',
        content: `
          <p style="color: #fff; margin-bottom: 0; font-size: 0.875rem;">花小易是基于大数据时代，</P>
          <p style="color: #fff; margin-bottom: 0; font-size: 0.875rem;">运用数字合约技术打造的，</P>
          <p style="color: #fff; margin-bottom: 0; font-size: 0.875rem;">服务于本地生活的信用消费平台</P>
        `,
        btn: false,
        subtitleClass: 'text-subtitle-1 white--text mt-3 pb-2',
        titleClass: 'white--text',
      },
      {
        img: require('../assets/h5-hero-05.png'),
        btn: false,
      },
      {
        img: require('../assets/h5-hero-01.png'),
        subtitle: '花小易',
        title: '引领数字合约信用消费新时代',
        btn: true,
        dark: true,
        btnColor: 'primary',
        subtitleClass: 'mt-4 pb-2 text-subtitle-1',
        titleClass: 'pt-0 pb-2 text-subtitle-2 font-weight-bold',
      },
      {
        img: require('../assets/h5-hero-03.png'),
        subtitle: '花小易',
        title: '创新数字科技，全面赋能线下门店',
        btn: true,
        subtitleClass: 'mt-4 pb-2 text-subtitle-1 white--text',
        titleClass: 'pt-0 pb-2 text-subtitle-2 font-weight-bold white--text',
        btnClass: 'primary--text',
      },
    ],
  }),
  methods: {
    goToPartner() {
      this.$router.push('partner')
    }
  },
}
</script>