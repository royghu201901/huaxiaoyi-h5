import request from '@/utils/request'

// 省市区三级联动
export function getArea(data) {
  return request({
    url: 'h5/region',
    method: 'get',
    params: data
  })
}

// 验证码
export function sendSms(data) {
  return request({
    url: 'h5/sms/send',
    method: 'post',
    params: data
  })
}

// 合伙人表单
export function applyAgent(data) {
  return request({
    url: 'huaxiaoyi_agent_apply',
    method: 'post',
    params: data
  })
}

// 商户表单
export function applyShop(data) {
  return request({
    url: 'huaxiaoyi_shop_apply',
    method: 'post',
    params: data
  })
}

// 省市区三级联动
export function getReadNum(pageId) {
  return request({
    url: 'pc/article/' + pageId,
    method: 'get'
  })
}
