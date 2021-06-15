<template>
  <div id="app">
    <!-- App.vue -->
    <v-app>
      <v-system-bar
        height="50"
        class="d-flex justify-center"
      >
        <v-img
          max-height="20"
          max-width="89"
          src="@/assets/h5-logo-with-words.png"
        />
      </v-system-bar>

      <MyNavbar />

      <v-main>
        <v-container fluid class="pa-0">
          <router-view />
          <!-- <router-view :key="key" /> -->
        </v-container>
      </v-main>

      <MyFooter />
      <MyAlert />
    </v-app>
  </div>
</template>

<script>
  import MyNavbar from '@/components/MyNavbar'
  import MyFooter from '@/components/MyFooter'
  import MyAlert from '@/components/MyAlert'

  export default {
    components: {
      MyNavbar,
      MyFooter,
      MyAlert
    },
    // computed: {
    //   key() {
    //     return this.$route.path
    //   }
    // }
  }
</script>
