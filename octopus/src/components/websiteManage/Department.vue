<template>
    <div id="department">
        <div class="department-name">
            <p>部门名称：<el-input placeholder="请输入内容" style="width: 250px"></el-input><el-button type="primary">搜索</el-button></p>
        </div>
        <div class="operating">
            <button type="button" @click="opeShow('新建附件模块')"><i class="iconfont icon-jia"></i>新增</button>
            <button type="button" @click="opeShow('编辑附件模块')"><i class="iconfont icon-neirongbianji"></i>编辑</button>
            <button type="button"  data-toggle="modal" data-target="#myModal"><i class="iconfont icon-icon_delete"></i>删除</button>
        </div>
        <div>
            <el-tree
                    :data="data2"
                    :props="defaultProps"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent">
            </el-tree>
        </div>
        <operate v-show="operate" @hide-ope="hideOperate()" :opname="opName">
            <div slot="op-btn">
                <button type="button" class="btn btn-primary" @click="hideOperate()">取消</button>
                <button type="button" class="btn btn-primary" @click="hideOperate()">确认</button>
            </div>
            <div slot="op-name">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">编号</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">模块名</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">模块描述</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">文件类型</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">模块状态</label>
                        <div class="col-sm-9">
                            <label for="used"><input type="radio" id="used" name="model-status">启用</label>
                            <label for="unused"><input type="radio" id="unused" name="model-status">禁用</label>
                        </div>
                    </div>
                </form>
            </div>
        </operate>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">提示</h4>
                    </div>
                    <div class="modal-body">
                        附件模块删除后无法恢复！
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-danger">删除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import operate from '../baseOperate'
    let id = 1000;
    export default {
        components:{
            operate
        },
        name: 'department',
        data:function(){
            return{
                operate:false,
                opName:"",
                tableData:[],
                data2: [{
                    id: 1,
                    label: '黄浦区',
                    children: [{
                        id: 4,
                        label: '黄埔镇',
                        children: [{
                            id: 9,
                            label: '黄埔村'
                        }, {
                            id: 10,
                            label: '长湴村'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '天河区',
                    children: [{
                        id: 5,
                        label: '棠下镇'
                    }, {
                        id: 6,
                        label: '棠下村'
                    }]
                }, {
                    id: 3,
                    label: '白云区',
                    children: [{
                        id: 7,
                        label: '白云山'
                    }, {
                        id: 8,
                        label: '白云村'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        computed:{

        },
        mounted() {
            this.$nextTick(()=> {
//                this.getData();

            });
        },
        methods: {
            getData(){
                this.axios.get('/static/data/annex.json').then((response) => {

                })
            },
            opeShow(text){
                this.opName = text;
                this.operate = true;
            },
            hideOperate(){
                this.operate = false;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    @import "../../assets/less/common";
    #department{
        position: relative;
        height: 100%;
        padding-top: 40px;
    }
    .operating {
        padding: 10px;
        button{
            background-color: @blue-plus;
            padding: 5px 10px;
            border-radius: 5px;
            color: #fff;
            i{
                margin-right: 5px;
            }
        }
    }
    .data_table{
        text-align: center;
    }
    .page-navigation{
        text-align: right;
    }
    .data-title{
        th{
            text-align: center;
        }
    }
    .form-group{
        margin-right: 0;
    }
    .pagination{
        margin: 0;
    }
    .department-name{
        margin: 20px 0 10px 10px;
    }
</style>
