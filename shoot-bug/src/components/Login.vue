<template>
  <div class="login-container">
    <div class="header">
      登 录
    </div>
    <div class="inputs">
      <input type="text" class="input" placeholder="电子邮箱/手机号">
      <input type="password" class="input" placeholder="密码">
    </div>

    <button class="login-area login">
      登录
    </button>
    <div class="extends">
      <a href="#" style="float:left">我要注册</a>
      <a href="#" style="float:right">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
    name:'login',
    data() {
      return {
        
      }
    },
}
</script>

<style scoped>
.login-container{
    width: 300px;
    height: 290px;
    position: absolute;
    margin: auto;
    padding: 5px 10px;
    left:0;
    right: 0;
    top: 80px;
    border: 1px solid black;
    background-color: #fff;
    border-radius: 4px;
    z-index: 2000;
    display: flex;
    flex-direction: column;
}

.header{
  flex: 1;
  border: 1px solid black;
  margin: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}

.extends{
  flex: 0.5;
  border: 1px solid black;
  margin: 4px 0;
}

.login-area{
  flex: 0.5;
  border: 1px solid black;
  margin: 4px 0;
  background-color: skyblue;
}

.login:hover{
  cursor: pointer;
  background-color: DeepSkyBlue;
}

.inputs{
  flex: 2;
  border: 1px solid black;
  margin: 10px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input{
  height: 35px;
  width: 100%;
  padding: 0;
  margin: 5px 0;
  font-size: 14px;
}
</style>