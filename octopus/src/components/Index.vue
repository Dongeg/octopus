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
            <!--弹出来的那一条-->
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
            <div class="m_tree">
                <template v-for="(item,index) in navMain" class="m-tree-item">
                <ul v-show="item.nav_index==menuNavShowIndex">
                    <template  v-for="(nav,index) in item.nav_content">
                    <router-link :to="{path:nav.item_link}">
                        <li class="m-tree-item">
                            <p class="m-tree-item-name" @click="MTreeItemNameClick(nav.item_child_index)">{{nav.item_name}}</p>
                            <ul v-show="itemChildIndex==nav.item_child_index">
                                <template v-for="(navChild,index) in nav.item_child">
                                    <li class="nav-child">{{navChild}}</li>
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
            <router-view></router-view>
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
                menuNavItemShow:false,//是否显示那一横条
                itemChildIndex:-1//展开哪个二级子目录
            }
        },
        mounted () {
            this.$nextTick(()=> {
                this.getNavList();
            });
        },
        methods:{
            getNavList(){
                this.axios.get('/static/data/nav.json').then((response)=> {
                    this.menuNav=response.data.menuNav;
                    this.navMain=response.data.navMain;
                })
            },
            menuNavItemClick(index){
                this.menuNavShowIndex=index;
                this.menuNavItemShow=!this.menuNavItemShow;
            },
            MTreeItemNameClick(index){
                if( this.itemChildIndex==index){
                    this.itemChildIndex=-1;
                }else{
                    this.itemChildIndex=index
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
        z-index: 1;
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
            background-color:#E4F7FE;
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
        background-color:#E4F7FE;
        border-top:1px solid #ccc ;
    }
</style>
