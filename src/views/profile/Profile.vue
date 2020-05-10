<template>
  <div class="profile">
    <nav-bar class="centet">
      <div slot="center">我的信息</div>
    </nav-bar>
    <div class="profile-content">
        <img src="../../assets/img/profile/avatar.svg" alt="">
        <div class="profile-text">
          <p class="login">登录/注册</p>
          <p class="login">暂无绑定的手机号</p>
        </div>
        <div>
         <b>〉</b>
        </div>
    </div>

    <div class="profile-info">
      <div>
        <p><span>0.00</span>&nbsp;元</p>
        <p>我的余额</p>
      </div>
      <div class="center">
        <p><span>0</span>&nbsp;个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span>0</span>&nbsp;分</p>
        <p>我的积分</p>
      </div>
    </div>

    <div class="news">
      <div>
        <img src="../../assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div class="shop">
        <img src="../../assets/img/profile/pointer.svg" alt="">
        <p>我的商城</p>
      </div>
      <div>
        <img src="../../assets/img/profile/vip.svg" alt="">
        <p>会员卡</p>
      </div>
    </div>
    <div class="cart">
      <div>
        <img src="../../assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div>
        <img src="../../assets/img/profile/shopping.svg" alt="">
        <p class="app">下载购物APP</p>
      </div>
    </div>

  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  export default {
    name: "Profile",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .centet {
    background-color: lightblue;
    color: white;
  }
  .profile-content {
    font-size: 16px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: lightblue;
  }
  .profile-content>img {
    width: 100px;
    height: 100px;
  }
  .profile-content>div>b {
    font-size: 22px;
  }
  .profile-text {
    margin-left: -80px;
  }
  .profile-info {
    text-align: center;
    display: flex;
    height: 100px;
    font-size: 18px;
    border-bottom: 5px solid #eeeeee;
    /*background-color: red;*/
    justify-content: center;
    align-items: center;
  }
  .profile-info .center {
    border-left: lightblue 1px solid;
    border-right: lightblue 1px solid;
  }
  .profile-info>div {
    font-size: 15px;
    /*line-height: 35px;*/
    flex: 1;

  }
  .profile-info>div>p>span {
    color: red;
    font-weight: bold;
  }
  .news {
    display: flex;
    flex-direction: column;
    height: 160px;
    padding: 0 15px;
    border-bottom: 5px solid #eeeeee;
  }
  .shop>p {
    display: flex;
    align-items: center;
    width: calc(100% - 22px);
    height: 100%;
  }
  .news>div{
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .news>div>img {
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
  .cart {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    height: 120px;
  }
  .cart>div {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .cart>div>img {
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
  .app {
    display: flex;
    align-items: center;
    height: 100%;
    width: calc(100% - 35px);
    border-top: 1px solid #f2f2f2;
  }
</style>