<template>
  <div>
    <v-img src="@/assets/h5-download-bg.jpg" />

    <v-btn
      rounded
      color="white"
      class="blue--text text--darken-4"
      style="position: absolute; bottom: 4rem; left: 50%; transform: translate(-50%, 0);"
      @click.stop="showDialog"
    >
      下载花小易APP
    </v-btn>

    <v-dialog
      v-model="downloadDialog"
      persistent
      width="500"
    >
      <v-card>
        <v-card-title class="text-subtitle-1 grey lighten-2">
          请点击微信右上角 ... 图标
        </v-card-title>

        <v-card-text class="mt-4">
          使用浏览器打开链接即可下载
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="downloadDialog = false"
          >
            我知道了
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  data: () => ({
    downloadDialog: false,
  }),
  methods: {
    showDialog() {
      // 判断微信环境
      const iOSLink = 'https://apps.apple.com/cn/app/%E8%8A%B1%E5%B0%8F%E6%98%93/id1566712469'
      const AndroidLink = 'https://huaxiaoyi.oss-cn-hangzhou.aliyuncs.com/app/hxy.apk'
      let ua = navigator.userAgent
      let uaLowerCase = navigator.userAgent.toLowerCase()
      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        // isAndroid = ua.match(/(Android)\s+([\d.]+)/)
        isWeChat = uaLowerCase.match(/MicroMessenger/i) == "micromessenger"
      if (isIphone) {
        window.open(iOSLink)
      } else {
        if (isWeChat) {
          this.downloadDialog = true
        } else {
          window.open(AndroidLink)
        }
      }
    }
  },
}
</script>

<style>

</style>