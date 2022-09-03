<template>
  <div class="reg-container">
    <div class="header">注 册</div>
    <hr style="width:100%">
    <el-form
      :model="info"
      :rules="rules"
      ref="ruleForm"
      class="main"
      label-width="80px"
      size="small"
      label-position="left"
    >
      <el-form-item label="昵称" prop="user_name">
        <el-input v-model="info.user_name" />
      </el-form-item>

      <el-form-item label="密码" prop="pwd">
        <el-input v-model="info.pwd" show-password />
      </el-form-item>

      <el-form-item label="确认密码" prop="pwd2">
        <el-input v-model="info.pwd2" show-password />
      </el-form-item>

      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="info.phone" />
      </el-form-item>

      <el-form-item label="电子邮箱" prop="email">
        <el-input v-model="info.email" />
      </el-form-item>

      <div class="verify-container">
        <div style="flex:7">
             <el-form-item label="验证码" prop="code">
                <el-input v-model="info.code" />
            </el-form-item>
        </div>
        <div style="flex:3">
            <button class="verify-btn" @click="getCode" ref="getCodeBtn">获取验证码{{secends}}</button>
        </div>
      </div>

      <p class="err-msg">{{ err_msg }}</p>
      <p id="agree">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          v-model="agreed"
          style="vertical-align: middle;"
        />
        <a href="#" style="vertical-align: middle;">我已阅读并同意shoot-bug相关协议</a>
      </p>
    </el-form>
    <div class="reg-area">
      <button @click="register">注 册</button>
    </div>
  </div>
</template>

<script>
import tools from '../common/tools';
import config from '../common/config';

export default {
  name: "Register",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.info.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    var phoneValidator = (rule, value, callback) => {
      if (value.length === 0) {
        callback();
      } else if (value.length !== 11) {
        callback(new Error("手机号码长度必须为11位！"));
      } else if (/\D+/g.test(value)) {
        callback(new Error("存在数字以外的字符！"));
      } else {
        callback();
      }
    };

    var emailValidator = (rule, value, callback) => {
      const reg =
      /[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
      if (!reg.test(value)) {
        callback(new Error('邮箱格式不正确！'))
      }
      else {
        callback();
      }
    };

    var codeValidator = (rule, value, callback) => {
        if (value.length != 4) {
            callback(new Error('验证码长度必须为4！'))
            return
        }
    }

    return {
      secends:60,
      info: {
        user_name: "张三是煞笔",
        pwd: "hlz123456",
        pwd2: "hlz123456",
        phone: "13515773333",
        email: "hlz123@qq.com",
        code:"1684"
      },
      rules: {
        user_name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 4,
            max: 12,
            message: "昵称长度在4~12个字符之间",
            trigger: "blur",
          },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 15,
            message: "密码长度在8~15个字符之间",
            trigger: "blur",
          },
        ],
        pwd2: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" },
        ],
        phone: [{ validator: phoneValidator, trigger: "blur" }],
        email: [{ required: true, message: "请输入电子邮箱", trigger: "blur" },
            {validator:emailValidator,trigger:"blur"}
        ],
        code:[{required:true,message:"请输入验证码",trigger:"blur"},
            {validator:codeValidator,trigger:"blur"}]
      },
      err_msg: "",
      name_err: "",
      agreed: false,
    };
  },
  methods: {
    register() {
      if (!this.agreed) {
        this.err_msg = "请同意shoot-bug相关协议！"
        return
      }
      //userInfo为删除pwd2属性后的info
      const {pwd2,...userInfo} = this.info
      this.$addr.post('/register',userInfo)
      .then((result) => {
        if (result.status === 200) {
          console.log('res',result.data);
              //登录成功，记录用户信息到仓库中
              this.$store.commit("setUserInfo", result.data);
              //记录用户个人的关键信息到cookie中，维持7天
              tools.setCookie(
                "user_id",
                this.$store.getters.id,
                config.cookieMaintainDays
              );
              tools.setCookie(
                "role",
                this.$store.getters.role,
                config.cookieMaintainDays
              );
              tools.setCookie(
                "jwt",
                this.$store.getters.jwt,
                config.cookieMaintainDays
              );
              //关闭登录框，更新header中的头像和名字
              this.$bus.$emit("modalHide");
              this.$bus.$emit("logined");
        }else{
          this.err_msg = "服务器内部错误，请联系开发人员"
          throw new Error(`error status:${result.status}`)
        }
      }).catch((err) => {
        console.error(err)
      });
    },
    getCode(){}
  },
};
</script>

<style scoped>
.reg-container {
  width: 360px;
  height: 500px;
  transform: translate(0 -20%);
  margin: auto;
  padding: 5px 10px;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.header {
  flex: 1;
  /* border: 1px solid black; */
  margin: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}

.main {
  flex: 8;
  /* border: 1px solid black; */
  margin: 4px 0;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
}

.reg-area {
  flex: 1;
  /* border: 1px solid black; */
  margin: 4px 0;
  padding: 4px;
}

.reg-area > button {
  width: 100%;
  height: 100%;
  background-color: skyblue;
  border: 1px solid black;
  border-radius: 4px;
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

.verify-container{
    border: 1pxs solid black;
    display: flex;
}

.verify-btn{
    height: 30px;
    width: 95%;
    box-sizing: border-box;
    margin: 2px 4px;
}
</style>
