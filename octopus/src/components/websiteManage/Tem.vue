<template>
    <div id="tem">
        <div class="operating">
            <button type="button" @click="opeShow('编辑附件模块')"><i class="iconfont icon-neirongbianji"></i>上传模板</button>
            <button type="button"  data-toggle="modal" data-target="#myModal"><i class="iconfont icon-icon_delete"></i>卸载模板</button>
        </div>
        <el-table :data="tableData" style="width: 100%" highlight-current-row @current-change="handleCurrentChange">
            <el-table-column
                    type="index"
                    show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                    label="当前使用"
                    show-overflow-tooltip
            >
                <template scope="scope">
                    <i class="iconfont icon-dui"></i>
                </template>

            </el-table-column>
            <el-table-column
                    label="缩略图">
                <template scope="scope">
                    <img src="../../assets/images/index/template_thumbnail.jpg" alt="">
                    <!--<img :src="scope.row.images" alt="">-->
                </template>
            </el-table-column>
            <el-table-column
                    prop="tplName"
                    label="模板">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="提交时间"
            >
            </el-table-column>
            <el-table-column
                    prop="version"
                    label="版本"
            >
            </el-table-column>
        </el-table>
        <div class="page-navigation">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
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
    export default {
        components:{
            operate
        },
        name: 'modelManage',
        data:function(){
            return{
                operate:false,
                opName:"",
                tableData:[
                    {
                        "images":"../../assets/images/index/template_thumbnail.jpg",
                        "tplName":"dsds",
                        "time":"2017-03-21 16:24:44",
                        "version":"1.0.0"
                    },
                    {
                        "images":"../../assets/images/index/template_thumbnail.png",
                        "tplName":"qwqwqw",
                        "time":"2017-03-21 16:24:44",
                        "version":"1.0.0"
                    }
                ],
            }
        },
        computed:{

        },
        mounted () {
            this.$nextTick(()=> {

            });
        },
        methods:{
            opeShow(text){
                this.opName=text;
                this.operate=true;
            },
            hideOperate(){
                this.operate=false;
            },
            chooseModel(){
                this.createModelShow=false;
            },
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    @import "../../assets/less/common";
    #tem {
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
    #create-model{
        position: absolute;
        top:0;
        left:0;
        z-index: 9;
        width:100%;
        height: 100%;

    }
    .create-model-main {
        position: absolute;
        top:0;
        right:0;
        z-index: 11;
        display: flex;
        flex-wrap: wrap;
        width: 700px;
        height: 100%;
        overflow-y: scroll;
        background-color: #fff;
        padding: 20px;
    }
    .model-item{
        box-sizing: border-box;
        width: 320px;
        height: 200px;
        padding: 20px;
        border:1px solid #aaa;
        img {
            width: 110px;
            height: 110px;
        }
        &:hover {
            background-color: #aaa;
        }
    }
    .create-model-bg {
        position: absolute;
        top:0;
        right:0;
        z-index: 10;
        width: 100%;
        height: 100%;
        background-color:rgba(0,0,0,0.5);
    }
</style>
