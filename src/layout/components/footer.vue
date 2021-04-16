<template>
  <div class="layoutFooter">
    {{ name }}
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class layoutFooter extends Vue {
  name = "脚部";
}
</script>
<style lang="less" modules></style>
