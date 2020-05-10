<template>
  <div class="HomeRecommendView">
    <div v-for="item in recommends" :key="item.image" class="HomeRecommendView-item">
      <a :href="item.link">
      <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .HomeRecommendView {
    display: flex;
    text-align: center;
    font-size: 14px;
    .HomeRecommendView-item{
      flex: 1;
      padding: 10px 0 20px;
      border-bottom: #eee 10px solid;
    }
    .HomeRecommendView-item img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
</style>