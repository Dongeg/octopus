<template>
<div id="menu">
    <!--头部-->
    <div class="menu-header">
        <button type="button" @click="opeShow('新建菜单',1)" class="add-menu">
            <i class="iconfont icon-jia"></i>
            <span>新建菜单</span>
        </button>
        <div class="menu-label-list">
          <div class="dropdown">
            <button class="btn btn-default" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              洛维工业园区<span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li @click="opeShow('编辑菜单',1)"><a href="javascript:;">编辑菜单</a></li>
              <li><a href="javascript:;">删除</a></li>
            </ul>
          </div>
        </div>
    </div>
    <!--主体-->
    <div class="menu-main">
        <div class="menu-item">
            <div class="lv1-menu">
                <div>
                    <p>首页</p>
                    <p>LINK:首页</p>
                </div>
                <div class="menu-btn">
                    <button><i class="iconfont icon-yanjing"></i></button>
                    <div class="dropdown">
                      <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="el-icon-caret-bottom el-icon--right"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li @click="opeShow('编辑菜单',2,'lg')"><a href="javascript:;">编辑菜单</a></li>
                        <li><a href="javascript:;">删除</a></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div class="lv2-menu">
                <div>
                    <p>首页二级</p>
                    <p>LINK:首页二级</p>
                </div>
                <div class="menu-btn">
                  <button><i class="iconfont icon-yanjing"></i></button>
                  <div class="dropdown">
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="el-icon-caret-bottom el-icon--right"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li @click="opeShow('编辑菜单选项',2,'lg')"><a href="javascript:;">编辑菜单</a></li>
                      <li @click="opeShow('编辑菜单',2,'lg')"><a href="javascript:;">新建同级菜单</a></li>
                      <li @click="opeShow('编辑菜单',2,'lg')"><a href="javascript:;">新建三级菜单</a></li>
                      <li><a href="javascript:;">删除</a></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <!--弹窗-->
    <operate v-show="operate" @hide-ope="hideOperate()" :opname="opName" :layerSize="layerSize">
        <div slot="op-btn">
            <button type="button" class="btn btn-primary" @click="hideOperate()">取消</button>
            <button type="button" class="btn btn-primary" @click="hideOperate()">确认</button>
        </div>
        <div slot="op-name">
          <div v-show="operateType==1">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-3 control-label">标题</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">说明</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">终端类型</label>
                <div class="col-sm-9">
                  <select class="form-control">
                    <option value="">PC</option>
                    <option value="">PHONE</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div v-show="operateType==2">
            <div class="lg-layer-title">
              <p><span>菜单标题 <label style="color:red;">*</label> </span> <input type="text"></p>
              <p><span>副标题</span> <input type="text"></p>
            </div>
            <div>
              <div class="lg-layer-tab">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active">
                    <a href="#home" aria-controls="home" role="tab" data-toggle="tab">详细</a>
                  </li>
                  <li role="presentation">
                    <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">链接类型选项</a>
                  </li>
                  <li role="presentation">
                    <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">页面显示选项</a>
                  </li>
                  <li role="presentation">
                    <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">元数据选项</a>
                  </li>
                  <li role="presentation">
                    <a href="#model" aria-controls="model" role="tab" data-toggle="tab">为这个菜单分配模块</a>
                  </li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane tab-main active" id="home">
                    <div class="home-main">
                      <div>
                        <p>
                          <span class="input-label">菜单项类型 <label>*</label></span>
                          <input type="text" v-model="menuType" disabled>
                          <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target=".menu-type">
                            <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                            选择
                          </button>
                        </p>
                        <p><span class="input-label">链接地址</span><input type="text"></p>
                        <p>
                          <span class="input-label">打开目标窗口方式</span>
                          <select name="">
                            <option value="">从父窗口打开</option>
                            <option value="">从当前页打开</option>
                          </select>
                        </p>
                        <p>
                          <span class="input-label">模板样式</span>
                          <select name="" id="">
                            <option value="">首页</option>
                            <option value="">default</option>
                          </select>
                        </p>
                        <p>
                          <span class="input-label">菜单别名</span>
                          <input type="text">
                        </p>
                      </div>
                      <div>
                        <p>
                          <span class="input-label">状态</span>
                          <select name="" id="">
                            <option value="">发布</option>
                            <option value="">未发布</option>
                          </select>
                        </p>
                        <p>
                          <span class="input-label">备注</span>
                          <input type="text">
                        </p>
                      </div>
                    </div>

                  </div>
                  <div role="tabpanel" class="tab-pane tab-main" id="profile">
                    <div class="profile-main">
                      <p>
                        <span class="input-label">浏览器页面标题</span>
                        <input type="text">
                      </p>
                      <p>
                        <span class="input-label">鼠标悬停注释</span>
                        <input type="text">
                      </p>
                      <p>
                        <span class="input-label">添加icon</span>
                        <input type="text">
                      </p>
                      <p>
                        <span class="input-label">添加菜单标题</span>
                        <input type="text">
                      </p>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane tab-main" id="messages">
                    <p>
                      <span class="input-label">浏览器的页面标题</span>
                      <input type="text">
                    </p>
                    <p>
                      <span class="input-label">内容标题</span>
                      <input type="text">
                    </p>
                    <p>
                      <span class="input-label">显示内容标题</span>
                      <input type="text">
                    </p>
                    <p>
                      <span class="input-label">页面CSS类</span>
                      <input type="text">
                    </p>
                  </div>
                  <div role="tabpanel" class="tab-pane tab-main" id="settings">
                    <p>
                      <span class="input-label">简介</span>
                      <textarea></textarea>
                    </p>
                    <p>
                      <span class="input-label">关键词</span>
                      <textarea></textarea>
                    </p>
                  </div>
                  <div role="tabpanel" class="tab-pane tab-main" id="model">
                      <div>
                        <table class="table table-bordered">
                          <thead>
                              <th>模块</th>
                              <th>位置</th>
                              <th>显示</th>
                          </thead>
                        </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </operate>
  <!-- 菜单项类型弹窗START -->
  <div class="modal fade menu-type" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">菜单项类型</h4>
        </div>
        <div class="modal-body">
            <a class="btn" role="button" data-toggle="collapse" href="#gridLayout" aria-expanded="false" aria-controls="collapseExample">
              栅格布局
            </a>
            <div class="collapse" id="gridLayout">
              <div class="well">
                <div class="collapse-main">
                  <div class="collapse-item" @click="chooseMenuType('三栏布局')">
                    <p class="collapse-item-title">三栏布局</p>
                    <p><img src="../../assets/images/index/m_article2.png" alt=""></p>
                    <p class="collapse-item-dir">三栏布局</p>
                  </div>
                  <div class="collapse-item" @click="chooseMenuType('两栏布局')">
                    <p class="collapse-item-title">两栏布局</p>
                    <p><img src="../../assets/images/index/m_article2.png" alt=""></p>
                    <p class="collapse-item-dir">两栏布局</p>
                  </div>
                  <div class="collapse-item" @click="chooseMenuType('单栏布局')">
                    <p class="collapse-item-title">单栏布局</p>
                    <p><img src="../../assets/images/index/m_article2.png" alt=""></p>
                    <p class="collapse-item-dir">单栏布局</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default close-menu-type" data-dismiss="modal">关闭</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 菜单项类型弹窗END -->
</div>
</template>

<script>
    import operate from '../baseOperate'
    export default {
        components:{
            operate
        },
        name: 'menuManage',
        data:function(){
            return{
                operate:false,
                opName:"",
                operateType:1,
                layerSize:'sm',
                menuType:'',
            }
        },
        computed:{

        },
        mounted () {
            this.$nextTick(()=> {
                this.getData()
            });
        },
        methods:{
            getData(){
                this.axios.get('http://octops.cn/menu').then((response)=> {
                    console.log(response.data)
                })
            },
            opeShow(text,type,size){
                this.operateType=type;
                this.opName=text;
                this.operate=true;
                this.layerSize=size;
            },
            hideOperate(){
                this.operate=false;
            },
          chooseMenuType(text){
            this.menuType=text;
            $(".close-menu-type").click()
          },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    @import "../../assets/less/common";
    #menu{
        padding-top: 40px;
    }
    .menu-header{
        display: flex;
        align-items: center;
        padding: 20px;
    }
    .add-menu{
        background-color: @blue-plus;
        color: #fff;
        padding: 5px 10px;
        margin-right: 20px;
    }
    .menu-label-list{
        flex-grow: 1;
        display: flex;
        border-bottom: 1px solid #aaa;
    }
    .menu-label{
        background-color: #fff;
        padding: 10px 20px;
        border:1px solid #aaa;
    }
    .form-group{
        margin-right: 0;
    }
    .menu-btn{
        display: flex;
        button{
            width: 30px;
            height: 26px;
        }
    }
    .menu-item{
        width: 280px;
        padding: 10px 20px;
        margin-left:20px;
        background-color: #EBEBEB;
    }
    .lv1-menu{
        display: flex;
        justify-content:space-between;
        align-items: center;
    }
    .lv2-menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height:70px;
        margin: 10px 0 10px 10px;
        background-color: #fff;
    }
    .menu-main{
        display: flex;
        flex-wrap:wrap;
    }
  /** 大弹窗样式START */
    .lg-layer-title {
      p {
        margin:10px 20px;
      }
      span {
        display: inline-block;
        width: 7rem;
      }
    }
    .lg-layer-tab {
      padding-left: 10px;
    }
    /*点击展开部分样式*/
    .collapse-main {
      display: flex;
      justify-content: center;
    }
    .collapse-item {
      border:1px;
      padding: 20px;
      &:hover {
        background-color: #ccc;
      }

    }
    .collapse-item-title {
      color: #00bbee;
    }
    .collapse-item-dir {
      color: #aaa;
      font-size: 12px;
    }
    .input-label {
        display: inline-block;
        width: 9rem;
    }
    .tab-main {
      padding-top: 20px;
      padding-left: 30px;
      textarea {
        width: 378px;
        height: 60px;
      }
      p {
        margin-bottom:10px ;
      }

    }
    .home-main {
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
    }
  /** 大弹窗样式END */
</style>
