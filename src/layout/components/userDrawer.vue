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
        <div
          class="handle"
          :class="$style.userDrawer__icon"
          @click="visible = !visible"
        >
          <a-icon theme="filled" :type="visible ? 'close-square' : 'setting'" />
        </div>
      </template>
      <!-- 选择器 -->
      <h2>整体风格定制</h2>
      <div>
        <a-radio-group
          name="themeRadio"
          @change="
            (e) => {
              optionChangeContorl('themeColor', e.target.value);
            }
          "
          :value="$route.query.themeColor || 'white'"
        >
          <a-radio value="black"> 黑色 </a-radio>
          <a-radio value="white"> 白色 </a-radio>
        </a-radio-group>
      </div>
      <h2 style="margin-top: 10px">导航模式</h2>
      <div>
        <a-radio-group
          name="positionRadio"
          @change="
            (e) => {
              optionChangeContorl('guidePosition', e.target.value);
            }
          "
          :value="$route.query.guidePosition || 'left'"
        >
          <a-radio value="left"> 左侧 </a-radio>
          <a-radio value="top"> 顶部 </a-radio>
        </a-radio-group>
      </div>
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
  onClose() {
    this.visible = false;
  }
  optionChangeContorl(type: string, value: string) {
    // 动态修改页面query值
    this.$router.push({ query: { ...this.$route.query, [type]: value } });
  }
}
</script>
<style lang="less" module>
.userDrawer {
}
.userDrawer__icon {
  font-size: 23px;
  color: #fff;
  background-color: #1890ff;
  position: absolute;
  top: 240px;
  right: 300px;
  width: 40px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
</style>
