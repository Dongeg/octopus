<template>
    <!--分类标签模块-->
    <div id="klass">
        <!--头部-->
        <div class="klass-header">
            <select class="form-control">
                <option value="">--类型--</option>
                <option value="QA">--问答知识--</option>
                <option value="POLICY">--政策法规--</option>
                <option value="FINANCING">--融资机构--</option>
                <option value="ORGANIZATION">--机构管理--</option>
                <option value="ACTIVITY">--服务活动资料库--</option>
                <option value="SURVEY">--调查--</option>
                <option value="EXPERT">--专家人才库--</option>
                <option value="PROJECT">--项目信息库--</option>
                <option value="CONTACT">--联系人库--</option>
            </select>
            <button type="button" class="btn btn-primary">筛选</button>
        </div>
        <div class="klass-main">
            <div class="klass-section">
                <div class="section-header">问答知识</div>
            </div>
            <div class="section-main">
                <div class="section-main-title">业务</div>
                <div class="section-main-centent">
                    <span v-for="(item,index) in businessData"
                          @mouseover="showBIndex=index"
                          @mouseout="showBIndex=-1"
                    >
                        {{item}}
                        <a href="javascript:;" class="subitem-delbtn" v-show="showBIndex==index" @click="labelDel('1',item)">×</a></span>
                    <a href="javascript:;" class="subitem-addbtn" @click="opeShow('添加标签',1)">添加标签</a>
                </div>
            </div>
          <div class="klass-section">
            <div class="section-header">内容管理</div>
          </div>
          <div class="section-main">
            <div class="section-main-title">业务</div>
            <div class="section-main-centent">
                    <span v-for="(item,index) in contentData"
                          @mouseover="showCIndex=index"
                          @mouseout="showCIndex=-1"
                    >
                        {{item}}
                        <a href="javascript:;" class="subitem-delbtn" v-show="showCIndex==index" @click="labelDel('2',item)">×</a></span>
              <a href="javascript:;" class="subitem-addbtn" @click="opeShow('添加标签',2)">添加标签</a>
            </div>
          </div>
          <div class="klass-section">
            <div class="section-header">民政互动</div>
          </div>
          <div class="section-main">
            <div class="section-main-title">业务</div>
            <div class="section-main-centent">
                    <span v-for="(item,index) in mzData"
                          @mouseover="showMIndex=index"
                          @mouseout="showMIndex=-1"
                    >
                        {{item}}
                        <a href="javascript:;" class="subitem-delbtn" v-show="showMIndex==index" @click="labelDel('3',item)">×</a></span>
              <a href="javascript:;" class="subitem-addbtn" @click="opeShow('添加标签',3)">添加标签</a>
            </div>
          </div>
        </div>
        <operate v-show="operate" @hide-ope="hideOperate()" @klasssadd="klassadd()" :opname="opName">
            <div slot="op-btn">
                <button type="button" class="btn btn-primary" @click="hideOperate()">取消</button>
                <button type="button" class="btn btn-primary" @click="klassAdd()">确认</button>
            </div>
            <div slot="op-name">
                <form id="form1" method="post" action="">
                    <div class="form-group">
                        <label class="">请输入一个或多个词（多个请用“，”隔开）： </label>
                        <input class="form-control" type="text" id="addItemText" v-model="classAddLabel">
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
        name: 'klass',
        data:function(){
            return{
                classAddLabel:"",
                businessData:[
                    "业务1",
                    "业务2",
                    "业务3",
                    "业务4",
                    "业务5",
                    "业务6"
                ],
              contentData:[
                "业务1",
                "业务2",
                "业务3",
                "业务4",
                "业务5",
                "业务6"
              ],
              mzData:[
                "业务1",
                "业务2",
                "业务3",
                "业务4",
                "业务5",
                "业务6"
              ],
                showBIndex:-1,
                showCIndex:-1,
                showMIndex:-1,
                operate:false,
                opName:"",
                addTo:null,
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
                this.axios.get('http://octops.cn/message').then((response)=> {
                    console.log(response.data)
                })
            },
            opeShow(text,type){
                this.opName=text;
                this.operate=true;
                this.addTo=type;
                this.classAddLabel="";

            },
            hideOperate(){
                this.operate=false;
            },
            klassAdd(){
                var type=this.addTo;
                var obj=null;
                if(type==1){
                  obj="businessData"
                }
                else if (type==2){
                  obj="contentData";
                }
                else {
                  obj="mzData";
                }
                var newData=this.classAddLabel.split(",")
                this[obj]=this[obj].concat(newData);
                this.operate=false;
            },
            labelDel(type,i){
                var obj=null;
                if(type==1){
                  obj="businessData"
                }
                else if (type==2){
                  obj="contentData";
                }
                else {
                  obj="mzData";
                }
                this[obj].forEach(function (value,index,array) {
                    if(array[index]==i){
                        array.splice(index,1)
                        return
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    @import "../../assets/less/common";
    #klass{
        padding-top: 40px;
    }
    .klass-header{
        display: flex;
        padding:10px 0;
        border-bottom: 1px solid #aaa;
        select{
            display: inline-block;
            width: 200px;
            margin:0 10px;
        }
    }
    .section-header{
        color: @blue-plus;
        margin: 25px 20px 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid @blue-plus;
    }
    .section-main {
        margin: 10px 40px 20px;
        padding: 10px 5px;
        background-color: @blue-Less;
    }
    .section-main-title{
        padding: 5px;
    }
    .section-main-centent{
        display: flex;
        flex-wrap:wrap;
        span{
            display: inline-block;
            width: 72px;
            height: 28px;
            margin-right: 10px;
            text-align: center;
            line-height: 28px;
            background-color: #fef6ce;
            border: 1px solid #ead483;
        }
    }
    .subitem-addbtn{
        display: inline-block;
        width: 72px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        background-color: #fef6ce;
        border: 1px dashed #ead483;
    }
    .form-group{
        margin-right: 0;
    }
</style>
