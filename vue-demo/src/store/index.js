import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count:1,
        //这里放全局参数
        demoValue: {}
    },
    mutations: {
        //这里是set方法
        setDemoValue(state, demoValue) {
            state.demoValue = demoValue;
        }
    },

    getters: {
        //get方法
        getDemoValue: state => state.demoValue
    },

    actions: {
        //这个部分我暂时用不上

    },
    modules: {
        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
    }

})
export default store
