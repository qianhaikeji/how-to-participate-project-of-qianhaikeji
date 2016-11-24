<template>
  <div class="align-center">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['fetchData'],
  data () {
    return {
      pageSize: 10,
      page: 1,
      total: 0
    }
  },
  methods: {
    fetchDataByPage: function () {
      let pageParams = {
        offset: this.page - 1,
        limit: this.pageSize
      }
      this.fetchData(pageParams).then(data => {
        let body = data.body
        this.total = body.totalElements
        this.data = data.content
        this.$emit('fetched', body.content)
      })
    },
    handleSizeChange: function (size) {
      this.pageSize = size
      this.fetchDataByPage()
    },
    handleCurrentChange: function (currentPage) {
      this.page = currentPage
      this.fetchDataByPage()
    }
  },
  mounted: function () {
    this.fetchDataByPage()
  }
}
</script>

<style scoped>
.el-pagination {
  margin-top: 30px;
}
</style>
