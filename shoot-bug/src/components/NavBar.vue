<template>
  <div id="nav-bar">
    <img src="../assets/logo_tmp.png" alt="" id="nav-logo" />
    <div class="nav-container">
      <div class="search">
        <!-- <search-bar/> -->
      </div>
      <div class="user-control">
        <div class="avatar">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div class="login-register">
          <a href="#" @click="showLogin">登录</a>
          |
          <a href="#" @click="showRegister">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "NavBar",
  components: {
    SearchBar,
  },
  methods: {
    showLogin() {
      this.$store.commit("hideRegister");
      this.$store.commit("showLogin");
    },
    showRegister() {
      this.$store.commit("hideLogin");
      this.$store.commit("showRegister");
    },
  },
};
</script>

<style scoped>
#nav-bar {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border: 1px solid black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

#nav-logo {
  width: 48px;
  height: 48px;
  position: absolute;
  left: 30px;
  top: 8px;
}

.nav-container {
  width: 1300px;
  height: 48px;
  box-sizing: border-box;
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translate(0, -50%);
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.search {
  width: 60%;
  height: 100%;
  border: 1px solid orange;
  box-sizing: border-box;
}

.user-control {
  width: 35%;
  height: 100%;
  border: 1px solid red;
  box-sizing: border-box;
  padding: 2px;
  position: relative;
}

.avatar {
  position: absolute;
  margin: auto 2px;
  top: 2px;
  bottom: 0;
}

.login-register {
  height: 100%;
  box-sizing: border-box;
  margin-left: 50px;
  line-height: 40px;
}
</style>