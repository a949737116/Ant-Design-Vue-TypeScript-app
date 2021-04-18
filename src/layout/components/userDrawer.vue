<template>
  <div class="userDrawer" :class="$style.userDrawer">
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <template v-slot:handle>
        <div class="handle" :class="$style.userDrawer__icon">
          <a-icon
            :type="visible ? 'close-square' : 'setting'"
            @click="showDrawer"
          />
        </div>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class userDrawer extends Vue {
  visible = false;

  afterVisibleChange(val: boolean) {
    console.log("visible", val);
  }
  showDrawer() {
    this.visible = true;
  }
  onClose() {
    this.visible = false;
  }
}
</script>
<style lang="less" module>
.userDrawer {
}
.userDrawer__icon {
  font-size: 40px;
  color: #fff;
  background-color: #1890ff;
}
</style>
