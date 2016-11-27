import Vue from 'vue'
import VueResource from 'vue-resource'
import { Notification } from 'element-ui'

Vue.use(VueResource)
Vue.http.interceptors.push((request, next) => {
  // continue to next interceptor
  next((response) => {
    // modify response
    if (response.status === 400) {
      Notification.error({
        title: '错误',
        message: response.body.message
      })
    }
  })
})

function getRuleJointBuyList () {
  return Vue.resource('rule/jointBuy').get()
}

function addRuleJointBuy (rule) {
  return Vue.resource('rule/jointBuy').save(rule)
}

function deleteRuleJointBuy (rule) {
  return Vue.resource('rule/jointBuy/' + rule.id).remove()
}

function getRuleSale () {
  return Vue.resource('rule/sale').get()
}

function modifyRuleSale (rule) {
  return Vue.resource('rule/sale').update(rule)
}

function getRulePoint () {
  return Vue.resource('rule/point').get()
}

function modifyRulePoint (rule) {
  return Vue.resource('rule/point').update(rule)
}

function postCoupon (coupon) {
  return Vue.resource('coupons').save(coupon)
}

function getCouponList (params) {
  return Vue.resource('coupons').get(params)
}

export default {
  getRuleJointBuyList: getRuleJointBuyList,
  addRuleJointBuy: addRuleJointBuy,
  deleteRuleJointBuy: deleteRuleJointBuy,
  getRuleSale: getRuleSale,
  modifyRuleSale: modifyRuleSale,
  getRulePoint: getRulePoint,
  modifyRulePoint: modifyRulePoint,

  postCoupon: postCoupon,
  getCouponList: getCouponList
}
