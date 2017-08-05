<template>
  <div id="app">
    <header class="header"><img src="./assets/images/login/login-logo.png" alt="logo"></header>
    <router-view></router-view>
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

  }
  .header {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    border-bottom: 1px solid #d1d4d7;
    background-color: @blue-plus;
  }
</style>
