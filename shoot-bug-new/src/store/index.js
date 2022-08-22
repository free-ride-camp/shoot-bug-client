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
    
  }
})