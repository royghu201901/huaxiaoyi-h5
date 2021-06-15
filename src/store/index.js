import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    msgPool: []
  },
  mutations: {
    message(state, step) {
      //将消息添加到消息列表
      state.msgPool.push(step)

      //清除消息
      setTimeout(() => {
        state.msgPool.shift()
      }, step.time)
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store