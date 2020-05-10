<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped="scoped" lang="scss">
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    box-shadow: 0 0 10px #cccccc;
    text-align: center;

    .left, .right {
      width: 60px;
    }
    .center{
      flex: 1;
    }
  }
</style>