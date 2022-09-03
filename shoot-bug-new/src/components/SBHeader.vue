<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo">
        <img src="../assets/logo2.png" alt="" />
      </div>
      <div class="header-search">
        <search-bar
          id="search-bar"
          ref="search-bar"
          flex-w="96%"
          flex-h="70%"
          font-size="16px"
          placeholder="Search..."
          half-radius
          @focustodo="addOutLine"
          @blurtodo="removeOutLine"
        />
      </div>
      <div class="header-content">
        <div class="header-user">
          <div style="flex-basis: 32px">
            <div v-if="logined">
              <el-popover
                placement="bottom-start"
                :title="$store.getters.name"
                width="200"
                trigger="hover"
              >
                <el-avatar
                  class="null-avatar"
                  slot="reference"
                  :src="$store.getters.avatar"
                >
                  <i class="el-icon-loading" style="font-size: 16px"></i>
                </el-avatar>
                <slot>
                  <div>声望值：0</div>
                  <div>徽章数：0</div>
                  <div>
                    <a class="logout-link" @click="logOut">退出登录</a>
                  </div>
                </slot>
              </el-popover>
            </div>
            <div v-else @click="$bus.$emit('modalLogin')">
              <el-popover
                placement="bottom-start"
                title="点击头像登录"
                width="200"
                trigger="hover"
              >
                <el-avatar class="null-avatar" slot="reference">
                  <i class="el-icon-user-solid" style="font-size: 12px"></i>
                </el-avatar>
                <slot>
                  如果您还没有注册，请点<a
                    class="to-register"
                    @click="$bus.$emit('modalRegister')"
                    >这里</a
                  >
                </slot>
              </el-popover>
            </div>
          </div>
          <div class="user-name" @click="seeMeOrLogin" ref="user-name">
              {{userName|subName}}
          </div>
        </div>

        <el-tooltip effect="dark" content="消息盒" placement="bottom-start">
          <div class="header-inbox content-item">
            <i class="el-icon-receiving"></i>
          </div>
        </el-tooltip>

        <el-tooltip
          effect="dark"
          content="最近获得的荣誉"
          placement="bottom-start"
        >
          <div class="header-earned content-item">
            <i class="el-icon-trophy"></i>
          </div>
        </el-tooltip>

        <el-tooltip
          effect="dark"
          content="点击切换日间/夜间模式"
          placement="bottom-start"
        >
          <div class="header-inbox content-item" @click="changeMode">
            <i v-show="mode === 'day'" class="el-icon-sunny"></i>
            <i v-show="mode === 'night'" class="el-icon-moon"></i>
          </div>
        </el-tooltip>

        <el-tooltip effect="dark" content="更多" placement="bottom-start">
          <div class="header-help content-item">
            <i class="el-icon-more-outline"></i>
          </div>
        </el-tooltip>
      </div>
    </div>
  </header>
</template>

<script>
import tools from '../common/tools';

export default {
  name: "SBHeader",
  data() {
    return {
      logined: false,
      mode: "day",
    };
  },
  methods: {
    addOutLine() {
      this.$refs["search-bar"].$el.classList.add("search-bar-outline");
    },
    removeOutLine() {
      this.$refs["search-bar"].$el.classList.remove("search-bar-outline");
    },
    changeMode() {
      if (this.mode === "day") {
        this.mode = "night";
      } else if (this.mode === "night") {
        this.mode = "day";
      }
    },
    logOut(){
      //清除仓库数据
      this.$store.commit('clearUserInfo')
      //清除cookie用户数据
      tools.removeCookie('user_id')
      tools.removeCookie('role')
      tools.removeCookie('jwt')
      //更新header中的头像和名字
      this.$bus.$emit('logouted')
    },
    seeMeOrLogin(){
      const userName = this.$refs['user-name'].innerText
      if (userName === "未登录") {
        this.$bus.$emit('modalLogin')
        return
      }
      else{

      }
    }
  },
  computed: {
    userName(){
      if(this.$store.getters.name === ''){
        return '未登录'
      }
      return this.$store.getters.name
    }
  },
  watch: {
    mode(newVal) {
      let style = document.documentElement.style;
      if (newVal === "day") {
        style.setProperty("--mode-bg-color", "var(--day-bg-color)");
        style.setProperty("--mode-front-color", "var(--day-color)");
      } else if (newVal === "night") {
        style.setProperty("--mode-bg-color", "var(--night-bg-color)");
        style.setProperty("--mode-front-color", "var(--night-color)");
      }
    },
  },
  mounted() {
    this.$bus.$on("logined", () => {
      this.logined = true;
    });
    this.$bus.$on("logouted", () => {
      this.logined = false;
    });
  },
  filters:{
    subName(value){
      if (!value) {
        return ''
      }
      if (value.length > 6) {
        return value.substr(0,6) + '...'
      }
      return value
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-top: 3px solid #ff4500;
  background-color: var(--mode-bg-color);
  position: fixed;
  z-index: 9999;
  box-shadow: 1px 0px 4px #888;
  display: flex;
  justify-content: center;
}

.header-container {
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
}

.header-logo {
  width: 150px;
  /* 占用主轴固定150px的空间 */
  flex-basis: 150px;
  box-sizing: border-box;
  overflow: hidden;
}

.header-logo > img {
  width: 150px;
  height: auto;
  position: relative;
  top: -33px;
}

.header-search {
  flex: 7.5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  flex: 2.5;
  display: flex;
}

.header-user {
  display: flex;
  align-items: center;
  flex: 2;
  margin-left: 4px;
}

.user-name{
  flex: 1;
  padding-left: 6px;
  font-size: 14px;
  color: black;
  white-space: nowrap;
  cursor: pointer;
}

.content-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.content-item > i {
  color: var(--mode-front-color);
}

.content-item:hover {
  cursor: pointer;
  background-color: #d3d3d3;
}

.null-avatar {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#search-bar {
  border: 1px solid #dcdcdc;
}

.search-bar-outline {
  box-shadow: 1px 1px 8px #c0c0c0, -1px -1px 8px #c0c0c0;
}

.to-register:hover {
  cursor: pointer;
  color: cornflowerblue;
}

.logout-link:hover{
  color: darkblue;
  cursor: pointer;
}
</style>
