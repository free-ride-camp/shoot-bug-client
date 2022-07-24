<template>
  <div id="nav-bar">
    <img src="../assets/logo1.png" alt="" id="nav-logo" />
    <p class="logo-name">Shoot Bug</p>
    <div class="nav-container">
      <div class="search">
        <search-bar/>
      </div>
      <div class="user-control">
        <div class="avatar">
          <el-avatar icon="el-icon-user-solid" size="small" :src="avatar_url"></el-avatar>
        </div>
        <div class="login-register">
          <div style="float: left" v-show="!logined">
            <a href="#" @click="showLogin">登录</a>
            |
            <a href="#" @click="showRegister">注册</a>
          </div>
          <div style="float: left" v-show="logined">
            <a href="#">{{ userName }}</a>
          </div>
          <div style="float:left" v-show="logined">
          |
          <a href="#" @click="logOut">退出登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "NavBar",
  data() {
    return {
      avatar_url: "",
      logined: false,
    };
  },
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
    logOut() {
      this.$store.commit("setUserInfo", {});
      this.$router.replace("/index/posts");
      this.$bus.$emit('unSetAvatar')
    },
  },
  computed: {
    userName() {
      return this.$store.state.userInfo.name;
    },
  },
  mounted() {
    this.$bus.$on("setAvatar", (url) => {
      // this.$refs.avatar.src = url;
      this.avatar_url = url;
      this.logined = true;
    });
    this.$bus.$on("unSetAvatar", () => {
      this.avatar_url = undefined;
      this.logined = false;
    });
    // console.log('nav-bar mounted');
  },
  beforeDestroy() {
    this.$bus.$off("setAvatar");
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
  width: 36px;
  height: 36px;
  position: absolute;
  margin: auto;
  left: 30px;
  top: 0;
  bottom: 0;
}

.logo-name{
  margin-left: 75px;
  font-size: 24px;
  margin-top: 13px;
  margin-bottom: 0;
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
  margin: auto 4px;
  top: 9px;
  bottom: 0;
}

.login-register {
  height: 100%;
  box-sizing: border-box;
  margin-left: 40px;
  line-height: 40px;
}
</style>