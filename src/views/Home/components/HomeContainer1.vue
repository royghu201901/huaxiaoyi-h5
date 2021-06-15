<template>
  <div>
    <v-container fluid>
      <p class="text-h6 text-center grey--text text--darken-2">商户为什么选择花小易</p>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
            elevation="5"
            class="text-center pt-3"
            color="#F3F8FC"
          >
            <v-img
              :src="card.src"
              height="50px"
              width="50px"
              class="mx-auto"
            />
            <v-card-title v-text="card.title" class="d-flex justify-space-around" />
            <v-card-subtitle v-text="card.subtitle" />
            <v-card-text v-text="card.text" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: '优势一',
        subtitle: '提高转化率',
        text: '消费分期，提升信任，提高客群',
        src: require('@/assets/h5-home-box-item1.png'),
        flex: 6
      },
      { title: '优势二',
        subtitle: '提高客单价',
        text: '分期支付降低价格门槛，提高消费额',
        src: require('@/assets/h5-home-box-item2.png'),
        flex: 6
      },
      { title: '优势三',
        subtitle: '增强获客力',
        text: '提高营销抓手、提升获客能力',
        src: require('@/assets/h5-home-box-item3.png'),
        flex: 6
      },
      { title: '优势四',
        subtitle: '提高口碑与复购',
        text: '扣款信息反复占领心智，促销有道',
        src: require('@/assets/h5-home-box-item4.png'),
        flex: 6
      },
      { title: '优势五',
        subtitle: '平台服务费用低',
        text: '仅2.6%服务费，常规 10%的营销费用',
        src: require('@/assets/h5-home-box-item5.png'),
        flex: 12
      },
    ],
  }),
}
</script>