<template>
  <div v-if="Object.keys(deainfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{deainfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{deainfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in deainfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DeailGoodsInfo",
    props: {
      deainfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imgLoad() {
          this.$emit('imageLoad');
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #eeeeee;
  }
  .info-desc {
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    right: 0;
  }
  .info-key {
    margin: 10px 0px 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
</style>