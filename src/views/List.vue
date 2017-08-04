<template>
  <section class="wrapper">
    <header class="header">
      <div class="inner">
        <router-link to="/"><img class="logo" src="../assets/top_logo.png" alt="logo"></router-link>
        <div class="menu">
          <a class="download" href="">App&nbsp;下载</a>
          <a class="link">浏览内容</a>
        </div>
      </div>
    </header>
    <div class="container"> 
      <div class="section-head">
        <div class="title">浏览内容</div>
        <div class="sub-title">最新内容</div>
      </div>
      <div class="items">
        <news-item v-for="item in latestNews" :item="item" :key="item.id"></news-item>
      </div>
    </div>
  </section>
</template>
<script>
  import NewsItem from '@/components/NewsItem'
  export default {
    name: 'List',
    data () {
      return {
        latestNews: []
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList: async function () {
        await this.$store.dispatch('GET_LATEST_NEWS')
        this.latestNews = this.$store.state.latestNews
      }
    },
    components: {
      NewsItem
    }
  }
</script>
<style lang="stylus" scoped>
.header
  position fix
  top 0
  height 78px
  background-color #fff
  .inner
    width 960px
    height 100%
    margin 0 auto
    display flex
    align-items center
    justify-content space-between
    .menu
      width 280px
      display flex
      justify-content space-around
      text-align center
      a
        display block
        width 120px
        padding 8px 0
      .download
        background-color #f0f9ff
        color #008bed
        border-radius 3px
.container
  width 960px
  margin 0 auto
.section-head
  display flex
  justify-content space-between
  padding 44px 0
  font-size 25px
  .sub-title
    color #ccc
.items
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items flex-start
</style>
