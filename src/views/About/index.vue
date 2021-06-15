<template>
  <div class="about">
    <v-container fluid>
      <v-card elevation="5">
        <v-card-text v-text="text01" />
      </v-card>

      <v-card elevation="5" class="my-4">
        <v-card-subtitle v-text="title02" class="amber font-weight-bold white--text d-flex justify-space-around" />
        <v-divider />
        <v-card-text v-text="text02" />
      </v-card>

      <v-card elevation="5" class="my-4">
        <v-card-subtitle v-text="title03" class="amber font-weight-bold white--text d-flex justify-space-around" />
        <v-divider />
        <v-card-text v-text="text03" class="text-center" />
      </v-card>

      <v-card elevation="5" class="my-4">
        <v-card-subtitle v-text="title04" class="amber font-weight-bold white--text d-flex justify-space-around" />
        <v-divider />
        <v-timeline dense>
          <v-timeline-item
            v-for="(time, index) in times"
            :key="index"
            :color="time.color"
            small
          >
            <div class="pr-6">
              <div class="grey--text text--darken-1 text-overline">
                {{ time.content }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card>

      <v-card elevation="5" class="my-4">
        <v-card-subtitle v-text="title05" class="amber font-weight-bold white--text d-flex justify-space-around" />
        <v-divider />
        <v-img src="@/assets/h5-company-construction.png" />
      </v-card>

      <v-card elevation="5" class="my-4">
        <v-card-subtitle v-text="title06" class="amber font-weight-bold white--text d-flex justify-space-around" />
        <v-divider />
        <div v-for="(text, index) in text06" :key="index">
          <v-list-item two-line>
            <v-list-item-content class="text-center">
              <v-list-item-title>{{ text.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ text.job }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-card>

      <v-card elevation="5" class="my-4">
        <v-card-subtitle v-text="title07" class="amber font-weight-bold white--text d-flex justify-space-around" />
        <v-divider />
        <v-timeline
          align-top
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="(item, index) in text07"
            :key="index"
            :color="item.color"
            :icon="item.icon"
            fill-dot
            class="pr-8"
          >
            <v-card
              :color="item.color"
              dark
              small
            >
              <v-card-title class="text-subtitle-1 py-2" v-text="item.title" />
              <v-card-text class="white text--primary text-caption pt-4" v-text="item.text" />
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card>

      <v-card elevation="5" class="my-4">
        <v-card-subtitle v-text="title08" class="amber font-weight-bold white--text d-flex justify-space-around" />
        <v-divider />
        <v-chip
          class="ma-5 mr-2"
        >
          模式
        </v-chip>
        <span class="text-body-2">— 边享边付</span>
        <v-card-text class="pt-1 px-5">
          边享边付是花小易开创的相对于一次性支付而言的消费新模式。
        </v-card-text>
        <v-card-text class="py-0 px-5">
          用户在线下门店付款时，可以通过花小易与商家进行约定，将原来的一次性支付变为分阶段“支付”（如：数字合约授权代扣）。用户可以一边享受商家的服务一边按阶段付钱。
        </v-card-text>
        <v-chip
          class="ma-5 mr-2"
        >
          技术
        </v-chip>
        <span class="text-body-2">— 数字合约</span>
        <v-card-text class="pt-1 px-5">
          数字合约是花小易的核心技术与底层逻辑，对商家和用户进行双向保护、双向约束。
        </v-card-text>
        <v-card-text class="pt-0 px-5">
          商家与用户通过花小易约定付款金额、付款方式、付款周期，合约生效后自动执行，每个付款日由系统按照约定的时间和金额进行授权代扣。
        </v-card-text>
      </v-card>

      <v-card elevation="5" class="my-4 pb-4">
        <v-card-subtitle v-text="title09" class="amber font-weight-bold white--text d-flex justify-space-around" />
        <v-divider />
        <v-img
          src="@/assets/h5-certification-01.png"
          class="my-2 mt-4 mx-auto"
          width="90%"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-img
          src="@/assets/h5-certification-02.png"
          class="my-2 mx-auto"
          width="90%"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
        </template>
        </v-img>
        <v-img
          src="@/assets/h5-certification-03.png"
          class="my-2 mx-auto"
          width="90%"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-img
          src="@/assets/h5-certification-04.png"
          class="mt-2 mx-auto"
          width="50%"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data: () => ({
    text01: '会盟科技（杭州）有限公司是一家由国有资本注资的以数字合约为核心的新型互联网企业，公司核心高管均来自阿里、美团、网商银行、滴滴（橙心优选）、华润、有赞等企业，有着丰富的互联网及线下经验。我们的目标是让信用去链接商家与用户，让信用消费真正能够做到普惠，并同时保护商家与消费者的权益！',
    title02: '产品服务',
    text02: '花小易是基于大数据时代，运用数字合约技术打造的，服务于本地生活的信用消费平台，旨在帮助中国千万家实体门店完成数字化转型升级，解决实体门店获客、转化、复购等一系列问题。',
    title03: 'Slogan',
    text03: '买单就用花小易 边享边付0压力',
    title04: '发展历程',
    times: [
      {
        color: 'cyan',
        content: '2019年7月，市场摸底，门店调研',
      },
      {
        color: 'green',
        content: '2019年9月，会盟科技(杭州)有限公司成立',
      },
      {
        color: 'amber',
        content: '2019年12月，“花小易”业务立项',
      },
      {
        color: 'orange',
        content: '2020年10月18号，“花小易”全球发布会在杭州盛大举行',
      },
    ],
    title05: '组织架构',
    title06: '管理团队',
    text06: [
      {
        name: '苏磊',
        job: '花小易创始人兼CEO'
      },
      {
        name: '葛亮',
        job: '花小易CMO'
      },
      {
        name: '朱俊宇',
        job: '花小易首席战略官'
      },
    ],
    title07: '企业文化',
    text07: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
        title: '使命',
        text: '让实体生意更好做',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
        title: '愿景',
        text: '让消费金融与信用普惠赋能中国2000万线下门店和5亿消费者。',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: '价值观',
        text: '客户第一、诚信、专注、合作共赢',
      },
    ],
    title08: '产品简介',
    title09: '企业荣誉'
  })
}
</script>