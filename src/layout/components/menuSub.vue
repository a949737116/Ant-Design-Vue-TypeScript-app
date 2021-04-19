<template>
  <div>
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.key" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>
<script lang='ts'>
import SubMenu from "./menuSubItem.vue";
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {
    SubMenu
  }
})
export default class menuSub extends Vue{
  collapsed = false;
  menuData;
  list = [
        {
          key: "1",
          title: "Option 1",
        },
        {
          key: "2",
          title: "Navigation 2",
          children: [
            {
              key: "2.1",
              title: "Navigation 3",
              children: [{ key: "2.1.1", title: "Option 2.1.1" }],
            },
          ],
        }
  ];

  created() {
    // 起始路由
    this.menuData = this.routerConfigData(this.$router.options.routes);
  }

  routerConfigData(router) {
    router.forEach(element => {
      if (element.meta.routerEntry) {
       
      }
    });
    return 123
  }

  @Prop({type: String}) theme;

  toggleCollapsed() {
      this.collapsed = !this.collapsed;
  }
};
</script>
