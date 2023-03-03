import Vue from 'vue'
import Vuex from 'vuex'
import addProd from './addProd'
import cart from './cart'
Vue.use(Vuex)

export const strict = false;
export const store= new Vuex.Store({
    modules:{
        addProd,
        cart
    }
})