import axios from 'axios'
// import store from '@/store'
import Message from './message.js'

// let loadingInstance
// create an axios instance
const service = axios.create({
  baseURL: 'https://api.fmgo365.com/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // loadingInstance = Loading.service({
    //   lock: true,
    //   text: '拼命加载中',
    //   spinner: 'el-icon-loading'
    // })
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['Token'] = getToken()
    //   // config.headers.common['Authorization'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8') {
      return response
    }
    if (response.headers['content-type'] === 'image/png;charset=UTF-8') {
      return response
    }
    if (response.headers['content-type'] === 'application/vnd.ms-excel; charset=UTF-8') {
      return response
    }
    // if (response.headers['content-type'] === 'multipart/form-data; boundary=----WebKitFormBoundarypUaycoQ4k9AeRAk9') {
    //   return response
    // }
    if (response.data.code !== 0) {
      Message.error(response.data.msg)
      return response
    }
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    const errorMessage = error.response
    // console.log(errorMessage)
    if (errorMessage) {
      switch (errorMessage.status) {
        case 400:
        case 422:
          Message.error(errorMessage.data.msg)
          return Promise.reject(errorMessage.data.msg)
        case 401:
          Message.error(errorMessage.data.msg)
          break
        case 403:
          Message.error('没有权限操作')
          break
        case 404:
          Message.error('资源不存在')
          break
        case 429:
          Message.error('网络繁忙，请稍后再试')
          break
        default:
          Message.error({
            message: error.msg,
            duration: 5 * 1000
          })
      }
    }
    return Promise.reject(error)
  }
)

export default service
