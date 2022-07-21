<template>
  <div class="reg-container">
    <div class="header">注 册</div>
    <div class="main">
        <div>
            <label for="name">昵 称</label>
            <input type="text" id="name" placeholder="昵称">
        </div>
        <div>
            <label for="pwd">密 码</label>
            <input type="password" id="pwd" placeholder="密码">
        </div>
        <div>
            <label for="pwd2">确认密码</label>
            <input type="password" id="pwd2" placeholder="确认密码">
        </div>
        <div>
            <label for="phone">手机号码</label>
            <input type="text" id="phone" placeholder="手机号码">
        </div>
        <div>
            <label for="email">电子邮箱</label>
            <input type="text" id="email" placeholder="电子邮箱">
        </div>
        <div>
            <label for="verify" style="flex:2.5;">验证码</label>
            <input type="text" id="verify" style="flex:5;">
            <button style="flex:2.5;">验证码</button>
        </div>
        <p id="agree">
            <input type="checkbox" name="agreement" id="agreement">
            我已阅读并同意shoot-bug相关协议
        </p>
    </div>
    <div class="reg-area">
        <button>注 册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
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

.main>div{
    border: 1px solid black;
    height: 30px;
    display: flex;
}

.reg-area {
  flex: 1;
  border: 1px solid black;
  margin: 4px 0;
  padding: 4px;
}

.reg-area>button{
    width:100%;
    height: 100%;
    background-color: skyblue;
    box-sizing: border-box;
}

.reg-area>button:hover{
    cursor: pointer;
    background-color: deepskyblue;
}

.main>div>label{
    flex: 2.5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.main>div>input{
    flex: 7.5;
    padding: 0;
}

#agree{
    margin: 0;
    font-size: 14px;
}
</style>