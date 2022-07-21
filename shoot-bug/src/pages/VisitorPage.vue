<template>
  <div id="home">
        <Login v-show="show_Login">

        </Login>
        <Register v-show="show_Register">

        </Register>
        <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

export default {
    name:'VisitorPage',
    data() {
        return {

        }
    },
    components:{
        Login,
        Register
    },
    methods: {
        
    },
    computed:{
        ...mapState({
            show_Login:state=>state.login,
            show_Register:state=>state.register
        })
    }
}
</script>

<style scoped>
    #home{
        width: 1300px;
        height: auto;
        margin: 0 auto;
        margin-top: 65px;
        box-sizing: border-box;
        border: 1px solid yellowgreen;
    }
</style>