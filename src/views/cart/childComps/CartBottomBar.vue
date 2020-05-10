<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton :is-checked="isSelectAll" class="check-bottom" @click.native="checkClick"/>  <!-- 全选按钮 一开始为false-->
      <span >全选</span>
    </div>
    <div class="check-price">
      合计:{{totalPrice.number}}
    </div>
    <div class="calculaet" @click="calculaetClick">
      去计算：{{totalPrice.checkLength}}
    </div>

  </div>
</template>

<script>
  import CheckButton from '../../../components/content/CheckButton/CheckButton'
  export default {
    name: "CartBottomBar",
    data() {
      return {
        list: null
      }
    },
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        // return '￥' + this.$store.state.cartList.filter(item => {
        //   return item.checked
        // }).reduce((preValue, item) => {
        //   return preValue + item.price * item.count   //计算价格 ，选中状态的商品成以衣数量
        // }, 0).toFixed(2)
        let number = 0, checkLength = 0
        //遍历所有数组
        for (let i = 0; i < this.$store.state.cartList.length; i++) {
          // 取出复选框选中的数据
          if(this.$store.state.cartList[i].checked) {
            //进行数值累加， 相乘数量
            number += isNaN(parseFloat(this.$store.state.cartList[i].price)) ? 0 : parseFloat(this.$store.state.cartList[i].price) * this.$store.state.cartList[i].count
            //三元运算符相当于if的简写
            // if (isNaN(parseFloat(this.$store.state.cartList[i].price))) {
            //   number+= 0
            // }else {
            //   parseFloat(this.$store.state.cartList[i].price) * this.$store.state.cartList[i].count
            // }
            // 长度相加
            checkLength += 1
          }
        }
        let obj = {
          number : '￥' + number.toFixed(2),
          checkLength
      }
        //返回最终结果
        return obj
      },
      // checkLength() {
      //   return this.$store.state.cartList.filter(item => item.checked).length  //去计算的实现 也就是当前选择数量的长度
      // },
      isSelectAll() {
        if (this.$store.state.cartList.length === 0) return false;  //将全选按钮默认改成 不选中的
        // return !(this.$store.state.cartList.filter(item => !item.checked).length) // 方法一   //取反数组，一开始数组没有长度为false 取反为true了就乐意实现 全选全不选
        //方法二
        // return !this.$store.state.cartList.find(item => !item.checked)  //取反把数据为false 全部全部选中为true才打印数组长度 才全选

        //方法三 循环的方法   //只要有一个不选中 全选 按钮就是不选中
            for (let item of this.$store.state.cartList) {  //只要数组里一个checkd为false 就为的不选中的 ，全部选中为true 就是全选
              if (!item.checked) {
                return false
          }
        }
        return true
      }
    },
    methods: {
      //点击全选按钮 ，
      checkClick() {
        if (this.isSelectAll) {  //默认是全部选择中的
          //点击将checked设置为全部不选中
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          //点击将checked设置为全部选中
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      calculaetClick() {
        if (!this.isSelectAll) {
          this.$toast.show('请选中购买的商品', 2000)
          // console.log('231');
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .bottom-bar {
    font-size: 15px;
    display: flex;
    height: 40px;
    background-color: lightslategray;
    position: relative;
    line-height: 40px;
  }
  .check-content {
    /*width: 70px;*/
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-content span {
    margin-left: 7px;
    color: white;
  }
  .check-bottom {
    width: 22px;
    height: 22px;
    line-height: 17px;
  }
  .check-price {
    margin-left: 25px;
    color: white;
    flex: 1;
  }
  .calculaet {
    /*background-color: white;*/
    margin-left: 40px;
    color: white;
    background-color: red;
    width: 80px;
    text-align: center;
  }
</style>