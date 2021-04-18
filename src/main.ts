import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Layout, Menu, Icon, Breadcrumb, Drawer } from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Breadcrumb);
Vue.use(Drawer);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
