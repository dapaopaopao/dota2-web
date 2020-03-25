<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="../assets/845470019f78af42a9a8808ca8641b5d1566902022.jpg" class="w-1" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/845470019f78af42a9a8808ca8641b5d1566902022.jpg" class="w-1" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/845470019f78af42a9a8808ca8641b5d1566902022.jpg" class="w-1" />
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'swiper-example-pagination',
  title: 'Pagination',

  data() {
    return {
      swiperOption: {
        scrollbar: {
          el: '.swiper-scrollbar',

          hide: true
        },
        loop: true,
        autoplay: {
          delay: 3000 //自动切换的时间间隔，单位ms
        }
      }
    }
  }
}
</script>


<style lang="scss">
</style>