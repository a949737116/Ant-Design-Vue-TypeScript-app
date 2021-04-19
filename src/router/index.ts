import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import mainLayout from "@/layout/main.vue";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // 主页
  /**当有name的时候，这个路由才会成为动态的菜单项,否则只有名字没有点击跳转的效果 */
  /**当有show的时候才会在菜单中展示 */
  {
    path: "/",
    component: mainLayout,
    meta: {hasChildrens: true, show: false, routerEntry: true},
    children: [
      {
        path: '/',
        redirect: '/index',
        name:'首页',
        meta: {icon: 'ant-design', title: '主页', hasChildrens: false, show: true},
      },
      {
        path: '/user',
        meta: {icon: 'usergroup-add', title: '用户管理',  hasChildrens: true, show: true,},
        children:[
          {
            path: '/user/login',
            name: '登录',
            meta: { show: true}
          },
          {
            path: '/user/regist',
            name: '注册',
            meta: {show: true}
          }
        ]
      },
      {
        path: '/step',
        meta: {icon: 'apartment', title: '流程管理', hasChildrens: true, show: true,},
        children: [
          {
            path: '/step/step1',
            name:'步骤一',
            meta: {show: true}
          },
          {
            path: '/step/step2',
            name: '步骤二',
            meta: {show: true}
          },
          {
            path: '/step/step3',
            name: '步骤三',
            meta: {show: true}
          }
        ]
      },
      {
        path: '/403',
        meta: {
          hasChildrens: false,
          show: false
        }
      }
    ]
    // component: {
    //   render: (h) => h("router-view"),
    // },
    // children: [
    //   {
    //     path: "/user",
    //     redirect: "/user/login",
    //   },
    //   {
    //     path: "/user/login",
    //     name: "login",
    //     component: () =>
    //       import(/* webpackChunkName: "user" */ "@/views/user/login.vue"),
    //   },
    //   {
    //     path: "/user/regist",
    //     name: "regist",
    //     component: () =>
    //       import(/* webpackChunkName: "user" */ "@/views/user/regist.vue"),
    //   },
    // ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((from, to, next) => {
  // router的参数改变，但是路径没有改变时，不调用nprogress
  if (from.path !== to.path) {
    nprogress.start();
  }
  next();
});
router.afterEach(() => {
  nprogress.done();
});

/* 解决NavigationDuplicated: Avoided redundant navigation to current location错误 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: any) {
  return (originalPush.call(this, location) as any).catch((err) => err);
};

export default router;
