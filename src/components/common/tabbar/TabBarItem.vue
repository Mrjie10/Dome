<template>
    <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
      props:{
        path: String,  //设置动态的路由地址
        activeColor: {
            type: String,
            default: ''
        }
      },
      data(){
        return {
          // isActive: false
        }
      },
      computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !==-1 //按钮的显示隐藏
        },
        activeStyle() {
              return this.isActive ? {color: this.activeColor} :{}  //style样式tabbar文字颜色样式
          }
      },

      methods: {
        itemClick() {
          if (this.$route.path === this.path) return;
          this.$router.push(this.path)//监听点击的是哪一个去的就是哪一个路由组件
        }
      }
  }
</script>

<style scoped="scoped" lang="scss">
    .tab-bar-item {
      flex: 1;
      text-align: center;
      height: 49px;
      /*line-height: 45px;*/
      font-size: 8px;
      img {
        width: 25px;
        height: 24px;
        margin-top: 7px;
        vertical-align: middle;
        margin-bottom: 2px;
      }
    }

</style>