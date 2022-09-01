<template>
  <div class="content" id="new-container">
    <div class="ques-part">
      <div class="title-container">
        <h3>
          <label
            for="title-input"
            title="请明确您的问题核心并注意问题表述是否符合右边提示的注意点"
            >标题</label
          >
        </h3>
        <el-autocomplete
          v-model="quesQuery"
          :fetch-suggestions="queryQuestionAsync"
          placeholder="举例：如何在foreach方法中break或者continue?"
          :trigger-on-focus="false"
        ></el-autocomplete>
      </div>
      <div class="desc-container">
        <h3>描述</h3>
        <div class="tiptap">
          <Tiptap v-model="content" />
        </div>
      </div>
      <div class="func-container">
        <div class="tags-container">
          <div class="suggest-input">
            <el-autocomplete v-model="tagQuery"
              :fetch-suggestions="queryTagAsync"
              placeholder="输入标签名添加"
              :trigger-on-focus="false"
            />
          </div>
          <div class="tags">

          </div>
        </div>
        <hr style="background:#ccc;width:100%;">
        <div class="btns-container">
          <button>清空</button>
          <button>保存</button>
          <button>发布</button>
        </div>
      </div>
    </div>
    <div class="info-part"></div>
  </div>
</template>

<script>
import Tiptap from "../components/Tiptap.vue";

export default {
  name: "NewQuesPage",
  components: {
    Tiptap,
  },
  data() {
    return {
      content:"",
      quesQuery: "",
      tagQuery:""
    };
  },
  methods: {
    queryQuestionAsync() {
      console.log('get queryQuestionAsync');
    },
    queryTagAsync(){
      console.log('get queryTagAsync');
    },
    test(){

    }
  },
};
</script>

<style scoped>
#new-container {
  display: flex;
}

.ques-part {
  flex: 7.5;
  border: 2px solid black;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #888;
  box-sizing: border-box;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.info-part {
  flex: 2.5;
  border: 2px solid black;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #888;
  box-sizing: border-box;
  margin: 16px 0;
}

.title-container {
  flex: 1;
}

.desc-container {
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

h3 {
  margin: 8px 0;
}

.desc-container h3 {
  flex-basis: 1.17em;
}

.tiptap {
  flex: 1;
}

.func-container{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-top: 25px;
}

.tags-container{
  height: 50px;
  margin: 4px 0;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
}

.btns-container{
  height: 50px;
  margin: 4px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.btns-container > button{
  width: 90px;
  height: 30px;
  box-sizing: border-box;
  font-size: 16px;
  margin: auto 12px;
}

div >>> .el-input__inner {
  margin: 0;
  padding: 0 4px;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  border: 0;
  outline: none;
}

.el-autocomplete{
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
}

.suggest-input{
  flex: 2.5;
}

.tags{
  flex: 7.5;
}
</style>