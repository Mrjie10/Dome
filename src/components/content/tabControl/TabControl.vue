<template>
  <div class="tab-caontrol">
    <div v-for="(item, index) in titles"
         :key="item" class="tab-caontrol-item" v-bind:class="{active: index === current}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        current:0
      }
    },
    methods: {
      itemClick(index){
        this.current = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .tab-caontrol {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    /*opacity: 0.5;*/
    z-index: 1;

    .tab-caontrol-item {
      flex: 1;
    }
    .tab-caontrol-item>span {
      padding: 5px;
    }

    .active>span {
      color: lightsteelblue;
      border-bottom: 3px solid lightsteelblue;
    }
  }
</style>