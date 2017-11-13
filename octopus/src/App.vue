<template>
  <div id="app">
    <loadinganimate v-show="loadingAnimate"></loadinganimate>
    <header class="header">
      <img src="./assets/images/login/login-logo.png" alt="logo">
      <p v-show="isLoading" class="login-msg">
        欢迎您！【开发组】admin
        <router-link to="/">退出</router-link>
        当前站点：
        <select>
          <option value="">demo来的</option>
          <option value="">demo来的</option>
        </select>
      </p>
    </header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapState} from "vuex";
import loadinganimate from '@/components/Loading'
export default {
  name: 'app',
  components:{
    loadinganimate,
  },
  computed:{
    ...mapState([
      'isLoading',
      'loadingAnimate'
    ])
  },

}
</script>

<style rel="stylesheet/less" lang="less">
  @import "./assets/less/common";
  #app {
    width: 100%;
    height: 100%;
    min-width: 1000px;
  }
  .header {
    position: fixed;
    top:0;
    left:0;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    min-width: 1000px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    border-bottom: 1px solid #d1d4d7;
    background-color: @blue-plus;
  }
  .login-msg {
    color: #fff;
    margin-right: 20px;
    select {
      color: #000;
    }
    a {
      color: #fff;
    }
  }
</style>
