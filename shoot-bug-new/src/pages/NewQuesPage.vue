<template>
  <div class="content container">
    <div class="title">
      <div class="title-label-area">
        <label for="title-edit"><a class="title-label">问题</a></label>
      </div>
      <div class="title-edit-area">
        <input type="text" id="title-edit" />
      </div>
    </div>
    <div class="answer">
      <my-quill-editor ref="contentEditor" />
    </div>
    <div class="tags" ref="tagArea">
      
    </div>
    <div class="func">
      
    </div>

  </div>
</template>

<script>
import MyQuillEditor from "../components/MyQuillEditor.vue";

export default {
  name: "NewQuesPage",
  components: {
    MyQuillEditor,
  },
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style scoped>
.container {
  padding-left: 16px;
  display: inline;
}

.title {
  width: 96%;
  height: 60px;
  border: 1px solid black;
  margin: 20px auto;
  display: flex;
}

.title-label {
  font-size: 32px;
  font-weight: bold;
  line-height: 60px;
  text-decoration: none;
  color: black;
  cursor: default;
}

.title-label-area {
  flex-basis: 100px;
  text-align: center;
}

.title-edit-area {
  height: max-content;
  width: max-content;
  flex:1;
}

#title-edit {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  outline: none;
  font-size: 32px;
}

.answer {
  width: 96%;
  height: fit-content;
  border: 1px solid black;
  margin: 20px auto;
}

.tags {
  width: 96%;
  min-height: 30px;
  height: fit-content;
  box-sizing: border-box;
  border: 1px solid black;
  margin: 20px auto;
  padding: 5px;
}

.tag {
  float: left;
  margin-right: 50px;
}

.func {
  width: 96%;
  height: 60px;
  border: 1px solid black;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.func > button {
  width: 100px;
  height: 30px;
}
</style>
