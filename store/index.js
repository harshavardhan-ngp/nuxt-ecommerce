import Vue from 'vue'
import Vuex from 'vuex'
import addProd from './addProd'
Vue.use(Vuex)

export const store= new Vuex.Store({
    modules:{
        addProd
    }
})