const state=()=>({
    id:3,
    filterType:'',
    editForm:[],
    prodList:[
        {
            id:1,
            img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        pname:'MI',
        ptype:'Mobile Phones',
        quantity:1,
        price:'12000',
        cardOne:'start',
        imgName:'',
        genRandom:0

    },
    {
        imgName:'',
        id:2,
        img:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    pname:'Dell',
    ptype:'Laptops',
    quantity:3,
    price:'72000',
    cardOne:'start',
    genRandom:1
    },
    ]
});

const getters={
    showList(state){
        if(state.filterType){
            return state.prodList.filter(ele=>ele.ptype==state.filterType)
        }
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
        payload['genRandom']=Math.floor(Math.random()*5)
        state.prodList.push(payload)
        // console.log('prod:',state.prodList);
    },
    delFromList(state, payload){
        console.log('delPayload:',payload);
        state.prodList=state.prodList.filter(ele=>{ return ele.id != payload})
    },
    updtFromList(state, payload){
        state.editForm=[]
        state.editForm.push(state.prodList.find(ele=>ele.id==payload))
        console.log('updtPayload:',state.editForm, payload);
    },
    updtMainList(state, payload){
        const data=state.prodList.find(ele=>ele.id==payload.id)
        console.log('listUpdate:', payload, data);
        data=payload
    },
    updateType(state, payload){
        state.filterType=payload
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
    delProd({commit}, payload){
        commit('delFromList', payload)
    },
    updtProd({commit}, payload){
        commit('updtFromList', payload)
    },
    updtList({commit}, payload){
        commit('updtMainList', payload)
    },
    setType({commit}, payload){
        commit('updateType', payload)
    }
};

export default{
    state,
    mutations,
    actions,
    getters
};