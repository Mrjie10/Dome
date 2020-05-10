<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DeailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .base-info {
    margin-top: 13px;
    padding: 0 9px;
    color: #000000;
    font-weight: 500;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #333333;
  }
  .info-price{
    margin-top: 15px;
  }
  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-left: 15px;
    text-decoration: line-through;
  }
  .info-price .discount{
    font-size: 12px;
    background-color: #ff8198;
    padding: 2px 5px;
    color: #ffffff;
    border-radius: 8px;
    margin-left: 10px;
    position: relative;
    top: -7px;
  }
  .info-other {
    display: flex;
    margin-top: 15px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    font-size: 14px;
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .info-service-item span {
    color: #333333;
    font-size: 13px;
  }
</style>
