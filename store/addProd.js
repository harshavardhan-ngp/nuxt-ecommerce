const state=()=>({
    showModal: false,
    prodList:[
        {img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        pname:'MI',
        ptype:'Mobile',
        quantity:1,
        price:'12000'
    },
        {img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        pname:'Dell',
        ptype:'laptopm',
        quantity:3,
        price:'72000'
    },
    ]
});

const getters={
    isModal(state){
        return state.showModal
    },
    showList(state){
        return state.prodList
    }
};

const mutations={
    setModal(state){
        state.showModal=!state.showModal
    },
    addList(state, payload){
        state.prodList.push(payload)
        // console.log('prod:',state.prodList);
    }
};

const actions={
    changeModal({commit}){
        console.log('in actions');
        commit('setModal')
    },
    appendList({commit}, payload){
        commit('addList', payload)
    }
};
export default{
    state,
    mutations,
    actions,
    getters
};