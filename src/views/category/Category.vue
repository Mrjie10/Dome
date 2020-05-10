<template>
  <div class="category">
    <nav-bar class="center"><div slot="center">商品分类</div></nav-bar>
      <category-item :category-list="categoryList"/>
  </div>
</template>

<script>
  // import Bscroll from 'better-scroll'

  //网络请求js模块
  import {getCategory} from "../../network/category";

  import NavBar from '../../components/common/navbar/NavBar'
  import CategoryItem from './childComps/CategoryItem'


  export default {
    name: "Category",
    components: {
      NavBar,
      CategoryItem
    },
    data() {
      return {
        // scroll: null
        categoryList: []
      }
    },
    created() {
      // this.scroll = new Bscroll(document.querySelector('.wrapper'),{
      //
      // })
      getCategory().then(res => {
        // console.log(res.data.category)
        let list =  res.data.category.list
        list.map((item, index) => {
          item.id = index
        })
        console.log(list);
        this.categoryList = list
      })

    },
    mounted() {
      // this.scroll = new Bscroll(document.querySelector('.wrapper'),{
      //   probeType: 3,
      //   pullUpLoad: true
      // })
      // this.scroll.on('scroll',(position)=>{
      //   console.log(position);
      // })
      // this.scroll.on('pullingUp', () => {
      //   console.log('上拉加载更多');
      // })
    }
  }
</script>

<style scoped="scoped" lang="scss">
  /*.wrapper {*/
  /*  height: 200px;*/
  /*  background-color: rebeccapurple;*/
  /*  overflow: hidden;*/
  /*  !*overflow-y: scroll;*!*/
  /*}*/
  .category {
  }
  .center {
    background-color: lightblue;
    color: white;
  }
</style>