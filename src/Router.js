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
        { path: 'good',
          name: '商品管理',
          children: [
            { path: '',
              name: '商品列表',
              components: {main: GoodList}
            },
            { path: ':gid',
              name: '商品详情',
              components: {main: GoodProfile}
            },
            { path: 'goodType',
              name: '分类管理',
              children: [
                { path: '',
                  name: '商品分类列表',
                  components: {main: GoodTypeList}
                },
                { path: ':tid',
                  name: '商品分类详情',
                  components: {main: GoodTypeProfile}
                }
              ]
            },
            { path: 'goodAttr',
              name: '类型管理',
              children: [
                { path: '',
                  name: '商品类型列表',
                  components: {main: GoodAttrList}
                },
                { path: ':tid',
                  name: '商品类型详情',
                  components: {main: GoodAttrProfile}
                }
              ]
            }
          ]
        },
        { path: 'order',
          name: '订单管理',
          children: [
            { path: '',
              name: '订单列表',
              components: {main: OrderList}
            },
            { path: ':oid',
              name: '订单详情',
              components: {main: OrderProfile}
            }
          ]
        }
      ]
    }
  ]
})

export default routers
