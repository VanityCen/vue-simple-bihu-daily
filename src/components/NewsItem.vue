<template>
  <div class="wrap">
    <div class="box">
      <router-link class="link" :to="'/item/' + item.id">
        <img class="image" :src="item.images[0]">
        <span class="title">{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
  import { proxyImage } from '@/utils/filter'
  export default {
    props: {
      item: {
        required: true,
        type: Object
      }
    },
    filters: {
      proxyImage
    }
  }
</script>
<style lang="stylus" scoped>
.wrap
  padding 20px
  margin-bottom 20px
  background-color #fff
.link
  display block
  width 260px
  color #000
  text-decoration none
  .image
    height 260px
    max-width 100%
  .title
    display block
    margin-top 1em
    font-size 16px
    line-height 30px
</style>
