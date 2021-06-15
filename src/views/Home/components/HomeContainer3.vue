<template>
  <div>
    <v-container fluid>
      <p class="text-h6 text-center grey--text text--darken-2">我们的目标</p>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
            elevation="0"
            class="text-center"
          >
            <v-card-title
              v-text="card.title"
              class="d-flex justify-space-around font-italic font-weight-black"
            />
            <v-card-subtitle
              v-text="card.subtitle"
              class="font-weight-black"
            />
          </v-card>
        </v-col>
      </v-row>
      <v-img src="@/assets/h5-home-bottom-banner.png" />
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: '300+',
        subtitle: '城市',
        flex: 4
      },
      { title: '2000万+',
        subtitle: '门店',
        flex: 4
      },
      { title: '5亿+',
        subtitle: '消费者',
        flex: 4
      }
    ],
  }),
}
</script>