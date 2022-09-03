const state = {
  userInfo: {
    user_id: 0,
    user_name: "",
    role: "",
    avatar_url: "",
    jwt: "",
    email: "",
    gender: "",
    age: 0,
    city: "",
    experience: 0,
    field: "",
  },
};

const mutations = {
  setUserInfo(state, payload) {
    for (const key in payload) {
      if (
        Object.hasOwnProperty.call(payload, key) &&
        Object.hasOwnProperty.call(state.userInfo, key)
      ) {
        state.userInfo[key] = payload[key];
      }
    }
  },

  clearUserInfo(state){
    for (const key in state.userInfo) {
      if (typeof state.userInfo[key] === 'string') {
        state.userInfo[key] = ''
      }
      else if (typeof state.userInfo[key] == 'number'){
        state.userInfo[key] = 0
      }
    }
  }
};

const actions = {};

const getters = {
  id:(state)=> state.userInfo.user_id,
  name: (state) => state.userInfo.user_name,
  avatar: (state) => state.userInfo.avatar_url,
  jwt: (state) => state.userInfo.jwt,
  role: (state) => state.userInfo.role,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
