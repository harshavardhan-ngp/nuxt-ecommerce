const state=()=>({
    id:3,
    editForm:[],
    prodList:[
        {
            id:1,
            img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        pname:'MI',
        ptype:'Mobile',
        quantity:1,
        price:'12000',
        cardOne:'start'
    },
    {
        id:2,
        img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    pname:'Dell',
    ptype:'Laptops',
    quantity:3,
    price:'72000',
    cardOne:'start'
    },
    ]
});

const getters={
    showList(state){
        console.log('state',state.prodList);
        return state.prodList
    },
    editProd(state){
        return state.editForm
    }
};

const mutations={
    setModal(state){
        state.showModal=!state.showModal
    },
    addList(state, payload){
        payload['id']=state.id++
        state.prodList.push(payload)
        // console.log('prod:',state.prodList);
    },
    delFromList(state, payload){
        console.log('delPayload:',payload);
        state.prodList=state.prodList.filter(ele=>{ return ele.id != payload})
    },
    updtFromList(state, payload){
        state.editForm.push(state.prodList.find(ele=>ele.id==payload))
        console.log('updtPayload:',state.editForm, payload);
    },
};

const actions={
    changeModal({commit}){
        console.log('in actions');
        commit('setModal')
    },
    appendList({commit}, payload){
        commit('addList', payload)
    },
    delProd({commit}, payload){
        commit('delFromList', payload)
    },
    updtProd({commit}, payload){
        commit('updtFromList', payload)
    },
};

export default{
    state,
    mutations,
    actions,
    getters
};