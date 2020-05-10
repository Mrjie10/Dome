<template>
  <div class="chekbutton" :class="{check: isChecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .chekbutton {
    border-radius: 50%;
    padding: 1px 2.5px;
    border: 1px solid #cccccc;
    position: relative;
    left: 2px;
  }
  .chekbutton img {
    width: 15px;
    height: 10px;
  }
  .check {
    background-color: orangered;
    border-color: orangered;
  }
</style>