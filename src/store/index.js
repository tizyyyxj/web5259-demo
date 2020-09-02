import Vue from 'vue'
import Vuex from 'vuex'

// 安装vuex插件
Vue.use(Vuex)

// 创建并暴露一个 vuex.store 的实例对象
// store 全局的唯一数据源（仓库）
// 配置对象的state :被管理的数据源
export default new Vuex.Store({
    // 状态：整个应用共享的数据
    state:{
        count:1,
        cart:[{
            id:1,
            goodsname:"apple",
            price:200,
            count:2
        }]
    }
})