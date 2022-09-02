<template>
  <div id="app">
    <div v-show="modal" class="mask" @click.self="$bus.$emit('modalHide')">
      <component :is="loginEntry"></component>
    </div>
    <el-container>
      <SBHeader />

      <div class="main-aside">
        <div class="special-btn">
          <button @click="newQuestion">Ask Question</button>
        </div>
        <el-menu
          class="aside-container"
          default-active="questions"
          background-color="var(--mode-bg-color)"
          router
        >
          <el-menu-item index="questions">
            <i class="el-icon-reading"></i>
            <span slot="title">问题</span>
          </el-menu-item>
          <el-menu-item index="tags">
            <i class="el-icon-collection-tag"></i>
            <span slot="title">标签</span>
          </el-menu-item>
          <el-menu-item index="users">
            <i class="el-icon-user"></i>
            <span slot="title">用户</span>
          </el-menu-item>
          <el-menu-item index="myquestions">
            <i class="el-icon-finished"></i>
            <span slot="title">我的问题</span>
          </el-menu-item>
          <el-menu-item index="history">
            <i class="el-icon-time"></i>
            <span slot="title">历史记录</span>
          </el-menu-item>
        </el-menu>
      </div>

      <router-view></router-view>
    </el-container>

    <SBFooter />
  </div>
</template>

<script>
import SBHeader from './components/SBHeader.vue';
import SBFooter from './components/SBFooter.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

export default {
  name: "App",
  components: {
    SBHeader,
    SBFooter,
    Login,
    Register
  },
  data() {
    return {
      modal:false,
      loginEntry:'Login'
    };
  },
  methods: {
    newQuestion(){
      this.$router.push('/new')
    }
  },
  
  mounted() {
    this.$router.replace({path:'/questions'})

    this.$bus.$on('modalLogin',()=>{
      this.loginEntry = 'Login'
      this.modal = true
    })

    this.$bus.$on('modalRegister',()=>{
      this.loginEntry = 'Register'
      this.modal = true
    })

     this.$bus.$on('modalHide',()=>{
      this.modal = false
    })
  },
};
</script>

<style scoped>
#app {
  font-family: 'Microsoft YaHei', '宋体';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: fit-content;
  position: relative;
}

html,
body {
  margin: 0;
  padding: 0;
}

.icon-search {
  position: absolute;
  font-size: 18px;
  left: 18px;
  top: 14px;
}



.main-aside {
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 510px;
  position: fixed;
  top: 70px;
  left: 10%;
  background-color: var(--mode-bg-color);
  /* border-right: 1px solid #D6D9DC; */
}

.special-btn {
  flex: 1;
  display: flex;
  border-right: 1px solid #e6e6e6;
}

.special-btn button {
  margin: 8px 20px;
  flex-grow: 1;
  background-color: #1e90ff;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #fff;
  cursor: pointer;
}

.aside-container {
  flex: 9;
  padding-top: 20px;
  /* background-color: var(--mode-bg-color); */
}

.el-menu-item {
  color: var(--mode-front-color);
}

/* aside当前active的子菜单项 */
.is-active {
  border-right: 2px solid #ff4500;
}

.mask{
  width: 100vw;
  height: 100vh;
  background-color: rgba(100,100,100,.3);
  position: absolute;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
