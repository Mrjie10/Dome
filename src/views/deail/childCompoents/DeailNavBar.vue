<template>
  <div class="deail-nav-bar">
    <!--    //导航-->
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" v-bind:key="item.id"
             :class="{active: index === commterindex}"
             class="title-item"
             @click="deailClick(index)">
          {{item.coment}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "DeailNavBar",
    components: {
      NavBar
    },
    data () {
      return {
        titles: [
          {id: 1 , coment: '商品'},
          {id: 2 , coment: '参数'},
          {id: 3 , coment: '评论'},
          {id: 4 , coment: '推荐'},
        ],
        commterindex: 0
      }
    },
    methods: {
      deailClick(index) {
        this.commterindex = index;
        this.$emit('deailClick',index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .deail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
  .title {
    display: flex;
    font-size: 15px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
    text-shadow: lightcoral 0 0 1px;
  }
  .back {
    margin-top: 7px;
  }
  .back img{
    width: 23px;
    /*height: 20px;*/
  }
</style>