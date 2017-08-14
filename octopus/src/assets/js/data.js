import Mock from 'mockjs'
let message=Mock.mock('http://octops.cn/message', {
    "data|1-10":[
        {
        "status|0-1": 100,
        'messageNum|+1':"SMS10001",
        'type|1':["Ua"," rubik"],
        'user|1':["个人用户"," 企业用户"],
        'name|1':["用户注册","找回密码","更换手机","帐号注销"],
        'content|1':"尊敬的%s用户，您好，本次注册手机验证码是：%s。10分钟内有效。【柳州统一用户】",
        'dir|1':"个人用户使用手机号码进行帐号注册，需要对手机号码进行验证",
        }
    ]
});
let log=Mock.mock('http://octops.cn/log', {
    "data|1-10":[
        {
                "behaviorName|1":["DeptInfoDataAction"," categoryData","PermissionResourceDataAction"],
            'behaviorDir|1':["删除部门信息"," 新增用户信息","修改用户信息","查询用户信息"],
            'behaviorFunction|1':["Ua"," rubik"],
            'type|1':["delete"," add","edit","search","addSortInfo"],
            'system|1':["DeptInfoDataAction.delete","UserInfoDataAction.add","UserInfoDataAction.edit","UserInfoDataAction.search"],
            'order|1-10':10,
        }
    ]
});
let menu=Mock.mock('http://octops.cn/menu', {
    "data|1-5":[
        {
            "menu":{
                "lv1Nname|1":["首页","园区介绍","信息公开","园区服务"],
                "lv1Link|1":["首页","园区介绍","信息公开","园区服务"],
                "lv2|0-3":[
                    {
                        "lv2Name":"二级菜单",
                        "lv2Link":"二级菜单",
                    }
                ]
            },
        }
    ]
});
let model=Mock.mock('http://octops.cn/model', {
    "data|1-10":[
        {
            "modelName|1":["heizi"," baizi","lanzi"],
            "modelStyle|1":["首页"," 蓝天","白云","草地"],
            "status|0-1": 100,
            "remarks|1":["首页"," 蓝天","白云","草地"],
        }
    ]
});
export default{
    message,
    log,
    menu,
    model

}
