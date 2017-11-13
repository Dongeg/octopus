<template>
    <div id="annex">
        <div class="operating">
            <button type="button" @click="addModel()" ><i class="iconfont icon-jia"></i>新增</button>
            <button type="button" @click="opeShow('编辑附件模块')"><i class="iconfont icon-neirongbianji"></i>编辑</button>
            <button type="button"   data-toggle="modal" data-target="#myModal"><i class="iconfont icon-icon_delete"></i>删除</button>
        </div>
        <el-table :data="tableData"  highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
            <el-table-column
                    type="index"
                    show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                    label="模块状态"
                    show-overflow-tooltip
                    prop="status"
            >
                <template scope="scope">
                    <i class="iconfont icon-dui" :class="{'unactive':scope.row.status==false}" @click="iconClick(scope)"></i>
                </template>

            </el-table-column>
            <el-table-column
                    prop="number"
                    label="编号">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="模块名称"
                    show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                    prop="dir"
                    label="模块描述"
                    show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="文件类型（逗号隔开）"
            >
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="创建时间">
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
                <button type="button" class="btn btn-primary" @click="submitData()">确认</button>
            </div>
            <div slot="op-name">
                <form class="form-horizontal">
                    <input type="hidden" v-model="dataId">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">编号</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" v-model="modelNumber">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">模块名</label>
                        <div class="col-sm-9">
                            <input type="text" v-model="modelName" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">模块描述</label>
                        <div class="col-sm-9">
                            <input type="text" v-model="modelDir" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">文件类型</label>
                        <div class="col-sm-9">
                            <input type="text" v-model="fileType" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">模块状态</label>
                        <div class="col-sm-9">
                            <label for="used"><input type="radio" id="used" name="model-status" value="true" v-model="modelStatus">启用</label>
                            <label for="unused"><input type="radio" id="unused" name="model-status" value="false" v-model="modelStatus">禁用</label>
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
                        <button type="button" class="btn btn-default data-del-btn" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-danger" @click="delData()">删除</button>
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
        name: 'annex',
        data:function(){
            return{
                operate:false,
                opName:"",
                tableData:[],
                currentRow:'',

                //表单数据
              modelNumber:'',
              modelName:'',
              modelDir:'',
              fileType:'',
              modelStatus:'',
              dataId:''


            }
        },
        computed:{

        },
        mounted() {
            this.$nextTick(()=> {
                this.getData();

            });
        },
        methods:{
            getData(){
                this.axios.get('/static/data/annex.json').then((response)=> {
                    this.tableData=response.data.annex;
                })
            },
            iconClick(scope){
              scope.row.status=!scope.row.status;
              this.modelStatus=!this.modelStatus;
            },
            opeShow(text){
                this.opName=text;
                this.operate=true;
            },
            hideOperate(){
                this.operate=false;
            },
            handleCurrentChange(val) {
              this.currentRow = val;
              this.dataId=val.dataId
              this.modelStatus=val.status
              this.modelName=val.name
              this.modelDir=val.dir
              this.fileType=val.type
              this.modelNumber=val.number
            },
            delData() {
              var that=this
              this.tableData.forEach(function (value,index,array) {
                if(array[index].dataId== that.dataId){
                  array.splice(index,1)
                  return
                }
              })
              $(".data-del-btn").click();
            },
            addModel() {
              let timestamp = Date.parse(new Date());
              this.dataId=timestamp;
              this.modelDir=""
              this.modelName=""
              this.modelNumber=""
              this.status=""
              this.fileType=""
              this.opeShow('新建附件模块');
            },
            submitData(){
              function formatDate(now) {
                var year=now.getYear()-100;
                var month=now.getMonth()+1;
                var date=now.getDate();
                var hour=now.getHours();
                var minute=now.getMinutes();
                var second=now.getSeconds();
                return "20"+year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
              }
              var that=this
              var isAdd=true;
              this.tableData.forEach(function (value,index,array) {
                if(array[index].dataId== that.dataId){
                    array[index].number= that.modelNumber;
                    array[index].dir= that.modelDir
                    array[index].name= that.modelName
                    array[index].type= that.fileType
                    if(that.modelStatus.length) {
                      array[index].status=that.modelStatus.length==4?true:false
                    }
                    else {
                      array[index].status=that.modelStatus
                    }
                    array[index].dataId= that.dataId
                    isAdd=false;
                    return
                }
              })
              console.log(isAdd)
              if(isAdd==true) {
                var newData={
                  "dataId":this.dataId,
                  "dir":this.modelDir,
                  "name":this.modelName,
                  "number":this.modelNumber,
                  "time":formatDate(new Date(this.dataId)),
                  "type":this.fileType,
                }
                if(this.modelStatus.length) {
                  newData.status=this.modelStatus.length==4?true:false
                }
                else {
                  newData.status=this.modelStatus;
                }
                this.tableData.push(newData);
              }
              this.operate=false;
            },
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    @import "../../assets/less/common";
    #annex{
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
    .unactive {
      color: #aaa;
    }
</style>
