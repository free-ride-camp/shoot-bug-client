<template>
  <div class="login-container">
    <div class="header">登 录</div>
    <hr style="width:100%">
    <div class="inputs">
      <ValidationProvider rules="required|email" v-slot="{ errors }">
        <el-input
          v-model="email"
          placeholder="请输入邮箱"
          class="input"
          type="email"
        ></el-input>
        <span class="err-msg">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider rules="required|pwd_len:8,15|pwd_normal|pwd_num_mix_letter" v-slot="{ errors }">
        <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
        class="input"
      ></el-input>
        <span class="err-msg">{{ errors[0] }}</span>
      </ValidationProvider>

      <span class="err-msg" v-show="err_msg">{{ err_msg }}</span>
    </div>

    <button class="login-area login" @click="login">登录</button>
    <div class="extends">
      <a href="#" style="float: left" @click="$bus.$emit('modalRegister')">我要注册</a>
      <a href="#" style="float: right">找回密码</a>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";

extend("email", {
  validate(value) {
    const reg =
      /[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    return reg.test(value);
  },
  message: "邮箱格式不正确!",
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true,
  message:'该字段不能为空！'
});

extend('pwd_len',{
    validate(value,{min,max}){
        return value.length >= min && value.length <= max
    },
    params:['min','max'],
    message:`密码长度必须在{min}和{max}之间！`
})

extend('pwd_normal',{
    validate(value){
        const regex = /^\w+$/;
        return regex.test(value)
    },
    message:'密码字符必须是字母，数字或者下划线！'
})

extend('pwd_num_mix_letter',{
    validate(value){
        const numRegex = /[0-9]+/g;
        const letterRegex = /[a-zA-Z]+/g;
        return numRegex.test(value) && letterRegex.test(value)
    },
    message:'必须同时含有数字和字母！'
})

export default {
  name: "Login",
  components: {
    ValidationProvider,
  },
  data() {
    return {
      email: "",
      password: "",
      err_msg: "",
    };
  },
  methods: {
    login() {},
    showRegister() {},
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  height: 290px;
  transform: translate(0, -20%);
  margin: auto;
  padding: 5px 10px;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.header {
  flex: 0.6;
  /* border: 1px solid black; */
  margin: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}

.extends {
  flex: 0.5;
  margin: 4px 0;
}

.login-area {
  flex: 0.5;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 4px 5px;
  background-color: skyblue;
}

.login:hover {
  cursor: pointer;
  background-color: DeepSkyBlue;
}

.inputs {
  flex: 2;
  /* border: 1px solid black; */
  margin: 10px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
