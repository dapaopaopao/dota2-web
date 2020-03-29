<template>
  <div>
    <div class="card mt-3 bg-white p-3">
      <div class="card-header d-flex pb-3">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="al-center flex-1 px-2 fz-xl">{{title}}</div>
        <i class="iconfont icon-more"></i>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../../src/assets/sass/variable.scss';

.card-header {
  border-bottom: 1px solid $border-color;
}
</style>