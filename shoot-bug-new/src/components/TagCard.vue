<template>
  <div id="container" ref="container">
    <div class="title-part">
      <el-button type="text">{{ tagName }}</el-button>
    </div>
    <div class="desc-part">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {{ tagDesc }}
    </div>
    <div class="info-part">
        <div class="ques-count">问题数量:{{quesCount}}</div>
        <div class="today-asked">今日相关提问:{{todayAsked}}</div>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";

export default {
  name: "TagCard",
  props: ["tagName", "tagDesc","quesCount","todayAsked","width","height"],
  mounted() {
    if (this.width) {
        this.$refs.container.style.setProperty('width',this.width)
    }
    if (this.width) {
        this.$refs.container.style.setProperty('height',this.height)
    }
  }
};
</script>

<style scoped>
#container {
  width: 250px;
  height: 180px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 1px 1px 4px #888;
  text-align: start;
  flex-direction: column;
  display: flex;
}

.title-part {
  flex: 2.5;
  padding-left: 15px;
}

.desc-part {
  flex: 5;
  padding: 0 10px;
  line-height: 15px;
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.info-part {
  flex: 2.5;
  padding: 0 10px;
  font-size: 12px;
  color: rgb(160, 160, 160);
  display: flex;
  align-items: center;
}

.ques-count{
    width: 120px;
    height: fit-content;
    float: left;
}

.today-asked{
    width: 120px;
    height: fit-content;
    float: right;
}
</style>
