<template>
  <div>
    <keep-alive  exclude="Deail">
    <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>
<script>
  import MainTabBar from './components/content/maintabbar/MainTabBar'
  export default  {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style lang="scss" >
  @import "./assets/css/base.css";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .7s ease-in-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    /*transition: all 1s ease;*/
   opacity: 0;
  }
</style>
