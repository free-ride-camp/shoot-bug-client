/**
 * 项目前期暂时不引入vuex，采用简单的状态管理
 * 详情看https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8
 *  后来发现，简单的状态管理存在一些问题，
 *  1. 只有深度监视才能获取到状态改变
 *  2. 当state内的属性值发生改变，会通知所有使用到state的组件，当state内部存在多数据时，这种情况就比较烦了。
 *  因此还是打算引入vuex
 */

// export default {
//   debug: true,
//   state: {
//     //这里写要共享的数据
//     showLogin:false,
//     showRegister:false
//   },
//   //这里写公共的对数据操作的方法
//   getShowLogin(){
//     return this.state.showLogin
//   },

//   setShowLogin(val){
//     this.state.showLogin = val
//   },
//   getShowRegister(){
//     return this.state.showRegister
//   },

//   setShowRegister(val){
//     this.state.showRegister = val
//   },
// };

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    login:false,
    register:false,
    userInfo:{
      id:0,
      name:'',
      role:'',
      avatar_url:'',
      jwt:'',
      email:'',
      gender:'',
      age:0,
      city:'',
      experience:0,
      field:''
    }
  },
  mutations:{
    showLogin(state){
      state.login = true
    },
    hideLogin(state){
      state.login= false
    },
    showRegister(state){
      state.register = true
    },
    hideRegister(state){
      state.register = false
    },
    setUserInfo(state,userInfo){
      state.userInfo = userInfo
    }
  }
})