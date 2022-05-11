<template>
  <section id="editor-tool">
    <!-- 图片上传组件辅助-->
    <!-- <el-upload
            class="avatar-uploader"
            :action="serverUrl"
            name="img"
            :headers="header"
            :show-file-list="false"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :before-upload="beforeUpload">
    </el-upload> -->
    <!--富文本编辑器组件-->
    <el-row v-loading="quillUpdateImg" class="edit_wrap">
        <quill-editor
            v-model="editorData.content"
            ref="myQuillEditor"
            :options="editorOption"
            @ready="onEditorReady($event)"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
    </el-row>
  </section>
</template>

<script>
  import Quill from 'vue-quill-editor'

  let fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','sans-serif'];
  Quill.Quill.imports['formats/font'].whitelist=fonts;
  Quill.Quill.register(Quill.Quill.imports['formats/font']);

// 工具栏配置
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗，斜体，下划线，删除线
  ["blockquote", "code-block"], // 引用，代码块
  [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
  [{ list: "ordered" }, { list: "bullet" }], //列表
  [{ script: "sub" }, { script: "super" }], // 上下标
  [{ indent: "-1" }, { indent: "+1" }], // 缩进
  [{ direction: "rtl" }], // 文本方向
  [{ size: ["small", false, "large", "huge"] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
  [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
  [{ font: fonts }], //字体
  [{ align: [] }], //对齐方式
  ["clean"], //清除字体样式
  // ["image", "video"], //上传图片、上传视频
];

export default {
  name: "editor-tool",

  data() {
    return {
        /**
         * 富文本数据
         */
        quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
        header: {
            // cookieName: document.cookie.indexOf("JSESSIONID" + "=")
            // token: sessionStorage.token
        },  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
        detailContent: '', // 富文本内容
        editorOption: {
            placeholder: '',
            theme: 'snow',  // or 'bubble'
            modules: {
                toolbar: {
                    container: toolbarOptions,  // 工具栏
                    handlers: {
                        'image': function (value) {
                            if (value) {
                                // console.log("上传图片", value);
                                // 触发input框选择图片文件
                                document.querySelector('.avatar-uploader input').click();
                            } else {
                                this.quill.format('image', false);
                            }
                        }
                    }
                }
            }
        },

        // 富文本数据绑定
        editorData: {
            content: "",  // 富文本内容
        }
    };
  },

  props: ["editContractCont"],

  watch: {

  },

  computed: {

  },

  methods: {
    /**
     * 富文本
     */
    // 富文本图片上传前
    beforeUpload() {
        // 显示loading动画
        this.quillUpdateImg = true
    },

    // 富文本内容处理
    richContentHandle (content) {
        // 富文本处理
        return `
          <div class="ql-editor">
            <div class=" ql-snow">
              <div class="ql-editor">
                ${content}
              </div>
            </div>
          </div>
        `;
    },

    // 富文本图片上传成功
    uploadSuccess(res, file) {
        // console.log(file);

        // 获取富文本组件实例
        // let quill = this.$refs.myQuillEditor.quill

        let formData = new FormData();
        formData.append('file', file.raw);

        // let config = {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // };
        /* getImgURI(formData, config).then(res => {
            // console.log(res);

            if (res.status == "200"){
                // 获取光标所在位置
                let length = quill.getSelection().index;
                // 插入图片  res.info为服务器返回的图片地址
                quill.insertEmbed(length, 'image', res.data.data)
                // 调整光标到最后
                quill.setSelection(length + 1);

                this.richImg.push(res.data.data);
            } else {
                this.$message.error('图片插入失败');
            }
        }); */

        // loading动画消失
        this.quillUpdateImg = false
    },

    // 富文本图片上传失败
    uploadError() {
        // loading动画消失
        this.quillUpdateImg = false
        this.$message.error('图片插入失败')
    },

    // 准备编辑器
    // editor
    onEditorReady() {
        // console.log("准备编辑器");
    },
    // 失去焦点事件
    onEditorBlur(){
        // console.log("失去焦点事件");
    },

    // 获得焦点事件
    onEditorFocus(){
        // console.log("获得焦点事件");
    },

    // 内容改变事件
    onEditorChange(){
        // console.log("内容改变事件");

        // 向父组件传值
        this.$emit('setEditData', this.editorData.content)
    },

    // 存储值
    saveTempData() {
        // 编辑合同富文本数据
        if(this.editContractCont != "") {
            this.editorData.content = this.editContractCont
        }
    }
  },

  created (){
    this.saveTempData();  // 存储值
  },

  mounted() {

  },

  beforeDestroy() {

  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/font.css";

#editor-tool {
    .avatar-uploader {
        visibility: hidden;
        height: 0;
    }

    .edit_wrap {
        /deep/ .quill-editor {
            .ql-toolbar {
                .ql-font {
                    width: 88px;
                }
            }

            .ql-container {
                .ql-editor {
                    min-height: 235px;
                }
            }
        }
    }
}
</style>
