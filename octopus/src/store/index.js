import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    isLoading:false,//是否登陆
    loadingAnimate:false,  //是否显示登陆动画
  },
  getter:{},
  mutations:{
    updateLoadingState(state,flag){
      state.isLoading=flag
    },
    updateLoadingAnimate(state,flag){
      state.loadingAnimate=flag
    }
  },
  actions:{
    onLoading(context,flag){
      context.commit("updateLoadingState",flag);
    },
    showAnimate(context,flag) {
      context.commit("updateLoadingAnimate",flag);
    }
  },
  modules:{}
})
export default store
