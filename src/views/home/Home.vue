<template>
  <div id="home"  class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物商场</div></nav-bar>
    <tab-control :titles="['流行','精选','新款']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control" v-show="isTabFixed"/>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="conentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view v-bind:recommends="recommends"/>
      <home-feature></home-feature>
      <tab-control :titles="['流行','精选','新款']" @tabClick="tabClick" ref="tabControl2"/>
      <good-list :goods="showGoods"/>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isshowBackTop"/>
  </div>
</template>

<script>
  import {
    getHomeMultidata,
    getHomeGoods
  } from "../../network/home";  //封装的请求模块

  import {debounce} from "common/utils";  //引入防抖

  //home组件子组件的引用
  import NavBar from '@/components/common/navbar/NavBar';//头部子组件
  import HomeSwiper from './chindComps/HomeSwiper'  //  轮播图子组件
  import HomeRecommendView from './chindComps/HomeRecommendView' //中间的4张图自组件组件
  import HomeFeature from './chindComps/HomeFeature'

  import TabControl from 'components/content/tabControl/TabControl'//悬停吸顶（流行，精选，新款）组件的引用
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from '../../components/common/scroll/Scroll' //封装好的滑屏适配

  import BackTop from 'components/content/backTop/BackTop'// 点击回到顶部按钮的封装组件



  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        cuurentType: 'pop',
        isshowBackTop: false,
        taboffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    activated() {
      // console.log('home end 设置位置');
      this.$refs.scroll.scrollTo(0,this.saveY)
      this.$refs.scroll.refresha()
    },
    deactivated() {
      // console.log('home 记录位置');
      this.saveY = this.$refs.scroll.getScrollY()
      console.log(this.saveY);
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();//请求数据进行封装

      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    computed: {
      showGoods() {
        return this.goods[this.cuurentType].list
      }
    },
    mounted() {
      // 1. 图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.refresha, 50) //防抖
      //3.监听item中图片加载更多
      this.$bus.$on('itemImageLoad', () => {
        refresh()
        // this.$refs.scroll.refresha()
        // console.log('----------');
        // this.$refs.scroll.scroll.refresh()
      })
      // 2. 获取tabControl的offsetTop
    },
    methods: {
      /**
       * 事件相关的方法
       */
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.cuurentType = 'pop'
            break;
          case 1:
            this.cuurentType = 'new'
            break;
          case 2:
            this.cuurentType = 'sell'
            break;
        }
        this.$refs.tabControl1.current = index
        this.$refs.tabControl2.current = index
      },
      backClick() {  //点击按钮回到顶部
        this.$refs.scroll.scrollTo(0, 0);
      },
      conentScroll(position) {  //按钮到1000时显示
        // console.log(position);
        // 1. 判断BackTop是否显示
        this.isshowBackTop = (-position.y) > 1000

        // 2.决定tabControl是否吸顶（position：fixded）
        this.isTabFixed = (-position.y) > this.taboffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.cuurentType)
        // this.$refs.scroll.scroll.refresh()
      },
      swiperImageLoad() {
        this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       *网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // this.goods[type].list.push(...res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background: lightsteelblue;
    color: white;

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .content {
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>