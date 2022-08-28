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
          v-model="title"
          :fetch-suggestions="querySearchAsync"
          placeholder="举例：如何在foreach方法中break或者continue?"
        ></el-autocomplete>
      </div>
      <div class="desc-container">
        <h3>描述</h3>
        <div class="tiptap">
          <Tiptap v-model="content" />
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
      content: "",
      title: "",
    };
  },
  methods: {
    querySearchAsync() {},
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
  flex: 1.8;
}

.desc-container {
  flex: 8.2;
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
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>