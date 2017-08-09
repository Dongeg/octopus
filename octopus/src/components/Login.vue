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
            <form action="">
              <p>用户名：</p>
              <p><input type="text" class="login-pwd" v-model="userName"  @blur="nameBulr()" :class="{'input-err': ifUserName}"></p>
              <p>密码：</p>
              <p><input type="text" class="login-pwd" v-model="userPwd"   @blur="pwdBulr()" :class="{'input-err': ifUserPwd}"></p>
              <p class="account-login">
               <button type="button" @click="accountLogin()">登陆</button>
                <button type="reset">重置</button>
              </p>
            </form>
          </div>
          <div class="ca-login" v-show="loginWayIndex===0">
            <div>
              <form action="">
                <p>请输入Key私钥密码：</p>
                <p><input class="login-pwd" type="password" v-model="CAPwd" id="CA-pwd" @blur="CABulr()" :class="{'input-err': ifCAPwd}"></p>
                <p><button type="button" class="ca-loagin-btn" @click="CALogin()" >CA登陆</button></p>
              </form>
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
              loginWayIndex:1,//当前登陆方式
              userName:'',//用户名
              ifUserName:false,//用户名是否为空
              userPwd:'',//密码
              ifUserPwd:false,//密码是否为空
              CAPwd:'',
              ifCAPwd:false,//

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
            nameBulr(){
                if(this.userName==""){
                    this.ifUserName=true;
                }
                else {
                    this.ifUserName=false;
                }
            },
            pwdBulr(){
                if(this.userPwd==""){
                    this.ifUserPwd=true;
                }
                else {
                    this.ifUserPwd=false;
                }
            },
            CABulr(){
                if(this.CAPwd==""){
                    this.ifCAPwd=true;
                }
                else {
                    this.ifCAPwd=false;
                }
            },
            accountLogin(){
                if(this.userName==''||this.userPwd==""){
                    layer.msg('请正确填写表单');
                    return false
                }
                window.location.href="#/index/annex";
            },
            CALogin(){
                if(this.CAPwd==''){
                    layer.msg('请正确填写表单');
                    return false
                }
                window.location.href="#/index/annex";
            }
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
  @import "../assets/less/common";
  .login-container {
    display: flex;
    padding-top: 50px;
    justify-content: center;
    align-items: center;
  }
  .login-main {
    display: flex;
    width: 1000px;
    margin: 0 auto;
    justify-content:space-between;
    align-items: center;
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
    height: 300px;
    background-color: #F3F3F3;
    p{
      margin-bottom: 10px;
    }
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
  .input-err{
    border: 1px solid #ff0000;
  }
</style>
