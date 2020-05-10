<template>
  <div class="cart">
    <!--导航栏-->
    <nav-bar class="center">
      <div class="centert" slot="center">购物车{{cartLengh}}</div>
    </nav-bar>
    <!--商品列表-->
    <cart-list/>

    <cart-bottom-bar/>
    <!--底部的汇总-->

  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar' //导航组件
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import { mapGetters } from 'vuex'
  export default {
    name: "Cart",
    data() {
      return {

      }
    },
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLengh'])
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .cart {
    height: 100vh;
  }
  .center {
    background-color: lightsteelblue;
    .centert {
      color: white;
    }
  }
</style>