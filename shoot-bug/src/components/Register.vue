<template>
  <div class="reg-container">
    <div class="header">注 册</div>
    <div class="main">
      <div>
        <div>
          <label for="name">昵 称</label>
          <input
            type="text"
            id="name"
            placeholder="昵称"
            v-model="user_name"
            @blur="nameCheck"
          />
        </div>
        <p v-show="name_err">{{ name_err }}</p>
      </div>
      <div>
        <div>
          <label for="pwd">密 码</label>
          <input
            type="password"
            id="pwd"
            placeholder="密码"
            v-model="password"
            @blur="pwdCheck"
          />
        </div>
        <p v-show="pwd_err">{{ pwd_err }}</p>
      </div>
      <div>
        <div>
          <label for="pwd2">确认密码</label>
          <input
            type="password"
            id="pwd2"
            placeholder="确认密码"
            v-model="re_password"
            @blur="rePwdCheck"
          />
        </div>
        <p v-show="re_pwd_err">{{ re_pwd_err }}</p>
      </div>
      <div>
        <div>
          <label for="phone">手机号码</label>
          <input
            type="text"
            id="phone"
            placeholder="手机号码(可选项)"
            v-model="phone"
          />
        </div>
        <p v-show="phone_err">{{ phone_err }}</p>
      </div>
      <div>
        <div>
          <label for="email">电子邮箱</label>
          <input
            type="text"
            id="email"
            placeholder="电子邮箱(必输项)"
            v-model="email"
            @blur="emailCheck"
          />
        </div>
        <p v-show="email_err">{{ email_err }}</p>
      </div>
      <div>
        <div>
          <input
            type="text"
            id="verify"
            style="flex: 7"
            placeholder="验证码"
            v-model="verify_code"
            @blur="codeCheck"
          />
          <button style="flex: 3">获取验证码</button>
        </div>
        <p v-show="code_err">{{ code_err }}</p>
      </div>
      <p class="err-msg">{{ err_msg }}</p>
      <p id="agree">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          v-model="agreed"
        />
        我已阅读并同意shoot-bug相关协议
      </p>
    </div>
    <div class="reg-area">
      <button @click="register">注 册</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "register",
  data() {
    return {
      email: "",
      phone: "",
      user_name: "",
      password: "",
      re_password: "",
      verify_code: "",
      agreed: false,
      err_msg: undefined,
      name_err: undefined,
      pwd_err: undefined,
      re_pwd_err: undefined,
      phone_err: undefined,
      email_err: undefined,
      code_err: undefined,
    };
  },
  methods: {
    nameCheck() {
      if (this.user_name.length > 0 && this.user_name.length <= 12) {
        this.name_err = undefined;
        return true;
      } else {
        this.name_err = "昵称长度不合法，请控制在1到12个字符！";
        return false;
      }
    },
    pwdCheck() {
      if (this.password.length > 0 && this.password.length <= 20) {
        this.pwd_err = undefined;
        return true;
      } else {
        this.pwd_err = "密码长度不合法，请控制在1到20个字符！";
        return false;
      }
    },
    rePwdCheck() {
      if (this.re_password === this.password) {
        this.re_pwd_err = undefined;
        return true;
      } else {
        this.re_pwd_err = "确认密码与密码不一致，请检查后重新输入！";
        return false;
      }
    },
    codeCheck() {
      if (this.verify_code.length === 4) {
        this.code_err = undefined;
        return true;
      } else {
        this.code_err = "验证码长度不正确，请检查后重新输入！";
        return false;
      }
    },
    emailCheck() {
      let reg =
        /[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
      if (reg.test(this.email)) {
        this.email_err = undefined;
        return true;
      } else {
        this.email_err = "邮箱格式不合法，请检查后重新输入！";
        return false;
      }
    },
    register() {
      let noErr = true;
      noErr = this.nameCheck();
      noErr = this.pwdCheck();
      noErr = this.rePwdCheck();
      noErr = this.codeCheck();
      noErr = this.emailCheck();

      if (!this.agreed) {
        alert("请同意shoot-bug相关协议！");
        noErr = false;
      }

      if (!noErr) {
        return;
      }

      console.log('start commit...');
      this.$addr.post('/register',{
        email:this.email,
        phone:this.phone,
        user_name:this.user_name,
        password:this.password,
        verify_code:this.verify_code
      })
      .then((resp)=>{
        // console.log(resp);
        if (resp.status === 200) {
            let userInfo = resp.data.data
            //获取到用户数据存入vuex
            this.$store.commit('setUserInfo',userInfo)
            //把注册界面的效果去掉
            this.$store.commit('hideRegister')

            //跳转到对应的界面
            let role = userInfo.role
            switch (role) {
                case 'SUPER_ADMIN':
                    this.$router.replace('/root')
                    break;
                case 'AUDITOR':
                    this.$router.replace('/auditor')
                    break;
                case 'NORMAL':
                    this.$router.replace('/user/posts')
                    break;
                default:
                    break;
            }
        }
      })
    },
    bin2String(array) {
      return String.fromCharCode.apply(String, array);
    }
  },
};
</script>

<style scoped>
.reg-container {
  width: 360px;
  height: 500px;
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

.main {
  flex: 8;
  border: 1px solid black;
  margin: 4px 0;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
}

.main > div {
  border: 1px solid black;
  height: fit-content;
}

.main > div > div {
  display: flex;
}

.main > div > div > label {
  flex: 2.5;
  display: flex;
  height: 30px;
  justify-content: flex-start;
  align-items: center;
}

.main > div > div > input {
  flex: 7.5;
  padding: 0 4px;
  height: 30px;
}

.main > div > p {
  height: 20px;
  margin: 0;
  padding: 0 4px;
  color: red;
}

.reg-area {
  flex: 1;
  border: 1px solid black;
  margin: 4px 0;
  padding: 4px;
}

.reg-area > button {
  width: 100%;
  height: 100%;
  background-color: skyblue;
  box-sizing: border-box;
}

.reg-area > button:hover {
  cursor: pointer;
  background-color: deepskyblue;
}

#agree {
  margin: 0;
  font-size: 14px;
}

.err-msg {
  color: red;
}
</style>