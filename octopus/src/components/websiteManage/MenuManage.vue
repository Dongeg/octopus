<template>
<div id="menu">
    <!--头部-->
    <div class="menu-header">
        <button type="button" @click="opeShow('新建菜单')" class="add-menu">
            <i class="iconfont icon-jia"></i>
            <span>新建菜单</span>
        </button>
        <div class="menu-label-list">
            <el-dropdown trigger="click">
                <button class="menu-label">
                    洛维工业园区<i class="el-icon-caret-bottom el-icon--right"></i>
                </button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>编辑菜单</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
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
                    <el-dropdown trigger="click">
                        <button class="">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑菜单</el-dropdown-item>
                            <el-dropdown-item>新建二级菜单</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="lv2-menu">
                <div>
                    <p>首页二级</p>
                    <p>LINK:首页二级</p>
                </div>
                <div class="menu-btn">
                    <button><i class="iconfont icon-yanjing"></i></button>
                    <el-dropdown trigger="click">
                        <button class="">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑菜单</el-dropdown-item>
                            <el-dropdown-item>新建同级菜单</el-dropdown-item>
                            <el-dropdown-item>新建三级菜单</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <div class="menu-item">
            <div class="lv1-menu">
                <div>
                    <p>首页</p>
                    <p>LINK:首页</p>
                </div>
                <div class="menu-btn">
                    <button><i class="iconfont icon-yanjing"></i></button>
                    <el-dropdown trigger="click">
                        <button class="">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑菜单</el-dropdown-item>
                            <el-dropdown-item>新建二级菜单</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="lv2-menu">
                <div>
                    <p>首页二级</p>
                    <p>LINK:首页二级</p>
                </div>
                <div class="menu-btn">
                    <button><i class="iconfont icon-yanjing"></i></button>
                    <el-dropdown trigger="click">
                        <button class="">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑菜单</el-dropdown-item>
                            <el-dropdown-item>新建同级菜单</el-dropdown-item>
                            <el-dropdown-item>新建三级菜单</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <div class="menu-item">
            <div class="lv1-menu">
                <div>
                    <p>首页</p>
                    <p>LINK:首页</p>
                </div>
                <div class="menu-btn">
                    <button><i class="iconfont icon-yanjing"></i></button>
                    <el-dropdown trigger="click">
                        <button class="">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑菜单</el-dropdown-item>
                            <el-dropdown-item>新建二级菜单</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="lv2-menu">
                <div>
                    <p>首页二级</p>
                    <p>LINK:首页二级</p>
                </div>
                <div class="menu-btn">
                    <button><i class="iconfont icon-yanjing"></i></button>
                    <el-dropdown trigger="click">
                        <button class="">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>编辑菜单</el-dropdown-item>
                            <el-dropdown-item>新建同级菜单</el-dropdown-item>
                            <el-dropdown-item>新建三级菜单</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
    <!--弹窗-->
    <operate v-show="operate" @hide-ope="hideOperate()" :opname="opName">
        <div slot="op-btn">
            <button type="button" class="btn btn-primary" @click="hideOperate()">取消</button>
            <button type="button" class="btn btn-primary" @click="hideOperate()">确认</button>
        </div>
        <div slot="op-name">
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
                    <label class="col-sm-3 control-label">模块描述</label>
                    <div class="col-sm-9">
                        <select class="form-control">
                            <option value="">PC</option>
                            <option value="">PHONE</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </operate>
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
            opeShow(text){
                this.opName=text;
                this.operate=true;
            },
            hideOperate(){
                this.operate=false;
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
</style>
