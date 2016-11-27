<template>
  <div class="coupon-list">
    <el-row class="coupon-list-top-bar">
      <el-col :span="4"><el-input v-model="queryCond.id" placeholder="优惠券ID"></el-input></el-col>
      <el-col :span="4" :offset="1"><el-input v-model="queryCond.fuzzy" placeholder="标题"></el-input></el-col>
      <el-col :span="2" :offset="10"><el-button type="primary" @click="queryByCond()">查询</el-button></el-col>
      <el-col :span="2" :offset="1"><el-button type="primary" @click="$router.push('/promotion/coupon/new')">新建</el-button></el-col>
    </el-row>

    <el-table :data="couponFormated" stripe border class="coupon-list-table">
      <el-table-column prop="title" label="标题" width="120" fixed="left"></el-table-column>
      <el-table-column inline-template fixed="left" label="操作" width="70">
        <el-button @click="sendCouponToUsers" type="text" size="small">投放</el-button>
      </el-table-column>
      <el-table-column prop="cardId" label="优惠券ID" width="180"></el-table-column>
      <el-table-column prop="beginTime" label="有效期-开始" width="190"></el-table-column>
      <el-table-column prop="endTime" label="有效期-终止" width="190"></el-table-column>
      <el-table-column prop="description" label="描述" width="180"></el-table-column>
      <el-table-column prop="leastCost" label="抵扣条件" width="100"></el-table-column>
      <el-table-column prop="reduceCost" label="抵扣额度" width="100"></el-table-column>
      <el-table-column prop="quantity" label="发放数量" width="100"></el-table-column>
      <el-table-column prop="receivePercent" label="领取比例" width="100"></el-table-column>
      <el-table-column prop="consumePercent" label="使用比例" width="100"></el-table-column>
    </el-table>

    <pagination ref="pagination" :fetch-data="fetchCoupons" v-on:fetched="couponsFetched"></pagination>
  </div>
</template>

<script>
import dataservice from '../../../services/DataService'
import pagination from '../../../components/Pagination'
export default {
  components: {
    pagination
  },
  data () {
    return {
      queryCond: {
        id: '',
        fuzzy: ''
      },
      coupons: []
    }
  },
  computed: {
    couponFormated: function () {
      return this.coupons.map(coupon => {
        coupon.beginTime = this.formateDate(coupon.beginTime)
        coupon.endTime = this.formateDate(coupon.endTime)
        coupon.receivePercent = coupon.receiveCnt / coupon.quantity * 100 + '%'
        coupon.consumePercent = coupon.consumeCnt / coupon.quantity * 100 + '%'
        return coupon
      })
    }
  },
  methods: {
    fetchCoupons: function (pageParams) {
      let queryParams = Object.assign({}, this.queryCond, pageParams)
      return dataservice.getCouponList(queryParams)
    },
    couponsFetched: function (coupons) {
      this.coupons = coupons
    },
    queryByCond: function () {
      this.$refs.pagination.reset()
    },
    formateDate: function (time) {
      let data = new Date(time * 1000)
      return data.toLocaleString()
    },
    sendCouponToUsers: function (coupon) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coupon-list-top-bar .el-button {
  width: 100%;
}
.coupon-list-table {
  margin-top: 20px;
  width: 100%;
}
.el-pagination {
  margin-top: 20px;
}
</style>
