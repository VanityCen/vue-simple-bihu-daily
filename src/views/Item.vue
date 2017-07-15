<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="logo">
          <img src="../assets/web_article_top.png">
          <span>读读日报</span>
        </div>
        <a class="download">下载读读日报</a>
      </div>
    </header>
    <div class="main">
      <div class="img-wrap" :style="{'background-image':bgImage}">
        <div class="title">{{detail.title}}</div>
        <span class="source">图片来源：{{detail.image_source}}</span>
        <div class="mask"></div>
      </div>
      <article class="article" v-html="content"></article>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      id () {
        return this.$route.params.id
      },
      detail () {
        return this.$store.state.detail
      },
      content () {
        return this.detail.body
      },
      bgImage () {
        return `url(${this.detail.image})`
      }
    },
    beforeMount () {
      this.getNewsDetail()
    },
    methods: {
      getNewsDetail () {
        this.$store.dispatch('GET_NEWS_DETAIL', {id: this.id})
      }
    }
  }
</script>
<style lang="stylus" scoped>
center()
  width 600px
  margin 0 auto
  box-sizing border-box
.header
  height 90px
  box-shadow 0 0 3px 0 rgba(0, 0, 0, 0.07)
  background #fff
.container
  center()
  height 100%
  display flex
  justify-content space-between
  align-items center
  .logo
    display flex
    align-items center
    span
      font-size 26px
      font-weight bold
      color #0090d0
      text-indent 15px
  .download
    border 1px solid #00a2e0
    border-radius 5px
    font-size 16px
    color #00a2e0
    padding 10px
.main
  center()
  margin-top 30px
  .img-wrap
    height 375px
    position relative
    .mask
      position absolute
      top 0 
      left 0 
      width 100%
      height 100%
      background linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5) )
      z-index 0
    .title
      position absolute
      bottom 30px 
      padding 0 40px
      font-size 30px
      font-weight bold 
      line-height 1.2em
      color #fff
      z-index 3
    .source
      position absolute
      bottom 0 
      right 30px
      font-size 12px
      color rgba(255,255,255,0.6)
      z-index 2
</style>
