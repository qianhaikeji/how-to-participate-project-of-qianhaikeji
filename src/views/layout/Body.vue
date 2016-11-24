<template>
  <div class="zy-content">
      <div class="zy-side-nav">
        <el-menu router class="el-menu-vertical-demo">
          <el-submenu v-for="nav in navs" :index="nav.title">
            <template slot="title">{{ nav.title }}</template>
            <el-menu-item v-for="subnav in nav.subnavs" :index="subnav.router">{{ subnav.title }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <div class="zy-main">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          title: '商品管理',
          subnavs: [
            {title: '商品列表', router: '/good'},
            {title: '分类管理', router: '/goodType'},
            {title: '类型管理', router: '/goodAttr'}
          ]
        },
        {
          title: '订单管理',
          subnavs: [
            {title: '订单列表', router: '/'},
            {title: '定制单管理', router: '/'},
            {title: '退货单管理', router: '/'}
          ]
        },
        {
          title: '设计管理',
          subnavs: [
            {title: '模型列表', router: '/'},
            {title: '素材列表', router: '/'},
            {title: '素材集', router: '/'}
          ]
        },
        {
          title: '内容管理',
          subnavs: [
          ]
        },
        {
          title: '会员管理',
          subnavs: [
          ]
        },
        {
          title: '统计报表',
          subnavs: [
          ]
        },
        {
          title: '系统管理',
          subnavs: [
          ]
        },
        {
          title: '财务管理',
          subnavs: [
          ]
        },
        {
          title: '促销管理',
          subnavs: [
            {title: '同购规则', router: '/'},
            {title: '销售规则', router: '/'},
            {title: '积分规则', router: '/'},
            {title: '优惠券管理', router: '/promotion/coupon'}
          ]
        }
      ]
    }
  }
}
</script>

<style>
.zy-content {
  min-height: 500px;
}
.zy-side-nav {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow: scroll;
}
.zy-side-nav .el-menu {
  width: 100%;
}
.zy-main {
  margin-top: 60px;
  margin-left: 200px;
  padding: 20px;
}
</style>