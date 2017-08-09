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
export default{
    message,

}
