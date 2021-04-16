import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import mainLayout from "@/layout/main.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // 注册页和登陆页
  {
    path: "/user",
    component: mainLayout,
    // component: {
    //   render: (h) => h("router-view"),
    // },
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/login.vue"),
      },
      {
        path: "/user/regist",
        name: "regist",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/regist.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
