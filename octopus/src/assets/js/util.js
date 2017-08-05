export default{
    install(Vue,options)
    {
        Vue.prototype.a = function () {
          console.log("这是自定义插件")
        }
    }
}