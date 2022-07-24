<template>
  <div class="login-container">
    <div class="header">登 录</div>
    <div class="inputs">
      <input
        type="text"
        class="input"
        placeholder="电子邮箱"
        v-model="email"
        @blur="emailCheck"
      />
      <p class="err-msg" v-show="err_email">{{ err_email }}</p>
      <input
        type="password"
        class="input"
        placeholder="密码"
        v-model="password"
        @blur="pwdCheck"
      />
      <p class="err-msg" v-show="err_pwd">{{ err_pwd }}</p>
      <p class="err-msg" v-show="err_msg">{{ err_msg }}</p>
    </div>

    <button class="login-area login" @click="login">登录</button>
    <div class="extends">
      <a href="#" style="float: left" @click="showRegister">我要注册</a>
      <a href="#" style="float: right">找回密码</a>
    </div>
  </div>
</template>

<script>
import pub from "../public/index";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      err_email: undefined,
      err_pwd: undefined,
      err_msg: undefined,
    };
  },
  methods: {
    emailCheck() {
      if (!pub.emailFormatCheck(this.email)) {
        this.err_email = "邮箱格式错误，请检查后重新输入！";
        return false;
      } else {
        this.err_email = undefined;
        return true;
      }
    },
    pwdCheck() {
      if (this.password.length < 6 || this.password.length > 20) {
        this.err_pwd = "密码长度不正确，请检查后重新输入！";
        return false;
      } else {
        this.err_pwd = undefined;
        return true;
      }
    },
    login() {
      this.$addr
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            // console.log('data',resp.data.data);
            let userInfo = resp.data.data;
            //获取到用户数据存入vuex
            this.$store.commit("setUserInfo", userInfo);
            //把注册界面的效果去掉
            this.$store.commit("hideLogin");

            //跳转到对应的界面
            let role = userInfo.role;
            switch (role) {
              case "SUPER_ADMIN":
                this.$router.replace("/root");
                break;
              case "AUDITOR":
                this.$router.replace("/auditor");
                break;
              case "NORMAL":
                this.$router.replace("/user/posts");
                break;
              default:
                break;
            }
            //更新头像和名字
            this.$bus.$emit("setAvatar", userInfo.avatar_url);
          } else {
            this.err_msg = "网络错误，code:" + resp.status;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    showRegister(){
      this.$store.commit("hideLogin");
      this.$store.commit("showRegister");
    }
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  height: 290px;
  position: absolute;
  margin: auto;
  padding: 5px 10px;
  left: 0;
  right: 0;
  top: 80px;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 4px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
}

.header {
  flex: 1;
  border: 1px solid black;
  margin: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}

.extends {
  flex: 0.5;
  border: 1px solid black;
  margin: 4px 0;
}

.login-area {
  flex: 0.5;
  border: 1px solid black;
  margin: 4px 0;
  background-color: skyblue;
}

.login:hover {
  cursor: pointer;
  background-color: DeepSkyBlue;
}

.inputs {
  flex: 2;
  border: 1px solid black;
  margin: 10px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input {
  height: 35px;
  width: 100%;
  padding: 0;
  margin: 5px 0;
  font-size: 14px;
}

.err-msg {
  margin: 0;
  font-size: 12px;
  color: red;
}
</style>