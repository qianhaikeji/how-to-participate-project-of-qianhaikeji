import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

function postCoupon (coupon) {
  return Vue.resource('coupons').save(coupon)
}

function getCouponList (params) {
  return Vue.resource('coupons').get(params)
}

export default {
  postCoupon: postCoupon,
  getCouponList: getCouponList
}
