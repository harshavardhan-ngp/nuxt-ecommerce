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
        // PAYLOAD = ShopList data
        const data=state.cartList.find(ele=> ele.id==payload.id)
        if (data && payload.quantity){
            // console.log(data);
            data.quantity+=1
            data.total=data.quantity*data.price
            // state.cartList.push(payload)
            payload.quantity-=1
        }
        else if(payload.quantity){
            state.cartList=[...state.cartList,{
                id:payload.id,
                pname:payload.pname,
                img:payload.img,
                ptype:payload.ptype,
                price:Number(payload.price),
                quantity:1,
                total:payload.price*1
            }]
            payload.quantity-=1
        }
    },
    incQunatity(state, payload){
        // PAYLOAD = ProdList single item
        const data=state.cartList.find(ele=> ele.id==payload.id)
        if (data && payload.quantity){
            // console.log(data);
            data.quantity+=1
            data.total=data.quantity*data.price
            payload.quantity-=1
        }
    },
    decQuantity(state, payload){
        // PAYLOAD = ProdList single item
        const data=state.cartList.find(ele=> ele.id==payload.id)
        if (data && data.total>0){
            // console.log(data);
            data.quantity-=1
            data.total=data.quantity*data.price
            payload.quantity+=1
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
        commit('incQunatity',payload)
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