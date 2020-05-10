<template>
  <div class="categoryItem">
<!--    {{categoryList}}-->
   <div class="nav-title">
       <div v-for="(item, index) in categoryList" v-bind:key="item.id" :class="{active : cunrtenindex === index }"
            @click="indexClick(index,item)">{{item.title}}</div>
     </div>

    <div class="content">
      <div v-for="(item, index) in cateContentList" :key="index">
<!--              {{incategoryListitem}}-->
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getSubCategory} from "../../../network/category";

  export default {
    name: "CategoryItem",
    props: {
      categoryList: {
        type: Array,
      }
    },
    data() {
      return {
        cunrtenindex: 0,
        maitkey:3627,
        cateContentList: []
      }
    },
    methods: {
      indexClick(index, item) {
        console.log(item);
        this.cunrtenindex = index;
        this.maitkey = item.maitKey
        console.log(this.maitkey)

        getSubCategory(this.maitkey).then(res => {
          console.log(res)
          this.cateContentList = res.data.list;
        })
      }
    },
    created() {
      getSubCategory(this.maitkey).then(res => {
        console.log(res)
        this.cateContentList = res.data.list;
      })
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .categoryItem {
    margin-top: 44px;
    margin-bottom: 49px;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    .nav-title {
      height: 100%;
      overflow-y: auto;
      float: left;
      width: 30%;
      background-color: #F7F7F7;
      text-align: center;
       div {
         line-height: 48px;
         font-size: 17px;
         font-weight: 500;

       }
       .active {
         border-left: lightsteelblue 2px solid;
         background-color: white;
     }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 7px;
    float: left;
    overflow: auto;
    height: 100%;
    width: 70%;
    div {
      img {
        width: 100px;
        height: 100px;
      }
      p {
        font-size: 12px;
        text-align: center;
      }
    }
  }

</style>