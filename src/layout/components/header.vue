<template>
  <div class="layoutHeader">
    {{ name }}
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class layoutHeader extends Vue {
  name = "头部模块";
}
</script>
<style lang="less" modules></style>
