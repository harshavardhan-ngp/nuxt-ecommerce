import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state=()=>({
    showModal: false,
    prodList:[
        {img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        pname:'MI',
        ptype:'Mobile',
        quantity:1,
        price:'12000'
    }
    ]
})

export const getters={
    isModal(state){
        return state.showModal
    },
    showList(state){
        return state.prodList
    }
}

export const mutations={
    setModal(state){
        state.showModal=!state.showModal
    },
    addList(state, payload){
        state.prodList.push(payload)
        // console.log('prod:',state.prodList);
    }
}

export const actions={
    changeModal({commit}){
        commit('setModal')
    },
    appendList({commit}, payload){
        commit('addList', payload)
    }
}