<template>
  <a-layout style="min-height: 100vh" :class="$style.mainLayout">
    <a-layout-sider
      v-model="collapsed"
      collapsible
      :trigger="null"
      :theme="themeColorContorl"
    >
      <div
        v-if="themeColorContorl === 'dark'"
        class="logo"
        :class="$style.logo"
      />
      <div v-else>
        <img src="@/assets/logo.svg" :class="$style.light__logo" />
      </div>
      <menuSub :theme="themeColorContorl" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; text-align: left">
        <a-icon
          :class="$style.a__icon"
          @click="collapsed = !collapsed"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb
          style="margin: 16px 0"
          :class="$style.mainLayoutBreadcrumb"
        >
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
        <userDrawer />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="less" module>
.mainLayout {
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .light__logo {
    width: 32px;
    margin: 16px;
  }
  .mainLayoutBreadcrumb {
    text-align: left;
  }
  .a__icon {
    font-size: 25px;
    padding-left: 20px;
  }
}
</style>

<script lang="ts">
import layoutHeader from "./components/header.vue";
import slideMenu from "./components/slideMenu.vue";
import layoutFooter from "./components/footer.vue";
import menuSub from "./components/menuSub.vue";
import userDrawer from "./components/userDrawer.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    layoutHeader,
    slideMenu,
    layoutFooter,
    userDrawer,
    menuSub,
  },
})
export default class layoutMain extends Vue {
  collapsed = false;
  get themeColorContorl() {
    return this.$route.query.themeColor === "white" ? "light" : "dark";
  }
}
</script>
