<template>
  <div id="app">
    <header class="header"><img src="./assets/images/login/login-logo.png" alt="logo"></header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
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
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 8px;
    border-bottom: 1px solid #d1d4d7;
    background-color: @blue-plus;
  }
</style>
