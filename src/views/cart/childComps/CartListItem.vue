<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton v-bind:is-checked="product.checked" @click.native="checkedClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品789456">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from '../../../components/content/CheckButton/CheckButton'
  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkedClick() {
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  #shop-item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 145px;
    border-bottom: #cccccc 1px solid;
  }
  .item-selector {
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img {
    padding: 7px;
  }

  .item-img img {
    width: 100px;
    height: 120px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info, .item-desc {
    font-size: 14px;
    color: #666666;
    margin-top: 15px;
  }

  .item-info, .item-title {
    font-size: 18px;
  }

  .info-bottom {
    margin-top: 35px;
    /*position: absolute;*/
    /*bottom: 10px;*/
    /*left: 10px;*/
    /*right: 10px;*/
  }

  .info-bottom .item-price {
    color: red;
    font-size: 16px;
  }
  .item-count {
    color: #5ea732;
    font-size: 20px;
  }
</style>