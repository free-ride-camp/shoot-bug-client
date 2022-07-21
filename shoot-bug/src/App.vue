<template>
  <div id="app">
    <nav-bar />
    <div id="mask" v-show="pop" @click="hide"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from 'vuex';

export default {
  name: "App",
  data() {
    return {

    };
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapState({
      show_Login:state=>state.login,
      show_Register:state=>state.register
    }),
    pop(){
      return this.show_Login || this.show_Register
    }
  },
  watch:{
    pop:{
      immediate:false,
      handler(newVal){
        if (newVal) {
          document.body.style.overflow = 'hidden'
        }else{
          document.body.style.overflow = 'auto'
        }
      }
    }
  },
  mounted() {
    this.$router.push({ path: "/index/posts" });
    // axios.get("/api/postdescs/pagesizes?size=10").then((resp) => {
    //   if (resp.data.code === 200) {
    //     store.setPostDescPageSize(resp.data.data);
    //   }
    // });
  },
  methods: {
    hide(){
        if (this.show_Login) {
          this.$store.commit('hideLogin')
        }else if(this.show_Register){
          this.$store.commit('hideRegister')
        }

    }
  },
};
</script>

<style>
#app {
  position: relative;
}

#mask{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(211, 211, 211, 0.5);
  z-index: 1000;
}
/* 通用样式写这里 */
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>
