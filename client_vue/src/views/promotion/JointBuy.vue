<template>
<div class="rule-joint-buy">
  <el-row v-for="rule in rules">
    <el-col :span="8">
      <el-input v-model="rule.min" :disabled="true">
        <template slot="prepend">最低销量</template>
      </el-input>
    </el-col>
    <el-col :span="8" :offset="2">
      <el-input v-model="rule.discount" :disabled="true">
        <template slot="prepend">折扣</template>
      </el-input>
    </el-col>
    <el-col :span="4" :offset="2">
      <el-button type="danger" @click="deleteRule(rule)">删除</el-button>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="8">
      <el-input v-model="newRule.min" type="number">
        <template slot="prepend">最低销量</template>
      </el-input>
    </el-col>
    <el-col :span="8" :offset="2">
      <el-input v-model="newRule.discount" type="number">
        <template slot="prepend">折扣</template>
      </el-input>
    </el-col>
    <el-col :span="4" :offset="2">
      <el-button type="primary" @click="addRule">增加</el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
import dataservice from '../../services/DataService'
export default {
  components: {
  },
  data () {
    return {
      newRule: {
        min: 0,
        discount: 0
      },
      rules: []
    }
  },
  computed: {
  },
  methods: {
    getRules: function () {
      dataservice.getRuleJointBuyList().then(rules => {
        this.rules = rules.body
      })
    },
    deleteRule: function (rule) {
      dataservice.deleteRuleJointBuy(rule).then(() => {
        this.getRules()
      })
    },
    addRule: function (rule) {
      dataservice.addRuleJointBuy(this.newRule).then(rule => {
        this.getRules()
      })
    }
  },
  mounted: function () {
    this.getRules()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rule-joint-buy {
  width: 650px;
}
.rule-joint-buy .el-row {
  margin-bottom: 20px;
}
</style>
