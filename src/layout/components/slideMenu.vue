<template>
  <div class="slideMenu">
    {{ name }}
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class slideMenu extends Vue {
  name = "左侧模块";
}
</script>
<style lang="less" modules></style>
