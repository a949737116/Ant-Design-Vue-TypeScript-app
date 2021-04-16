import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/views/user/login.vue";
import Regist from "@/views/user/regist.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // 注册页和登陆页
  {
    path: "/user",
    component: {
      render: (h) => h("router-view"),
    },
    children: [
      {
        path: "/user/login",
        name: "login",
        component: Login,
      },
      {
        path: "/user/regist",
        name: "regist",
        component: Regist,
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
