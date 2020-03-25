<template>
  <div>
    <div class="topbar bg-black py-1 px-3 d-flex ai-center jc-between">
      <img src="../../assets/dota2.home.logo.png" height="30" />

      <button type="type" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav jc-around">
        <div class="nav-item-white active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item-white">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item-white">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <Swiper></Swiper>
    <Nav></Nav>
    <News></News>
    <Hero></Hero>
  </div>
</template>

<script>
import Swiper from '../../components/Swiper'
import Nav from '../home/components/HomeNav'
import News from '../home/components/HomeNews'
import Hero from '../home/components/HomeHero'
export default {
  components: {
    Swiper,
    Nav,
    News,
    Hero
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" >
//一直在顶上 吸顶   兼容性差    另一种方法是position:fixed
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>