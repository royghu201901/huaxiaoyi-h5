<template>
  <div>
    <v-app-bar
      color="amber"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true" />
      <v-toolbar-title>{{ navTitle }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            花小易
          </v-list-item-title>
          <v-list-item-subtitle>
            信用买单，边享边付
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="amber--text text--accent-4"
        >
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="linkTo(item)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: '首页', icon: 'mdi-home', path: '/' },
      { title: '关于我们', icon: 'mdi-account-supervisor', path: '/about' },
      { title: '新闻中心', icon: 'mdi-help-box', path: '/newslist' },
      { title: '商家入驻', icon: 'mdi-shopping', path: '/store' },
      { title: '合伙人招募', icon: 'mdi-account-group', path: '/partner' },
      { title: '加入我们', icon: 'mdi-heart', path: '/job' },
      { title: '下载APP', icon: 'mdi-download-box', path: '/appDownload' },
    ],
    navTitle: '花小易'
  }),
  watch: {
    group () {
      this.drawer = false
      switch (this.group) {
        case 0:
          this.navTitle = '花小易'
          break;
        case 1:
          this.navTitle = '关于我们'
          break;
        case 2:
          this.navTitle = '新闻中心'
          break;
        case 3:
          this.navTitle = '商家入驻'
          break;
        case 4:
          this.navTitle = '合伙人招募'
          break;
        case 5:
          this.navTitle = '加入我们'
          break;
        case 6:
          this.navTitle = '下载APP'
          break;
      
        default:
          break;
      }
    },
  },
  methods: {
    linkTo(item) {
      if (item.path !== window.location.pathname) {
        this.$router.push(item.path)
      }
    },
  },
}
</script>