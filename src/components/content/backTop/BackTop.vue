<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
  }
  .back-top img {
    width: 43px;
    height: 43px;
    opacity: 0.6;
  }
</style>