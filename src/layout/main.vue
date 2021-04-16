<template>
  <div class="layout-main">
    <!-- 头部模块 -->
    <layoutHeader />
    <!-- 左边栏模块 -->
    <slideMenu />
    <!-- 路由模块 -->
    <router-view></router-view>
    <!-- 足部 -->
    <layoutFooter />
  </div>
</template>
<script lang="ts">
import layoutHeader from "./components/header.vue";
import slideMenu from "./components/slideMenu.vue";
import layoutFooter from "./components/footer.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    layoutHeader,
    slideMenu,
    layoutFooter,
  },
})
export default class layoutMain extends Vue {}
</script>

<style lang="less"></style>
