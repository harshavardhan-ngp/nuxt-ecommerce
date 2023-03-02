const state=()=>({
    showModal: false,
    id:2,
    prodList:[
        {
            id:0,
            img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        pname:'MI',
        ptype:'Mobile',
        quantity:1,
        price:'12000',
        cardOne:'start'
    },
    {
        id:1,
        img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    pname:'Dell',
    ptype:'laptopm',
    quantity:3,
    price:'72000',
    cardOne:'start'
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
        payload['id']=state.id++
        state.prodList.push(payload)
        // console.log('prod:',state.prodList);
    },
    cardFlip(state, payload){
        console.log('flip:',payload);
        const data = state.prodList.find(ele=>ele.id==payload)
        console.log('flip-data:',data);
        data.cardOne=data.cardOne=='start'?'flipped':'start'
    },
    delFromList(state, payload){
        console.log('delPayload:',payload);
        state.prodList=state.prodList.filter(ele=>{ return ele.id != payload})
    }
};

const actions={
    changeModal({commit}){
        console.log('in actions');
        commit('setModal')
    },
    appendList({commit}, payload){
        commit('addList', payload)
    },
    flipCard({commit}, payload){
        commit('cardFlip', payload)
    },
    delProd({commit}, payload){
        commit('delFromList', payload)
    }
};
export default{
    state,
    mutations,
    actions,
    getters
};