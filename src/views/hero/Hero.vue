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
          <h3 class="pl-3 mb-1 mt-2 fz-xl">{{hero.name}}</h3>
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
      <div class="hero-body">
        <div class="bg-white px-3">
          <div class="nav fz-xl jc-around pt-3 pb-2 border-bottom">
            <div
              class="nav-item"
              :class="{active:currentSwiperPage===0}"
              @click="$refs.swipers.$swiper.slideTo(0)"
            >
              <div>英雄知识</div>
            </div>
            <div
              class="nav-item"
              @click="$refs.swipers.$swiper.slideTo(1)"
              :class="{active:currentSwiperPage===1}"
            >
              <div>进阶攻略</div>
            </div>
          </div>
        </div>

        <swiper
          class="swiper"
          ref="swipers"
          @slide-change="currentSwiperPage=$refs.swipers.$swiper.realIndex"
        >
          <swiper-slide>
            <div>
              <div class="bg-white">
                <div class="d-flex jc-around pt-2">
                  <router-link :to="`${$route.path}`" tag="button" class="btn btn-big mx-2 flex-1">
                    <i class="iconfont icon-fenlei-dota text-primary"></i>
                    <span>英雄介绍视频</span>
                  </router-link>
                  <router-link :to="`${$route.path}`" tag="button" class="btn btn-big mx-2 flex-1">
                    <i class="iconfont icon-fenlei-dota text-primary"></i>
                    <span>一图识英雄</span>
                  </router-link>
                </div>
                <!-- 技能图标 -->
                <div>
                  <div class="d-flex jc-around mt-4 px-2">
                    <img
                      :src="`${skill.icon}`"
                      class="hero-skills-icon"
                      :class="{active:currentSkillIndex===skillIndex}"
                      @click="currentSkillIndex=skillIndex"
                      v-for="(skill,skillIndex) in hero.skills"
                      :key="skillIndex"
                    />
                  </div>
                </div>
                <!-- 技能详情 -->
                <div v-if="currentSkill" class="mt-4 mx-4">
                  <h3 class="fz-xl">{{currentSkill.name}}</h3>
                  <p class="mt-4">{{currentSkill.description}}</p>
                  <div class="border-bottom"></div>
                  <div class="py-2">小提示:{{currentSkill.tips}}</div>
                </div>
              </div>
              <my-card icon="fenlei-dota" title="出装建议">
                <div class="py-2 fz-xl">顺风出装</div>
                <div class="d-flex jc-around pb-2 border-bottom">
                  <div v-for="(item,index) in hero.item1" :key="index">
                    <img :src="item.icon" class="hero-item-icon" />
                    <div class="text-center">{{item.name}}</div>
                  </div>
                </div>
                <div class="py-2 fz-xl">逆风出装</div>
                <div class="d-flex jc-around">
                  <div v-for="(item,index) in hero.item2" :key="index">
                    <img :src="item.icon" class="hero-item-icon" />
                    <div class="text-center">{{item.name}}</div>
                  </div>
                </div>
              </my-card>
              <my-card icon="fenlei-dota" title="团战技巧">
                <p>{{hero.teamTips}}</p>
              </my-card>
              <my-card icon="fenlei-dota" title="使用技巧">
                <p>{{hero.usageTips}}</p>
              </my-card>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>456</div>
          </swiper-slide>
        </swiper>
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
        categories: [],
        skills: [],
        item: []
      },
      currentSkillIndex: 0,
      currentSwiperPage: 0
    }
  },
  computed: {
    //当前的技能
    currentSkill() {
      return this.hero.skills[this.currentSkillIndex]
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
@import '../../assets/sass/variable.scss';
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

.hero-skills-icon {
  width: 80px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid transparent;
  &.active {
    border: 3px solid map-get($colors, 'primary');
  }
}

.hero-item-icon {
  width: 50px;
  height: 45px;
  border-radius: 50%;
}
</style>