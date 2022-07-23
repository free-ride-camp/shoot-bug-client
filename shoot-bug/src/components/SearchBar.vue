<template>
  <div id="search-bar">
    <button @click="toVisitor">游客</button>
    <button @click="toUser">普通用户</button>
    <button @click="toAuditor">审核员</button>
    <button @click="toRoot">超级管理员</button>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import base64 from 'base64-js';

export default {
  methods: {
    toVisitor() {
      this.$router.replace("/index/posts");
      console.log(base64);
    },
    toUser() {
      this.$router.replace("/user/posts");
    },
    toAuditor() {
      this.$router.replace("/auditor");
    },
    toRoot() {
      this.$router.replace("/root");
    },
    login(){
      // this.$addr.post('/login',{
      //   name:'zhangsan',
      //   password:'123456'
      // })
      // .then((resp)=>{
      //   // console.log(resp);
      //   console.log(resp.data.data);
      //   const res = base64.toByteArray(resp.data.data)
      //   console.log('res',this.bin2String(res));
      // })
      // .catch((err)=>{
      //   console.error(err);
      // })
      
    },
    bin2String(array) {
      return String.fromCharCode.apply(String, array);
    }
  },
};
</script>

<style scoped>
#search-bar {
}
</style>