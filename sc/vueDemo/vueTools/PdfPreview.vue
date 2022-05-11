<template>

  <div v-show="showPdf" class="dialog">
    <div class="dialog-container">
      <el-alert
        v-if="currentPage==pageCount"
        type="warning"
        description="最后一页"
        show-icon>
      </el-alert>
      <div class="dialog-body">
        <el-row>
          <el-col :span="24">
            <pdf :src="pdfUrl" :page="currentPage" @num-pages="pageCount=$event" @page-loaded="currentPage=$event" @loaded="loadPdfHandler" />
          </el-col>
        </el-row>
      </div>
      <div class="dialog-title">
        <el-row>
          <el-col :sm="24" :xs="24">
            <el-button  size="small" @click="prevPage">上一页</el-button>
            <el-button  size="small" @click="nextPage">下一页</el-button>
            <el-button  size="small" style="color: #979797;" @click="closePdf">取消预览</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'PdfPreview',
  components: { pdf },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showPdf: false,
      pdfUrl: '',
      currentPage: 0, // pdf文件页码
      pageCount: 0 // pdf文件总页数
    }
  },
  watch: {

  },
  mounted() {

  },
  methods: {
    show(url) {
      this.showPdf = true
      this.pdfUrl = url
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++
      }
    },
    loadPdfHandler(e) {
      this.currentPage = 1 // 加载的时候先加载第一页
    },
    closePdf() {
      this.showPdf = false
      this.pdfUrl = ''
      this.currentPage = 0
      this.pageCount = 0
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
