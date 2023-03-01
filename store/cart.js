const state=()=>({
    cartList:[]
});

const getters={
    showCart(state){
        return state.cartList
    }
};

const mutations={
    addCart(state, payload){
        const data=state.cartList.find(ele=> ele.id==payload.id)
        if (data){
            // console.log(data);
            data.quantity+=1
            data.total=payload.quantity*payload.price
            // state.cartList.push(payload)
        }
        else{
            payload.quantity=1
            payload.price=Number(payload.price)
            payload['total']=payload.quantity*payload.price
            state.cartList.push(payload)
        }
    },
    decQuantity(state, payload){
        const data=state.cartList.find(ele=> ele.id==payload.id)
        if (data && data.total>0){
            // console.log(data);
            data.quantity-=1
            data.total=payload.quantity*payload.price
            // state.cartList.push(payload)
        }
    },
    delFromCart(state){
        // console.log(state.cartList);
        state.cartList=state.cartList.filter(ele=>(
            ele.total>0
        ))
    },
};

const actions={
    appendCart({commit}, payload){
        commit('addCart', payload)
    },
    addQuan({commit},payload){
        commit('addCart',payload)
    },
    delQuan({commit},payload){
        commit('decQuantity',payload)
    },
    removeFromCart({commit}){
        commit('delFromCart')
    }
};
export default{
    state,
    mutations,
    actions,
    getters
};