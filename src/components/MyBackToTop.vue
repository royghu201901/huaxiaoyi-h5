<!-- 手动定位按钮 -->
<template>
  <div class="toTopBtn" v-if="btnVisible">
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="indigo"
      @click="backToTop"
    >
      <v-icon>
        mdi-arrow-collapse-up
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnVisible: false,
      scrollTop: 0,
      topHeight: 200
    }
  },
  mounted () {
    const self = this
    window.addEventListener('scroll', this.debounce(function () {
      self.handleScrolls()
    }, 300))
  },
  methods: {
    // 监控防抖
    debounce(fn, wait) {
      let timer = null
      return function () {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(fn, wait)
      }
    },
    handleScrolls() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (scrollTop > this.topHeight) {
        this.btnVisible = true
      } else {
        this.btnVisible = false
      }
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },  

}
</script>

<style scoped>
  .toTopBtn {
    position: fixed;
    right: 0.5rem;
    top: 60%;
  }
</style>