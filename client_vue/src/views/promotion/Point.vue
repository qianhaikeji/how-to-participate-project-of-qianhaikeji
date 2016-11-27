<template>
<div class="rule-point">
  <el-alert title="支付后，发放积分的比例。以实际支付金额进行换算，如100代表：支付100元，可攒100积分。" type="info" show-icon> </el-alert>
  <el-input v-model="rule.giveRatio" type="number">
    <template slot="prepend">积分发放比例</template>
  </el-input>

  <el-alert title="支付前，积分抵用现金的比例。如0.01代表：如100积分可以兑换1元。" type="info" show-icon> </el-alert>
  <el-input v-model="rule.buyRatio" type="number">
    <template slot="prepend">积分抵用比例</template>
  </el-input>

  <el-alert title="单笔订单，最多使用的积分上限。" type="info" show-icon> </el-alert>
  <el-input v-model="rule.orderLimit" type="number">
    <template slot="prepend">单笔订单上线</template>
  </el-input>

  <div class="align-center">
    <el-button type="primary" @click="updateRule" size="large">确定</el-button>
  </div>
</div>
</template>

<script>
import dataservice from '../../services/DataService'
export default {
  components: {
  },
  data () {
    return {
      rule: {}
    }
  },
  computed: {
  },
  methods: {
    getRule: function () {
      dataservice.getRulePoint().then(rule => {
        this.rule = rule.body
      })
    },
    updateRule: function () {
      dataservice.modifyRulePoint(this.rule).then(rule => {
        this.$notify({
          title: '成功',
          message: '修改积分规则成功',
          type: 'success'
        })
      })
    }
  },
  mounted: function () {
    this.getRule()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rule-point {
  width: 650px;
}
.rule-point .el-alert {
  margin-bottom: 5px;
}
.rule-point .el-input {
  margin-bottom: 30px;
}
.rule-point .el-button {
  margin-top: 60px;
}
</style>
