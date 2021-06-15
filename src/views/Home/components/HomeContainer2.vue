<template>
  <div>
    <v-container
      fluid
      style="position: relative;"
    >
      <v-img
        src="@/assets/h5-home-box-bg.png"
        height="680"
        style="position: absolute; top: 60px; left: 0; z-index: 0;"
      />
      <p class="text-h6 text-center grey--text text--darken-2 mt-3">用户为什么选择花小易</p>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
            elevation="5"
            height="220"
            class="pt-4 transparent"
          >
            <v-img
              :src="card.src"
              height="50px"
              width="60px"
              class="ml-4"
            />
            <v-card-title v-text="card.title"/>
            <v-card-subtitle v-text="card.subtitle" class="pb-2" />
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
      { title: '优势一：',
        subtitle: '权益保障',
        text: '合约期内商户不能继续提供服务， 用户可申请解约',
        src: require('@/assets/h5-home-box-item7.png'),
        flex: 6
      },
      { title: '优势二：',
        subtitle: '门槛亲民',
        text: '只要达到信用评估，即可使用花小易',
        src: require('@/assets/h5-home-box-item8.png'),
        flex: 6
      },
      { title: '优势三：',
        subtitle: '分期零息',
        text: '与传统分期截然不同，信用授信零利息',
        src: require('@/assets/h5-home-box-item9.png'),
        flex: 6
      },
      { title: '优势四：',
        subtitle: '减轻资金压力',
        text: '降低一次性全款支付压力',
        src: require('@/assets/h5-home-box-item10.png'),
        flex: 6
      },
      { title: '优势五：',
        subtitle: '不占额度',
        text: '商家授信额度，不影响其他商家授信',
        src: require('@/assets/h5-home-box-item11.png'),
        flex: 6
      },
    ],
  }),
}
</script>