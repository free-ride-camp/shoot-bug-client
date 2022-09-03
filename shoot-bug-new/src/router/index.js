import Vue from "vue";
import VueRouter from "vue-router";
import tools from '../common/tools';
import Refresh from "@/pages/Refresh";
import QuesPage from '../pages/UserPages/QuesPage.vue';
import TagsPage from '../pages/UserPages/TagsPage.vue';
import UsersPage from '../pages/UserPages/UsersPage.vue';
import NewQuesPage from '../pages/UserPages/NewQuesPage.vue';
import MyQuesPage from '../pages/UserPages/MyQuesPage.vue';

//保存原来的push|replace方法
var originPush = VueRouter.prototype.push;
var originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/questions",
      component:QuesPage
    },
    {
      path:'/tags',
      component:TagsPage
    },
    {
      path:'/users',
      component:UsersPage
    },
    {
      path:'/new',
      component:NewQuesPage
    },
    {
      path:'/myquestions',
      component:MyQuesPage
    },
    {
      name: "refresh",
      path: "/refresh",
      component: Refresh,
    }
  ],
});

router.beforeEach(async (to,from,next)=>{
  //需要登录权限的路由组件
  const needLoginPaths = new Set(['/new','/myquestions'])
  if (needLoginPaths.has(to.path)) {
    //如果当前用户处于未登录状态
    if (!tools.getCookie('user_id')) {
      //阻止跳转，弹出登录框
      Vue.prototype.$bus.$emit('modalLogin')
      return false
    }
  }

  next()
})

export default router;
