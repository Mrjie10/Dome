<template>
  <div id="deail">
    <!-- 导航栏 -->
    <deail-nav-bar  class="detail-nav" @deailClick="deailClick" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="scrollinfo" :probe-type="3">
      <!-- 轮播图组件 -->
      <deail-swiper :topImages="topImages"></deail-swiper>
      <!-- 基本信息组件 -->
      <deail-base-info :goods="goods"/>
      <!-- 店铺信息 -->
      <deail-shopinfo :shop="shopInfo"/>
      <!-- 商品图片详细信息 -->
      <deail-goods-info :deainfo="deailInfo" @imageLoad="imageLoad"/>
      <!-- 商品参数信息 -->
      <deail-param-info ref="params" :param-info="paramInfo"/>
      <!-- 商品评论信息 -->
      <deail-comment-info ref="comment" :comment="commentInfo"/>
      <!-- 商品推荐信息 -->
      <goods-list ref="recommend" v-bind:goods="recommends"/>
    </scroll>
    <deail-bottm-bar @addToCart="addToCart"/>
    <BackTop @click.native="backClick" v-show="isshowBackTop"/>

<!--      <toast :messag="messag" :show="show"/>-->
<!--    弹出详情-->
<!--    <Sku-->
<!--      v-model="show"-->
<!--      :sku="sku"-->
<!--      :goods="goods1"-->
<!--      @add-cart = 'addToCart($event)'-->
<!--      ref="getInfo"-->
<!--    />-->

  </div>
</template>

<script>
  //弹出详情的 css 样式
  // import 'vant/lib/index.css';
  import DeailNavBar from './childCompoents/DeailNavBar'  //导航组件
  import deailSwiper from './childCompoents/DeailSwiper'  // 图片组件
  import DeailBaseInfo from './childCompoents/DeailBaseInfo' //商品信息组件
  import DeailShopinfo from './childCompoents/DeailShopinfo' //店铺信息组件
  import Scroll from '../../components/common/scroll/Scroll' //bate scroll滑动组件的引用
  import DeailGoodsInfo from './childCompoents/DeailGoodsInfo'// 详情数据组件
  import DeailParamInfo from  './childCompoents/DeailParamInfo'//  参数的信息组件
  import DeailCommentInfo from './childCompoents/DeailCommentInfo' // 商品评论组件
  import GoodsList from '../../components/content/goods/GoodsList' // 商品推荐数据组件
  import DeailBottmBar from './childCompoents/DeailBottmBar'  // bottm 加入购物车的点击组件

  import BackTop from 'components/content/backTop/BackTop'// 点击回到顶部按钮的封装组件

  // import Toast from '../../components/common/toast/Toast'

  import {debounce} from "../../common/utils"; //防抖

  import {getdeail, Goods, Shop, GoodsParam, getRecommend} from "../../network/deail";  //网络请求
  // 弹出详情的按需引入Sku组件
  // import { Sku } from 'vant';

  export default {
    name: "Deail",
    components: {
      DeailNavBar,
      deailSwiper,
      DeailBaseInfo,
      DeailShopinfo,
      DeailCommentInfo,
      Scroll,
      DeailGoodsInfo,
      DeailParamInfo,
      GoodsList,
      DeailBottmBar,
      BackTop,
      // Sku //挂载sku组件
      // Toast
    },
    data () {
      return {
        // show: false,
        // sku: {
        //   // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        //   // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        //   tree: [
        //     {
        //       k: '颜色', // skuKeyName：规格 类目名称
        //       v: [
        //         {
        //           id: '30349', // skuValueId：规格值 id
        //           name: '红色', // skuValueName：规格值名称
        //           imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
        //           previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
        //         },
        //         {
        //           id: '1215',
        //           name: '蓝色',
        //           imgUrl: 'https://img.yzcdn.cn/2.jpg',
        //           previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
        //         },
        //         {
        //           id: '123',
        //           name: '黑色',
        //           imgUrl: 'https://img.yzcdn.cn/2.jpg',
        //           previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
        //         }
        //       ],
        //       k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
        //     }
        //   ],
        //   // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        //   list: [
        //     {
        //       id: 2259, // skuId，下单时后端需要
        //       price: 100, // 价格（单位分）
        //       s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
        //       s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
        //       s3: '0', // 最多包含3个规格值，为0表示不存在该规格
        //       stock_num: 10 // 当前 sku 组合对应的库存
        //     },
        //     {
        //       id: 1, // skuId，下单时后端需要
        //       price: 1000, // 价格（单位分）
        //       s1: '123', // 规格类目 k_s 为 s1 的对应规格值 id
        //       stock_num: 100 // 当前 sku 组合对应的库存
        //     },
        //     {
        //       id: 2, // skuId，下单时后端需要
        //       price: 10000, // 价格（单位分）
        //       s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
        //       stock_num: 1000 // 当前 sku 组合对应的库存
        //     }
        //   ],
        //   price: '99999.00', // 默认价格（单位元）
        //   stock_num: 999, // 商品总库存
        //   collection_id: 0, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        //   none_sku: false, // 是否无规格商品
        //   messages: [
        //     {
        //       // 商品留言
        //       datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
        //       multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
        //       name: '邮箱', // 留言名称
        //       type: 'email', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
        //       required: '0', // 是否必填 '1' 表示必填
        //       placeholder: '请输入邮箱' // 可选值，占位文本
        //     }
        //   ],
        //   hide_stock: false // 是否隐藏剩余库存
        // },
        //
        // goods1: {
        //   // 默认商品 sku 缩略图
        //   picture: 'https://img.yzcdn.cn/1.jpg'
        // },
        iid: null,
        topImages: [],//商品轮播的图片信息
        goods: {}, //保存基本的商品信息对象
        shopInfo: {}, //保存店铺信息对象
        deailInfo: {},  //商品详情信息
        paramInfo: {}, //商品参数信息
        commentInfo:{}, //商品评论信息
        recommends: [], //推荐信息
        themeTopYs: [], //给点击参数文字到哪的存储值地址
        getThemeTopY: null,//给点击参数文字到哪的存储值地址防抖处理处理
        currentIndex: 0,
        isshowBackTop: false
        // messag: null,
        // show:false
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.id;

      // 2.根据iid请求详情数据
      getdeail(this.iid).then(res => {
        // 1.获取顶部的图片轮播数据
        const data = res.result;
        //处理数据， sku组件
        // let resData = JSON.parse(JSON.stringify(data.itemParams.info.set))
        // console.log(resData);
        // this.sku.tree = []
        // this.sku.list = []
        // let id = 0
        // for (let i = 0; i < resData.length; i++) {
        //   let info = resData[i].value.split(',')
        //   let v = []
        //   for (let j in info) {
        //     id += 1
        //     v.push({
        //       id: id,
        //       name: info[j]
        //     })
        //     this.sku.list.push({
        //       id: j,// 自生id
        //       price: 100, //价格
        //       s1: id, //对应上面v的id
        //       stock_num: 50 //库存
        //     })
        //
        //     console.log(id)
        //   }
        //   this.sku.tree.push(
        //     {
        //       k: resData[i].key,
        //       v,
        //       k_s: 's1'
        //     }
        //   )
        //   // this.sku.list.push(list.flat())
        // }
        // console.log(this.sku, );

        // this.sku.tree[0].v = data.itemParams.info.set
        //取出轮播图的数据
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息的对象
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        // 3.取出店铺的信息
        this.shopInfo = new Shop(data.shopInfo);

        // 4. 保存商品的详情数据
        this.deailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        // 6.取出商品的评论信息
        if(data.rate.cRate !==0 ){   //因为有的商品没有评论信息，所以这里要做一个判断
          this.commentInfo = data.rate.list[0];
        }
      })
      //  3. 请求推荐数据
      getRecommend().then(res => {
        res.data;
        this.recommends = res.data.list
      })
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 40)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 40)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 40)
        // console.log(this.$refs.params.$el.offsetTop-44);
        // this.themeTopYs.push(Number.MAX_VALUE)
        // console.log(this.themeTopYs);
      },100)
    },
    methods: {
      imageLoad(){
        const refresh = debounce(this.$refs.scroll.refresha, 100)
        refresh()
        //给点击参数文字到哪的存储值地址逻辑处理
        this.getThemeTopY()
      },
      deailClick(index) {
        // console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
      },
      scrollinfo(position) {
        // console.log(position);
        // 0, 24703, 25474, 25688, __ob__: Observer]
        const positionY = -position.y

        let length = this.themeTopYs.length

        for(let i = 0; i < length; i++) {
          if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY <
            this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
            // console.log(i);
            this.currentIndex = i;
            // console.log(this.currentIndex+ '123');
            this.$refs.nav.commterindex = this.currentIndex
          }
        }
        // 3. 是否显示回到顶部
        this.isshowBackTop = (-position.y) > 1000
      },
      backClick() { // 点击回到顶部
        this.$refs.scroll.scrollTo(0, 0);
      },
      addToCart() { // 点击加入购物车
         // 1. 获取购物车需要展示的信息
        // this.show = true
        // console.log(e)
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        // 2. 将商品添加到购物车
        // this.$store.cartList.push(product)
        console.log(product);
        this.$store.dispatch('addaCart', product).then(res => {
          console.log(res)
          // this.show = true
          // this.messag = res
          // setTimeout(()=> {
          //   this.show = false
          // }, 500)
          this.$toast.show(res, 1100)
        }).catch(err => {
          console.log(err);
        })
      }

    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresha, 50)

      this.$bus.$on('deailitemImageLoad',() => {
        // this.$refs.scroll.refresha()
        refresh()
      })

    }
  }
</script>

<style scoped="scoped" lang="scss">
  #deail {
    position: relative;
    z-index: 1;
    background-color: #ffffff;
    height: 100vh;
  }
  .content {
    /*overflow: hidden;*/
    height: calc(100% - 44px - 49px);
  }

</style>