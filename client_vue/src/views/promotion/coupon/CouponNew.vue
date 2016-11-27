<template>
  <el-form ref="form" :model="form" label-width="80px" class="coupon-new-form">
    <el-form-item label="券标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>

    <el-col :span="12">
      <el-form-item label="抵扣条件">
          <el-input-number v-model="form.leastCost" :min="0"></el-input-number>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="抵扣额度">
        <el-input-number v-model="form.reduceCost" :min="0"></el-input-number>
      </el-form-item>
    </el-col>

    <el-form-item label="发放数量">
      <el-input-number v-model="form.quantity" :min="0"></el-input-number>
    </el-form-item>

    <el-form-item label="券描述">
      <el-input type="textarea" v-model="form.description"></el-input>
    </el-form-item>

    <el-form-item label="有效期">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="开始时间" v-model="form.beginTime" class="width-full"></el-date-picker>
      </el-col>
      <el-col class="valid-time-divider" :span="2">--</el-col>
      <el-col :span="11">
        <el-date-picker type="date" placeholder="终止时间" v-model="form.endTime" class="width-full"></el-date-picker>
      </el-col>
    </el-form-item>

    <el-row type="flex" justify="space-around" class="operations">
      <el-col :span="6"><el-button type="primary" @click="createCoupon(form)" class="width-full">立即创建</el-button></el-col>
      <el-col :span="6"><el-button @click="$router.go(-1)" class="width-full">取消</el-button></el-col>
    </el-row>
  </el-form>
</template>

<script>
import dataservice from '../../../services/DataService'
export default {
  data () {
    return {
      form: {
        title: '',
        leastCost: 100,
        reduceCost: 10,
        description: '',
        quantity: 1000,
        beginTime: '',
        endTime: ''
      }
    }
  },
  methods: {
    createCoupon: function (form) {
      let coupon = Object.assign({}, form)
      coupon.beginTime = coupon.beginTime.getTime() / 1000
      coupon.endTime = coupon.endTime.getTime() / 1000

      dataservice.postCoupon(coupon).then(data => {
        this.$notify({
          title: '成功',
          message: `添加优惠券《${data.body.title}》成功`,
          type: 'success'
        })
        this.$router.go(-1)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coupon-new-form {
  width: 50%;
  margin-top: 20px;
}
.coupon-new-form .valid-time-divider {
  text-align: center;
}
.coupon-new-form .operations {
  margin-top: 80px;
}
</style>
