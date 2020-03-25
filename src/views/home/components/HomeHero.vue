<template>
  <div>
    <list-card title="英雄列表" icon="fenlei.dota" :categories="HeroList">
      <template #list="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <router-link
            tag="div"
            :to="`/hero/${hero._id}`"
            class="p-2 text-center"
            style="width:20%"
            v-for="(hero,index) in category.heroList"
            :key="index"
          >
            <img :src="hero.avatar" class="w-1" alt />
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </list-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'HomeNews',
  filters: {
    data(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      HeroList: []
    }
  },
  methods: {
    async getHeroList() {
      const res = await this.$http.get('/hero/list')
      this.HeroList = res.data
    }
  },
  created() {
    this.getHeroList()
  }
}
</script>

<style lang="scss">
</style>