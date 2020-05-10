<template>
  <div class="comment_info" v-if="Object.keys(comment).length !==0 ">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="head-moer">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="user">
      <img :src="comment.user.avatar" />
      <div class="name">{{comment.user.uname}}</div>
    </div>
    <div class="comment">
      <p>{{comment.content}}</p>
      <div class="center">
        <span class="data">{{comment.created | showDate}}</span>
        <span>{{comment.style}}</span>
      </div>
      <div class="img">
        <img :src="item" v-for="(item,index) in comment.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {dateFormat} from "../../../common/const"

  export default {
    name: "DeailCommentInfo",
    props: {
      comment: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        // //1、将服务器返回过来的时间戳转化为Date对象
        let date = new Date(value*1000) //因为服务器返回的时间是秒，所以要乘以1000;
        //2、将date进行时间格式化
        return dateFormat("yyyy-MM-dd hh:mm:ss", date)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .header-title {
    float: left;
    font-size: 15px;
    margin-left: 15px;
  }
  .head-moer {
    float: right;
    margin-right: 15px;
    font-size: 13px;
  }
  .comment_info {
    margin-top: 10px;
    border-top: 1.5px solid #eeeeee;
    border-bottom: 3px solid #eee;
    /*height: 330px;*/
    .user {
      display: flex;
      align-items: center;
      margin-left: 15px;
      img {
        width: 60px;
        height: 60px;
        border: 1px solid #f5f4f7;
        border-radius: 100%;
        margin: 10px 25px 0 0;
      }
      .name {
        font-size: 15px;
        font-weight: bold;
      }
    }
    .comment {
      p {
        margin-top: 10px;
        font-size: 13px;
        line-height: 25px;
        width: 300px;
        /*border: 1px solid red;*/
        margin: 0 auto;
      }
      .center {
        /*margin-left: 25px;*/
        font-size: 12px;
        color: #333333;
        line-height: 30px;
        .data {
          margin-right: 45px;
          margin-left: 10px;
        }
      }
      .img {
        img {
          width: 100px;
          height: 80px;
          padding: 0px 4px;
        }
      }
    }
  }
</style>