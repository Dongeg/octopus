<template>
    <div id="index">
        <!--左上角能点的那个-->
        <div class="menu">
            <div class="menu-nav">
                <ul class="menu-nav-now" @click="menuNavItemShow=!menuNavItemShow">
                    <li v-for="(item,index) in menuNav" v-show="index==menuNavShowIndex">
                        <p><i class="iconfont" :class="item.icon"></i></p>
                        <p class="menu-name">{{item.nav_name}}</p>
                    </li>
                </ul>
                <div>
                    <i class="iconfont icon-gengduo"></i>
                </div>
            </div>
            <!--点完左上角弹出来的那一条-->
            <transition enter-active-class="fadeInLeft" leave-active-class="fadeOutLeft">
            <ul class="menu-nav-item" v-show="menuNavItemShow">
                <li v-for="(item,index) in menuNav" @click="menuNavItemClick(index)">
                    <div>
                        <p><i class="iconfont" :class="item.icon"></i></p>
                        <p class="menu-name">{{item.nav_name}}</p>
                    </div>
                </li>
            </ul>
            </transition>
            <!--菜单树-->
            <div class="m_tree">
                <!--一级菜单-->
                <template v-for="(item,index) in navMain" class="m-tree-item">
                <ul v-show="item.nav_index==menuNavShowIndex">
                    <template  v-for="(nav,index) in item.nav_content">
                    <router-link :to="{path:nav.item_link}">
                        <li class="m-tree-item">
                            <p class="m-tree-item-name"
                               :class="{'tree-item-active':item_active_index==index}"
                               @click="MTreeItemNameClick(nav.item_child_index,nav.have_child,nav.item_name,nav.item_link,nav.item_active_index)">
                                {{nav.item_name}}
                            </p>
                            <!--二级菜单-->
                            <ul v-show="itemChildIndex==nav.item_child_index">
                                <template v-for="(navChild,index) in nav.item_child">
                                <router-link :to="{path:navChild.child_link}">
                                    <li class="nav-child" @click="MTreeChildClick(navChild.child_name,navChild.child_link)">
                                        {{navChild.child_name}}
                                    </li>
                                </router-link>
                                </template>
                            </ul>
                        </li>
                    </router-link>
                    </template>
                </ul>
                </template>
            </div>
        </div>
        <div id="index-main">
            <!--二级页面标签卡-->
            <div class="tab-container">
                <ul class="tab-main">
                    <li v-for="(item,index) in tabList" class="tab-item">
                        <router-link :to="{path:item.link}"><p>{{item.name}}</p></router-link>
                        <p class="close-btn" @click="tabClose(item.name)">x</p>
                    </li>
                </ul>
            </div>
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'index',
        data:function(){
            return{
                menuNav:[],//横向一级导航
                navMain:[],//菜单树
                menuNavShowIndex:0,//当前一级菜单
                item_active_index:0,//处于激活状态的目录索引
                menuNavItemShow:false,//是否显示那一横条
                itemChildIndex:0,//哪个目录处于活跃状态
                tabList:[]//tab标签列表
            }
        },
        mounted () {
            this.$nextTick(()=> {
                this.getNavList();
            });
        },
        methods:{
            // 获取菜单数据
            getNavList(){
                this.axios.get('/static/data/nav.json').then((response)=> {
                    this.menuNav=response.data.menuNav;
                    this.navMain=response.data.navMain;
                })
            },
            //  点左上角那个块
            menuNavItemClick(index){
                this.item_active_index=-1;
                this.menuNavShowIndex=index;
                this.menuNavItemShow=!this.menuNavItemShow;
            },
            //点菜单列表
            MTreeItemNameClick(index,haveChild,name,link,activeIndex) {
                this.item_active_index=activeIndex;
                if( this.itemChildIndex==index) {
                    this.itemChildIndex=-1;
                }else{
                    this.itemChildIndex=index
                }
                if (haveChild) {
                    return
                }
                else {
                    let isPush=true
                    this.tabList.forEach(function (value,index,array) {
                        if(array[index].name==name){
                            isPush=false
                            return
                        }
                    })
                    if(isPush) {
                        this.tabList.push({"name":name,"link":link});
                    }
                }

            },
            //点tab标签上的x
            tabClose(item){
                this.tabList.forEach(function (value,index,array) {
                    if(array[index].name==item){
                        array.splice(index, 1)
                        return
                    }
                })
            },
            //二级菜单点击
            MTreeChildClick(name,link){
                let childIsPush=true
                this.tabList.forEach(function (value,index,array) {
                    if(array[index].name==name){
                        childIsPush=false
                        return
                    }
                })
                if(childIsPush) {
                    this.tabList.push({"name":name,"link":link});
                }
            }
        },
    }
</script>

<style rel="stylesheet/less" lang="less">
    @import "../assets/less/common";
    #index{
        display: flex;
        height: 100%;
        padding-top: 50px;
    }
    .menu{
        width: 180px;
        height: 100%;
        position: relative;
        border-right: 1px solid #aaa;
    }
    .menu-nav{
        position: relative;
        z-index: 2;
        display: flex;
        width: 180px;
        height: 144px;
        border: 1px solid #aaa;
        background-color: #fff;
        .menu-nav-now,div{
            display: flex;
            align-items:center;
            justify-content:center;
            text-align: center;
            color: @blue-plus;
        }
        div{
            i{
                font-size: 20px;
            }
        }
        .menu-nav-now{
            width: 80%;
            i{
                font-size: 60px;
            }
        }
    }
    .menu-name{
        padding-top: 5px;
        color: @blue-plus;
        font-size: 16px;
    }
    .menu-nav-item{
        position: absolute;
        top:0;
        left: 180px;
        display: flex;
        z-index: 10;
        li{
            display: flex;
            align-items:center;
            justify-content:center;
            width: 180px;
            height: 144px;
            text-align: center;
            border-right: 1px solid #aaa;
            border-top: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
            background-color:@blue-Less;
            i{
                font-size: 60px;
                color: @blue-plus;
            }
            &:hover{
                background-color: @blue-plus;
                i,p{
                    color: #fff !important;
                }

            }
        }

    }

    .fadeInLeft,.fadeOutLeft{
        animation-duration:0.3s;
    }
    .m-tree-item{
        width: 100%;
        border-bottom: 1px solid #aaa;

        cursor: pointer;
    }
    .m-tree-item-name{
        height: 40px;
        line-height: 40px;
        padding-left: 5px;
        &:hover{
            background-color: @blue-plus;
            color: #fff;
        }
    }
    .nav-child{
        padding-left: 5px;
        height: 40px;
        line-height: 40px;
        background-color:@blue-Less;
        border-top:1px solid #ccc ;
    }
    .tree-item-active{
        background-color: @blue-plus;
        color: #fff;
    }
    .tab-container{
        position:absolute;
        top:0;
        left:0;
        z-index: 9;
        width: 100%;
        height: 40px;
        background-color:#dae7ed;
    }
    .tab-main{
        height: 100%;
        display: flex;
        align-items:flex-end;

    }
    .tab-item{
        display: flex;
        padding: 7px;
        background-color:#DCDCDC;
        margin-right: 5px;
        cursor: pointer;
    }
    .close-btn{
        padding-left: 15px;
    }
    #index-main{
        position: relative;
        flex-grow:1;
    }
</style>
