import Vue from "vue";
import VueRouter from "vue-router";
import Refresh from "@/pages/Refresh";
import QuesPage from '../pages/QuesPage.vue';
import TagsPage from '../pages/TagsPage.vue';

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
      path: "/ques",
      component:QuesPage
    },
    {
      path:'/tags',
      component:TagsPage
    },
    {
      name: "refresh",
      path: "/refresh",
      component: Refresh,
    },
    
  ],
});

export default router;