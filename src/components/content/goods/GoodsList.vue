<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.lid" :goodsItem="item"/>
<!--    {{goods}}-->
  </div>

</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props:{
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 10px;
  }
</style>