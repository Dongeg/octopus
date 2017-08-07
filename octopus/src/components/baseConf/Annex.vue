<template>
    <div>
        <div class="operating">
            <button type="button"><i class="iconfont icon-jia"></i>新增</button>
            <button type="button"><i class="iconfont icon-neirongbianji"></i>编辑</button>
            <button type="button"><i class="iconfont icon-icon_delete"></i>删除</button>
        </div>

            <table  class="data_table table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>模块状态</th>
                    <th>编号</th>
                    <th>模块名称</th>
                    <th>模块描述</th>
                    <th>文件类型（逗号隔开）</th>
                    <th>创建时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td><i class="iconfont icon-dui"></i></td>
                    <td>rubik_001</td>
                    <td>附件模块管理edit</td>
                    <td>附件模块管理edit</td>
                    <td>*</td>
                    <td>2016-07-22 15:13:38</td>

                </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    export default {
        name: 'annex',
        data:function(){
            return{


            }
        },
        computed:{

        },
        mounted () {
            this.$nextTick(()=> {
                this.initDataTable();
            });
        },
        methods:{
            initDataTable(){
                $('.data_table').dataTable({
                    "aaSorting": [[ 2, "desc" ]],//默认第几个排序
                    "bStateSave": true,//状态保存
                    "aoColumnDefs": [
                        //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
                        {"orderable":false,"aTargets":[0]}// 制定列不参与排序
                    ],
                    language: {
                        "sProcessing": "处理中...",
                        "sLengthMenu": "显示 _MENU_ 项结果",
                        "sZeroRecords": "没有匹配结果",
                        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
                        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                        "sInfoPostFix": "",
                        "sSearch": "搜索:",
                        "sUrl": "",
                        "sEmptyTable": "表中数据为空",
                        "sLoadingRecords": "载入中...",
                        "sInfoThousands": ",",
                        "oPaginate": {
                            "sFirst": "首页",
                            "sPrevious": "上页",
                            "sNext": "下页",
                            "sLast": "末页"
                        },
                        "oAria": {
                            "sSortAscending": ": 以升序排列此列",
                            "sSortDescending": ": 以降序排列此列"
                        }
                    }
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    @import "../../assets/less/common";
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
</style>
