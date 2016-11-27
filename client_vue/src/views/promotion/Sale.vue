<template>
<div class="rule-sale">
  <el-input v-model="rule.returnGoodDay" type="number">
    <template slot="prepend">可退货天数</template>
  </el-input>
  <el-input v-model="rule.minFreeShip" type="number">
    <template slot="prepend">免运费下线</template>
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
      dataservice.getRuleSale().then(rule => {
        this.rule = rule.body
      })
    },
    updateRule: function () {
      dataservice.modifyRuleSale(this.rule).then(rule => {
        this.$notify({
          title: '成功',
          message: '修改销售规则成功',
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
.rule-sale {
  width: 650px;
}
.rule-sale .el-input {
  margin-bottom: 20px;
}
.rule-sale .el-button {
  margin-top: 60px;
}
</style>
