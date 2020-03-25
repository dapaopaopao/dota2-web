<template>
  <div>
    <!-- flex布局后所有内容都挤在一行 设置flex-wrap：wrap之后会换行 -->
    <div class="nav-icon bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-icon-item mb-3" v-for="item in 10" :key="item">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light fs-sm py-2">
        <i class="sprite sprite-arrow mr-2"></i>
        <span>收起</span>
        <!-- 因为是字体图标 所以可以当成字体来对待 通过css改颜色大小什么的 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNav'
}
</script>

<style lang="scss">
@import '../../../assets/sass/variable.scss';
.nav-icon {
  .nav-icon-item {
    width: 25%;
    border-left: 1px solid $border-color;
    //css3 第几个子元素 n从0开始
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>