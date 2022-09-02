import Vuex from "vuex";
import Vue from "vue";
import auditor from "./auditor";
import user from "./user";
import root from "./root";
import userInfo from './userInfo';

Vue.use(Vuex);
//参考尚品汇P19，已分模块

export default new Vuex.Store({
  modules: {
    user,
    auditor,
    root,
    userInfo
  },
});
