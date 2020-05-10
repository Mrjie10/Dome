<template>
  <transition name="fade" mode="out-in">
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "Toast",
    props: {
      // messag: {
      //   type: String,
      //   default: ''
      // },
      // show: {
      //   type: Boolean,
      //   default: false
      // }
    },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration=2000) {
        this.isShow = true;
        this.message = message;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, duration)
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .toast {
    z-index: 9;
    border-radius: 20px;
    background-color: rgba(0,0,0,.50);
    padding: 8px 10px;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #a3a3a5;
  }
</style>