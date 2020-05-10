<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#000">
      <img slot="item-icon" src="../../../assets/img/tabbar/shouye.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shouye_1.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#000">
      <img slot="item-icon" src="../../../assets/img/tabbar/shop.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shop_1.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#000">
      <img slot="item-icon" src="../../../assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/cart_1.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#000">
      <img slot="item-icon" src="../../../assets/img/tabbar/wode.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/wode_1.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'   //导入TabBar.vue组件
  import TabBarItem from '../../common/tabbar/TabBarItem'   //TabBarItem.vue组件
  export default {
    name: "MainTabBar",
    components: {
      TabBar,  //导入TabBar.vue组件
      TabBarItem  //TabBarItem.vue组件
    }
  }
</script>

<style scoped>

</style>