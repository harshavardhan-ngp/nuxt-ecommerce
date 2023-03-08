const state=()=>({
    id:5,
    duplicate:false,
    filterType:'',
    editForm:[],
    prodList:[
        {
            id:1,
            img:require("@/assets/iphn.jpeg"),
        pname:'iphone',
        ptype:'Mobile Phones',
        quantity:1,
        price:'12000',
        imgName:'',

    },
    {
        imgName:'',
        id:2,
        img:require("@/assets/dell.jpg"),
    pname:'Dell',
    ptype:'Laptops',
    quantity:3,
    price:'72000',
    },
    {
        imgName:'',
        id:3,
        img:require("@/assets/shirts.jpeg"),
    pname:'shirts',
    ptype:'Fashion',
    quantity:5,
    price:'12000',
    },
    {
        imgName:'',
        id:4,
        img:require("@/assets/earbuds.jpeg"),
    pname:'ear buds',
    ptype:'Accessories',
    quantity:11,
    price:'699',
    },
    
    ]
});

const getters={
    hasDuplicate(state){
        return state.duplicate
    },
    showList(state){
        if(state.filterType){
            return state.prodList.filter(ele=>ele.ptype==state.filterType)
        }
        console.log('state',state.prodList);
        return state.prodList
    },
    editProd(state){
        return state.editForm
    },
    showType(state){
        return state.filterType
    }
};

const mutations={
    
    addList(state, payload){
        payload['id']=state.id++
        const data=state.prodList.find(ele=>(ele.pname==payload.pname))
        if(data && data.pname == payload.pname && data.ptype==payload.ptype){
            state.duplicate=true
            return false
        }
        state.duplicate=false
        state.prodList.push(payload)

        // console.log('prod:',state.prodList);
    },
    delFromList(state, payload){
        console.log('delPayload:',payload);
        state.prodList=state.prodList.filter(ele=>{ return ele.id != payload})
    },
    getById(state, payload){
        state.editForm=[]
        state.editForm.push(state.prodList.find(ele=>ele.id==payload))
        console.log('updtPayload:',state.editForm, payload);
    },
    updtMainList(state, payload){
        const data=state.prodList.find(ele=>ele.id==payload.id)
        data.id = payload.id
        data.img = payload.img
        data.pname = payload.pname
        data.ptype = payload.ptype
        data.price = payload.price
        data.quantity = payload.quantity
        data.imgName = payload.imgName
        console.log('listUpdate:', data, payload);
        // data=payload
    },
    updateType(state, payload){
        state.filterType=payload
    }
};

const actions={
    appendList({commit}, payload){
        commit('addList', payload)
    },
    delProd({commit}, payload){
        commit('delFromList', payload)
    },
    getProd({commit}, payload){
        commit('getById', payload)
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