const state=()=>({
    credential:{
    uname:'',
    password:''
    }
})

const getters={
    showCredential(state){
        return state.credential
    }
}

const mutations={
    addUser(state, payload){
        console.log(payload);
     state.credential=payload   
    }
}

const actions={
    register({commit}, payload){
        commit('addUser', payload)
    }
}

export default{
    state,
    getters,actions,mutations
}