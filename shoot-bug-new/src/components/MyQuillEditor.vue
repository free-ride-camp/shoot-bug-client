<template>
  <div>
    <!--富文本编辑器组件-->
    <quill-editor
      v-model="formData.content"
      ref="QuillEditor"
      class="editor"
      :options="editorOption"
      @blur="$emit('editor-blur', $event)"
      @focus="$emit('editor-focus', $event)"
      @ready="$emit('editor-ready', $event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor,Quill } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

const fontStyle = Quill.import('attributors/style/size')
fontStyle.whitelist = [
  "16px","18px","20px","22px","24px"
]

Quill.register(fontStyle,true)

export default {
  name: "AddArticle",
  components: {
    quillEditor,
  },
  data() {
    return {
      formData: {
        content: "",
      },
      editorOption: {
        placeholder: this.placeholder,
        theme: "snow",
        modules: {
          toolbar: {
            container: this.toolbarOptions,
            handlers: {
              insertMetric: this.showHandle,
            },
          },
        },
      },
    };
  },
  created() {
    // console.log("value", this.value);
  },
  mounted() {
    this.initButton();
    // this.$refs.QuillEditor.quill.enable(false);
    this.$nextTick(function () {
      this.$refs.QuillEditor.quill.enable(true);
      this.$refs.QuillEditor.quill.blur();
    });
    if (this.width) {
      this.$refs.QuillEditor.$el.style.setProperty('width',this.width)
    }
    if (this.height) {
      this.$refs.QuillEditor.$el.style.setProperty('height',this.height)
    }
  },
  methods: {
    initButton() {
      const editorButton = document.querySelector(".ql-insertMetric");
      editorButton.innerHTML =
        '<i class="el-icon-link" style="font-size: 18px;color: black"></i>';
    },
    showHandle() {
      console.log("这是自定义工具栏的方法！");
    },
    onEditorBlur(editor) {},
    // 获得焦点
    onEditorFocus(editor) {},
    // 开始
    onEditorReady(editor) {},
    // 值发生变化
    onEditorChange(editor) {
      // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
      this.formData.content = editor.html;
      this.$emit("input", this.formData.content);
      this.$emit("editor-change", editor);
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        // console.log('get value',newVal,'-',oldVal);
        this.formData.content = newVal;
      },
    },
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请在这里输入内容",
    },
    toolbarOptions: {
      type: Array,
      default: function () {
        return [
          ["insertMetric"], //自定义方法
          ["bold", "italic", "underline"], // 加粗，斜体，下划线，删除线
          ["blockquote", "code-block"], //引用，代码块
          [{ list: "ordered" }, { list: "bullet" }], // 有序列表，无序列表
          [{ script: "sub" }, { script: "super" }], // 下角标，上角标
          [{ indent: "-1" }, { indent: "+1" }], // 缩进
          [{ size: fontStyle.whitelist }], // 字体大小
          [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
          [{ color: [] }, { background: [] }], // 颜色选择
          [{ align: [] }], // 居中
          ["clean"], // 清除样式,
          ["link", "image"], // 上传图片、上传视频
        ];
      },
    },
    width:String,
    height:String
  },
};
</script>

<style scoped>
.ql-container {
  height: 100px;
}
</style>
