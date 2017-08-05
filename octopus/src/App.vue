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
