<template>
    <!--增、删、编辑右侧弹窗-->
    <div class="operate-container">
        <transition enter-active-class="fadeInRight" leave-active-class="fadeOutRight">
        <div class="operate-layer">
            <div class="operate-header">
                <p>{{opname}}</p>
                <p>
                    <slot name="op-btn"></slot>
                </p>
            </div>
            <div class="operate-main">
                <slot name="op-name"></slot>
            </div>
        </div>
        </transition>
        <div class="operate-bg" @click="hideOperate()"></div>
    </div>
</template>
<script>
    export default {
        props:{
            opname:[String]
        },
        name: 'operate',
        data:function(){
            return{

            }
        },
        computed:{

        },
        mounted () {
            this.$nextTick(()=> {

            });
        },
        methods:{
            hideOperate(){
                this.$emit('hide-ope')
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    @import "../assets/less/common";
    .operate-layer{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        width: 500px;
        height: 100%;
        background-color: #fff;
    }
    .operate-bg{
        position: absolute;
        top:0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    .operate-header{
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding: 5px;
        font-size: 16px;
        border-bottom: 1px solid #aaa;
    }
    .fadeInRight,.fadeOutRight{
        animation-duration:0.3s;
    }
    .operate-main{
        padding:30px 5px;
    }
</style>
