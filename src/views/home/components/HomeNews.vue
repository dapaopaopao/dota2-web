<template>
  <div>
    <my-card title="新闻资讯" icon="cc-menu-circle"></my-card>
    <list-card title="新闻资讯" icon="cc-menu-circle" :categories="newsCats">
      <template #list="{category}">
        <router-link
          :to="`/news/${news._id}`"
          tag="div"
          class="py-2 fs-lg d-flex"
          v-for="(news,index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-ellipsis">{{news.title}}</span>
          <span class="text-grey ml-2 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </list-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'HomeNews',
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      newsCats: []
    }
  },
  methods: {
    async getList() {
      const res = await this.$http.get('/news/list')
      this.newsCats = res.data
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss">
</style>