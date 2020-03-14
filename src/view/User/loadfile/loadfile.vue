<template>
  <div>
    <Icon
      type="md-cloud-download"
      size="20"
      style="float:left;margin-left:20px"
    />
    <label style="margin-left:20px">上传文件</label>
    <p style="margin-left:60px;font-size:8px">
      仅支持.xlsx,.xls,.csv，文件大小≤4M
    </p>
    <el-upload :before-upload="handleBeforeUpload" accept=".xls, .xlsx, .csv">
      <el-upload
        action=""
        type="primary"
        size="small"
        style="margin-left:60px"
        :loading="uploadLoading"
        @click="handleUploadFile"
        >上传文件</el-upload
      >
    </el-upload>
    <!-- 上传文件名及数据展示 -->
    <div class="ivu-upload-list-file" v-if="file !== null">
      <el-button
        type="primary"
        size="small"
        @click="BatchRechar"
        style="float:right;margin-right:60px;width:100px;"
        >充值</el-button
      >
      <Icon type="ios-stats"></Icon>
      {{ file.name }}
      <Icon
        v-show="showRemoveFile"
        type="ios-close"
        class="ivu-upload-list-remove"
        @click.native="handleRemove()"
      ></Icon>
      <transition name="fade">
        <Progress
          v-if="showProgress"
          :percent="progressPercent"
          :stroke-width="2"
        >
          <div v-if="progressPercent == 100">
            <Icon type="ios-checkmark-circle"></Icon>
            <span>成功</span>
          </div>
        </Progress>
      </transition>
      <div class="margin-top-10">
        <Table
          :columns="tableTitle"
          :data="tableData"
          :loading="tableLoading"
        ></Table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loadfile',
  data() {
    return {
      uploadLoading: false,
      progressPercent: 0,
      showProgress: false,
      showRemoveFile: false,
      file: null,
      tableData: [],
      tableTitle: [],
      tableLoading: false
    }
  },
  methods: {
    // 上传文件之前
    handleBeforeUpload(file) {
      const fileExt = file.name
        .split('.')
        .pop()
        .toLocaleLowerCase()
      if (fileExt === 'xlsx' || fileExt === 'xls' || fileExt === 'csv') {
        this.readFile(file) // 读取文件
        this.file = file
      } else {
        this.$Message.info(
          '文件：' +
            file.name +
            '不是EXCEL文件，请选择后缀为.xlsx、.xls或者.csv的EXCEL文件。'
        )
      }
      return false
    },
    // 读取文件
    readFile(file) {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadstart = e => {
        this.uploadLoading = true
        this.tableLoading = true
        this.showProgress = true
      }
      reader.onprogress = e => {
        this.progressPercent = Math.round((e.loaded / e.total) * 100)
      }
      reader.onerror = e => {
        this.$Message.error('文件读取出错')
      }
      reader.onload = e => {
        this.$Message.info('文件读取成功')
        const data = e.target.result
        console.log('data', data)

        // const { header, results } = excel.read(data, 'array')
        // const tableTitle = header.map(item => {
        //   return { title: item, key: item }
        // })
        // this.tableData = results
        // this.tableTitle = tableTitle
        // this.uploadLoading = false
        // this.tableLoading = false
        // this.showRemoveFile = true
      }
    },
    // 上传文件
    handleUploadFile() {
      this.initUpload()
    },
    initUpload() {
      this.file = null
      this.showProgress = false
      this.loadingProgress = 0
      this.tableData = []
      this.tableTitle = []
    },
    // 删除上传文件
    handleRemove() {
      this.initUpload()
      this.$Message.info('上传的文件已删除！')
    },
    // 批量充值操作
    BatchRechar() {
      // 具体的充值步骤
    }
  }
}
</script>
<style lang="scss" scoped></style>
