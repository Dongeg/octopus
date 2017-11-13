<template>
    <div id="model-manage">
        <div class="operating">
            <button type="button" @click="createModelShow=true"><i class="iconfont icon-jia"></i>新增</button>
            <button type="button" @click="opeShow('编辑附件模块',2,'lg')"><i class="iconfont icon-neirongbianji"></i>编辑</button>
            <button type="button" @click="copyData()">复制</button>
            <button type="button"  data-toggle="modal" data-target="#myModal"><i class="iconfont icon-icon_delete"></i>删除</button>
        </div>
        <el-table :data="tableData" style="width: 100%" highlight-current-row @current-change="handleCurrentChange">
            <el-table-column
                    type="index"
                    show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                    prop="modelName"
                    label="模块名称">
            </el-table-column>
            <el-table-column
                    label="默认"
                    show-overflow-tooltip
            >
                <template scope="scope">
                    <i class="iconfont icon-dui"></i>
                </template>

            </el-table-column>
            <el-table-column
                    prop="modelStyle"
                    label="风格">
            </el-table-column>
            <el-table-column
                    prop="remarks"
                    label="备注"
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
        <div id="create-model" v-show="createModelShow==true">
            <div class="create-model-main">
              <div class="choose-model" v-show="showtype==1">
                <div class="model-item" @click="chooseModel()">
                  <p>单片文章一</p>
                  <p><img src="../../assets/images/index/m_article2.png" alt=""></p>
                  <p>单篇文章</p>
                </div>
                <div class="model-item" @click="chooseModel()">
                  <p>单片文章一</p>
                  <p><img src="../../assets/images/index/m_article2.png" alt=""></p>
                  <p>单篇文章</p>
                </div>
                <div class="model-item" @click="chooseModel()">
                  <p>单片文章一</p>
                  <p><img src="../../assets/images/index/m_article2.png" alt=""></p>
                  <p>单篇文章</p>
                </div>
                <div class="model-item" @click="chooseModel()">
                  <p>单片文章一</p>
                  <p><img src="../../assets/images/index/m_article2.png" alt=""></p>
                  <p>单篇文章</p>
                </div>
                <div class="model-item" @click="chooseModel()">
                  <p>单片文章一</p>
                  <p><img src="../../assets/images/index/m_article2.png" alt=""></p>
                  <p>单篇文章</p>
                </div>
              </div>
              <div class="edit-model" v-show="showtype==2">
                  <div class="edit-model-title">
                    <p>新建模块</p>
                    <p>
                      <button class="btn btn-primary">取消</button>
                      <button class="btn btn-primary">确认</button >
                    </p>
                  </div>
                  <div class="edit-title"><span>标题</span><input type="text"></div>
                  <div>
                    <div>
                      <!-- Nav tabs -->
                      <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">文章选项</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">菜单分配</a></li>
                      </ul>
                      <!-- Tab panes -->
                      <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="home">
                          <div class=" wzOption">
                            <div style="width: 50%">
                              <p><span>选择文章</span>
                                <select class="form-control" style="width: 150px;display: inline-block">
                                  <option value="">文章</option>
                                  <option value="">马伊琍</option>
                                  <option value="">姚笛</option>
                                </select>
                              </p>
                            </div>
                            <div style="width: 50%" class="wzOption-right">
                              <div class="show-title ks">
                                <span>显示标题</span>
                                <div class="btn-group" data-toggle="buttons">
                                  <label class="btn btn-primary active">
                                    <input type="checkbox" autocomplete="off" checked>显示
                                  </label>
                                  <label class="btn btn-primary">
                                    <input type="checkbox" autocomplete="off">隐藏
                                  </label>
                                </div>
                              </div>
                              <div class="ks">
                                <span>位置*</span>
                                <select class="form-control" style="width: 150px;display: inline-block">
                                  <option value="">上</option>
                                  <option value="">中</option>
                                  <option value="">下</option>
                                </select>
                              </div>
                              <div class="ks">
                                <span>状态</span>
                                <select class="form-control" style="width: 150px;display: inline-block">
                                  <option value="">发布</option>
                                  <option value="">未发布</option>
                                </select>
                              </div>
                              <div class="ks">
                                <div class="block">
                                  <span class="demonstration">发布日期</span>
                                  <el-date-picker
                                    type="daterange"
                                    placeholder="选择日期范围">
                                  </el-date-picker>
                                </div>
                              </div>
                              <div class="ks">
                                <span>注释</span>
                                <input type="text" class="form-control" style="width: 150px;display: inline-block">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="profile">
                          <div class="ks menu-distribution">
                            <span>模块分配</span>
                            <select class="form-control" style="width: 150px;display: inline-block">
                              <option value="">没有页面</option>
                              <option value="">所有页面</option>
                              <option value="">特定页面</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="create-model-bg" @click="createModelMgClick()"></div>
        </div>
        <operate v-show="operate" @hide-ope="hideOperate()" :opname="opName" :layerSize="layerSize">
            <div slot="op-btn">
                <button type="button" class="btn btn-primary" @click="hideOperate()">取消</button>
                <button type="button" class="btn btn-primary" @click="hideOperate()">确认</button>
            </div>
            <div slot="op-name">

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
                        <button type="button" class="btn btn-default del-model" data-dismiss="modal">关闭</button>
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
        name: 'modelManage',
        data:function(){
            return{
                operate:false,
                opName:"",
                tableData:[],
                createModelShow:false,
                operateType:1,
                layerSize:'sm',
                currentRow:"",
                showtype:1,
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
                this.axios.get('http://octops.cn/model').then((response)=> {
                    this.tableData=response.data.data
                })
            },
            opeShow(text,type,size){
              this.operateType=type;
              this.opName=text;
              this.operate=true;
              this.layerSize=size;
            },
            createModelMgClick() {
              this.showtype=1;
              this.createModelShow=false;
            },
            hideOperate(){
                this.operate=false;
            },
            chooseModel(){
                this.showtype=2;
            },
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            copyData() {
              let timestamp = Date.parse(new Date());
              var data={
                dataId:timestamp,
                modelName:this.currentRow.modelName,
                modelStyle:this.currentRow.modelStyle,
                remarks:this.currentRow.remarks,
                status:this.currentRow.remarks
              }
              console.log()
              this.tableData.push(data);
            },
            delData() {
              var that=this
              this.tableData.forEach(function (value,index,array) {
                if(array[index].dataId==that.currentRow.dataId){
                  array.splice(index,1)
                  return
                }
              })
              $(".del-model")[0].click();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    @import "../../assets/less/common";
    #model-manage {
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
    .choose-model {
        display: flex;
        flex-wrap: wrap;
    }
    .edit-model {
      width: 100%;
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
    .edit-model-title {
      width: 100%;
      display: flex;
      justify-content:space-between;
      align-items: center;
    }
  .edit-title {
    margin-top: 20px;
    padding: 10px 0;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    span {
      display: inline-block;
      width: 80px;

    }
  }
  .wzOption {
     display: flex;
    padding-top: 20px;
    span {
      display: inline-block;
      width: 6rem;
      text-align: right;
      margin-right: 10px;
    }
  }
  .show-title {
    display: flex;
    align-items: center;
  }
  .ks {
    margin-bottom: 20px;
  }
  .menu-distribution {
    span {
      display: inline-block;
      width: 6rem;
    }
    padding: 30px 0;
    border-bottom: 1px solid #eee;
  }
</style>
