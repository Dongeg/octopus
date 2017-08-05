<template>
  <div class="login-container">
    <div class="login-main">
      <div class="login-left">
        <img src="../assets/images/login/login-pic.png" alt="login装饰图">
      </div>
      <div class="login-right">
        <ul class="login-toggle-btn">
          <li v-for="(item,index) in loginWay" @click="toggleLoginWay(index)" :class="{'login-btn-active':index===loginWayIndex}">
            {{item}}
            <span v-show="index===loginWayIndex" class="down-triangle" ></span>
          </li>
        </ul>
        <div class="login-form">
          <div class="account-login" v-show="loginWayIndex===1">
            <p>用户名：</p>
            <p><input type="text" class="login-pwd"></p>
            <p>密码：</p>
            <p><input type="text" class="login-pwd"></p>
            <p class="account-login">
               <button>登陆</button>
               <button>重置</button>
            </p>
          </div>
          <div class="ca-login" v-show="loginWayIndex===0">
            <div>
              <p>请输入Key私钥密码：</p>
              <p><input class="login-pwd" type="password"></p>
              <p><button class="ca-loagin-btn">CA登陆</button></p>
              <div class="login-msg">
                <p><a href="">下载CA驱动</a> CA中心联系电话：0772-2812252</p>
                <p><a href="">下载市长信箱处理员手册</a></p>
                <p><a href="">下载部门信箱处理员手册</a></p>
                <p>技术支持（信件处理）QQ：1752268020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'login',
        data:function(){
            return{
              loginWay:['CA登录','账户登录'],
              loginWayIndex:1,
            }
        },
        computed:{

        },
        mounted () {
            this.$nextTick(()=> {
            });
        },
        methods:{
            toggleLoginWay(index){
                this.loginWayIndex=index;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
  @import "../assets/less/common";
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-main {
    display: flex;
    width: 1000px;
    margin: 0 auto;
  }
  .login-toggle-btn {
    display: flex;
    li {
      position: relative;
      width: 200px;
      height:60px;
      text-align: center;
      line-height: 60px;
      background-color: @blue;
      color: @a-blue;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .login-btn-active {
    color: #fff !important;
    background-color: @blue-plus !important;
  }
  .login-right {
    a{
      color: @a-blue;
    }
  }
  .login-form {
    padding-top: 24px;
    width: 400px;
    height: 270px;
    background-color: #F3F3F3;
    input{
      width: 296px;
      height: 40px;
    }
  }
  .ca-login, .account-login {
    width: 300px;
    margin: 0 auto;
  }
  .ca-loagin-btn {
    width: 300px;
    height: 40px;
    font-size: 18px;
    background-color:@blue-plus ;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
  .login-msg{
    p{
      padding-bottom: 5px;
    }
  }
  .account-login{
    width: 300px;
    .account-login{
      display: flex;
      justify-content:space-between;
    }
    button{
      width: 142px;
      height: 44px;
      background-color: @blue-plus;
      border-radius: 5px;
      color: #fff;
    }
  }
</style>
