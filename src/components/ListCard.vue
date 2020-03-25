<template>
  <div>
    <div class="card mt-3 bg-white p-3">
      <div class="card-header d-flex pb-3">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="al-center flex-1 px-2 fz-xl">{{title}}</div>
        <i class="iconfont icon-more"></i>
      </div>
      <div class="card-body pt-3">
        <div class="nav jc-between">
          <div
            class="nav-item"
            :class="{active:active===index}"
            @click="$refs.list.$swiper.slideTo(index)"
            v-for="(item,index) in categories"
            :key="index"
          >{{item.name}}</div>
        </div>

        <div class="mt-3" touch-action: none>
          <!-- 相当于把这个swiper放到名字叫list的引用里面去  然后通过$refs.list就可以调用 -->
          <!-- 自动调整轮播组件高度 -->
          <swiper
            ref="list"
            :options="{autoHeight:true}"
            @slide-change="()=>active=$refs.list.$swiper.realIndex"
          >
            <swiper-slide v-for="(item,index) in categories" :key="index">
              <!-- <div class="py-2" v-for="(list,index) in item.list" :key="index">
                <span>[{{list.title}}]</span>
                <span>|</span>
                <span>{{list.content}}</span>
              </div>-->
              <slot name="list" :category="item"></slot>
            </swiper-slide>
          </swiper>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
@import '../../src/assets/sass/variable.scss';
.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>