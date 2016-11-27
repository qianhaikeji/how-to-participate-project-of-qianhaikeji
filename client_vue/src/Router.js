import VueRouter from 'vue-router'

import Header from './views/layout/Header'
import Body from './views/layout/Body'
import Footer from './views/layout/Footer'

import GoodList from './views/good/GoodList'
import GoodProfile from './views/good/GoodProfile'
import GoodTypeList from './views/good/goodType/GoodTypeList'
import GoodTypeProfile from './views/good/goodType/GoodTypeProfile'
import GoodAttrList from './views/good/goodAttr/GoodAttrList'
import GoodAttrProfile from './views/good/goodAttr/GoodAttrProfile'

import OrderList from './views/order/OrderList'
import OrderProfile from './views/order/OrderProfile'

import PromotionCouponList from './views/promotion/coupon/CouponList'
import PromotionCouponNew from './views/promotion/coupon/CouponNew'
import PromotionJointBuy from './views/promotion/JointBuy'
import PromotionSale from './views/promotion/Sale'
import PromotionPoint from './views/promotion/Point'

const routers = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: '主页',
      components: {
        header: Header,
        body: Body,
        footer: Footer
      },
      children: [
        {
          path: 'good',
          name: '商品列表',
          component: GoodList
        },
        {
          path: 'good/:gid',
          name: '商品详情',
          component: GoodProfile
        },
        {
          path: 'goodType',
          name: '商品分类列表',
          component: GoodTypeList
        },
        {
          path: 'goodType/:tid',
          name: '商品分类详情',
          component: GoodTypeProfile
        },
        {
          path: 'goodAttr',
          name: '商品类型列表',
          component: GoodAttrList
        },
        {
          path: 'goodAttr/:tid',
          name: '商品类型详情',
          component: GoodAttrProfile
        },
        {
          path: 'order',
          name: '订单列表',
          component: OrderList
        },
        {
          path: 'order/:rid',
          name: '订单详情',
          component: OrderProfile
        },
        {
          path: 'promotion/jointBuy',
          name: '促销管理-同购管理',
          component: PromotionJointBuy
        },
        {
          path: 'promotion/sale',
          name: '促销管理-销售管理',
          component: PromotionSale
        },
        {
          path: 'promotion/point',
          name: '促销管理-积分管理',
          component: PromotionPoint
        },
        {
          path: 'promotion/coupon',
          name: '促销管理-优惠券列表',
          component: PromotionCouponList
        },
        {
          path: 'promotion/coupon/new',
          name: '促销管理-添加优惠券',
          component: PromotionCouponNew
        }
        // {
        //   path: 'promotion/coupon/:cid',
        //   name: '促销管理-优惠券详情',
        //   component: CouponProfile
        // },
      ]
    }
  ]
})

export default routers
