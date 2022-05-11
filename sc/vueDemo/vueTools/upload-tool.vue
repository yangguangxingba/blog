<template>
  <section id="upload-tool" :class="{ inline : isTableClass }">
    <el-upload
        class="upload_wrap"
        ref="upload"
        :action="uploadUrl"
        :limit="upload_file.limit"
        :show-file-list="false"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="onSuccess"
        :accept="accepts"
        :auto-upload="true">
        <el-button slot="trigger" size="small" type="primary">上传文件</el-button>
        <div slot="tip" class="el-upload__tip">支持扩展名：.doc .docx .pdf，文件小于5MB</div>
    </el-upload>
  </section>
</template>

<script>
import {getToken} from "@/util/auth";
export default {
  name: "upload-tool",
  data() {
    return {
        // 上传图片参数
        upload_file: {
            limit: 999,  // 图片数量限制
            tempUrl: '',  // 存放文件集合
            tdata: {},  // 存放文件集合
        },
        // 判断样式，是否为表格
        isTableClass: true,
    };
  },
  props: {
    judgeUpload: {
      type: Boolean,
      default: false
    },
    tdata: {
      type: Object,
      default: null
    },
    accepts:  {
      type: String,
      default: '*'
    },
  },
  watch: {
  },
  computed: {
    uploadUrl() {
      return  'url'
    },
  },
  methods: {
    // 删除文件之前的钩子
    beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
    },

    // 点击图片时触发
    handlePreview(file) {
        console.log("点击图片时触发", file);
    },

    // 删除之后触发
    handleRemove(file, fileList) {
        console.log("删除之后触发", file, fileList);
    },
    // 上传文件时触发
    onSuccess(response, file, fileList) {
        let tempUrl = response.data
        this.upload_file.tempUrl = tempUrl
      console.info(this.tdata)
      console.info(this.judgeUpload)
        this.upload_file.tdata = this.tdata
        // 回调函数
        this.$emit("uploadCallback",  this.upload_file);
    },
    /* // 判断组件样式
    isTable() {
      // 如果存在从父组件传过来的值
      if(this.judgeUpload !== undefined) {
        // console.log("如果存在从父组件传过来的值", this.judgeUpload);
        this.isTableClass = this.judgeUpload;
      }
    } */
  },

  created (){
    // this.isTable();  // 判断组件样式
  },

  mounted() {

  },

  beforeDestroy() {

  }
};
</script>

<style lang="scss" scoped>
#upload-tool {

}

// 在表格中
#upload-tool.inline {
  display: inline-block;

  .upload_wrap {
    /deep/ .el-upload {
      // color: #606266;
    }

    /deep/ .el-upload__tip {
      display: none;
    }

    /deep/ .el-upload-list {
      display: none;
    }
  }
}
</style>
