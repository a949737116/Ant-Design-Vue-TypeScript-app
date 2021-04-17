<template>
  <a-layout style="min-height: 100vh" :class="$style.mainLayout">
    <a-layout-sider v-model="collapsed" collapsible :trigger="null">
      <div class="logo" :class="$style.logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3"> Tom </a-menu-item>
          <a-menu-item key="4"> Bill </a-menu-item>
          <a-menu-item key="5"> Alex </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6"> Team 1 </a-menu-item>
          <a-menu-item key="8"> Team 2 </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
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
import userDrawer from "./components/userDrawer.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    layoutHeader,
    slideMenu,
    layoutFooter,
    userDrawer,
  },
})
export default class layoutMain extends Vue {
  collapsed = false;
}
</script>
