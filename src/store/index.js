import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

//导航
import nav from './modules/nav'
export default new vuex.Store({
    modules:{
        nav:nav
        //other: other,//其他组件
    }
})