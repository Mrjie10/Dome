<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //2.监听滚动的位置
      // this.scroll.scrollTo(0, 0,400)  //回到顶部的基本使用
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll',(position) => {
          // console.log(position);
          this.$emit('scroll', position)
        })
      }
      //3.监听上拉加载更多事件  ..监听scroll滚到底部
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      //回到顶部的方法封装
      scrollTo(x ,y, time=500){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      //再次请求加载更多的封装方法
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresha() {
        // console.log('--------');
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>