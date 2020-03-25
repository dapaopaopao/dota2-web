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

    <div class="news" v-if="news">
      <div class="news-header border-bottom d-flex py-3 px-2">
        <div>
          <i class="iconfont icon-jiantouzuo mr-2"></i>
        </div>
        <div class="flex-1">{{news.title}}</div>
        <div>{{news.createdAt | date}}</div>
      </div>
      <!-- 富文本编辑器传上来的是html文件 所以要这样显示 -->
      <div class="news-body" v-html="news.body"></div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    id: { requir: true }
  },
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      news: ''
    }
  },
  methods: {
    async getnews() {
      const res = await this.$http.get(`/news/${this.id}`)
      this.news = res.data
      console.log(this.news)
    }
  },
  created() {
    this.getnews()
  }
}
</script>

<style lang="scss" >
@import '../../assets/sass/variable.scss';
.news {
  .news-body {
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>