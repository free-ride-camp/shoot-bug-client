<template>
  <div id="home">
    <div id="left" v-show="ifHide">
      <!-- 普通用户主页
      <br />
      <button @click="toPosts">帖子浏览区</button><br />
      <button @click="toPostEdit">我要发帖</button><br />
      <button @click="toDrafts">草稿箱</button> -->
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item index="1" route="/user/posts">
          <template slot="title">
          <i class="el-icon-view"></i>
          <span>帖子浏览区</span>
        </template>
        </el-menu-item>
        <el-menu-item index="2" route="/user/postedit" @click="hideAside">
          <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>我要发贴</span>
        </template>
        </el-menu-item>
        <el-menu-item index="3" route="/user/drafts">
          <template slot="title">
          <i class="el-icon-takeaway-box"></i>
          <span>草稿箱</span>
        </template>
        </el-menu-item>
      </el-menu>
    </div>
    <div id="right">
      <MainArea></MainArea>
    </div>
  </div>
</template>

<script>
import MainArea from "./MainArea.vue";

export default {
  data(){
    return {
      ifHide:true
    }
  },
  components: { MainArea },
  methods: {
    showAside(){
      this.ifHide = true
    },
    hideAside(){
      this.ifHide = false
    }
  },
  mounted() {
    this.$bus.$on('showAside',this.showAside)
    this.$bus.$on('hideAside',this.hideAside)
  },
};
</script>

<style scoped>
#home {
  width: 1300px;
  height: auto;
  margin: 0 auto;
  margin-top: 65px;
  box-sizing: border-box;
  border: 1px solid yellowgreen;
}

#left {
  width: 29%;
  height: 600px;
  border: 1px solid orange;
  margin: 5px;
  display: inline-block;
  vertical-align: top;
}

#right {
  width: 69%;
  height: auto;
  border: 1px solid red;
  margin: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>