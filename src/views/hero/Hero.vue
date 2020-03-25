<template>
  <div>
    <div class="topbar bg-black py-1 px-3 d-flex ai-center jc-between">
      <img src="../../assets/dota2.home.logo.png" height="30" />

      <button type="type" class="btn bg-primary">立即下载</button>
    </div>

    <div class="hero" v-if="hero">
      <div class="hero-header">
        <div class="hero-bg">
          <img :src="hero.bg" class="w-1" />
        </div>
        <div class="hero-detail text-white">
          <div class="pl-3 mb-1">{{hero.title}}</div>
          <div class="pl-3 mb-1 fz-xl">{{hero.name}}</div>
          <div class="pl-3 mb-1">{{hero.categories.map(v=>v.name).join('/')}}</div>
          <div class="hero-scores pl-3 mb-3" v-if="hero.scores">
            <span>难度</span>
            <span class="hero-scores-icon bg-primary mx-2">{{hero.scores.difficult}}</span>
            <span>技能</span>
            <span class="hero-scores-icon bg-blue mx-2">{{hero.scores.skills}}</span>
            <span>生存</span>
            <span class="hero-scores-icon bg-red mx-2">{{hero.scores.survive}}</span>
            <span>攻击</span>
            <span class="hero-scores-icon bg-grey mx-2">{{hero.scores.attack}}</span>
          </div>
        </div>
        <div class="hero-detail-right text-grey">皮肤 &gt;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { requir: true }
  },

  data() {
    return {
      hero: {
        title: '',
        categories: []
      }
    }
  },
  methods: {
    async getHero() {
      const res = await this.$http.get(`/hero/${this.id}`)
      this.hero = res.data
      console.log(this.hero)
    }
  },
  created() {
    this.getHero()
  }
}
</script>

<style lang="scss" scoped>
.hero-header {
  position: relative;
}
.hero-detail {
  position: absolute;
  bottom: 0;
}
.hero-detail-right {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
.hero-bg {
  //背景色渐变
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
.hero-scores-icon {
  //span设置宽高无效
  //inline-block 既可以设置宽高 又可以并排排列
  display: inline-block;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  font-size: 1rem;
}
</style>