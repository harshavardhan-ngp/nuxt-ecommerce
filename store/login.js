const state=()=>({
    credential:[],
    duplicate:false,

})

const getters={
    hasDuplicate(state){
        return state.duplicate
    },
    showCredential(state){
        return state.credential
    }
}

const mutations={
    addUser(state, payload){
        console.log(payload);
        const data=state.credential.find(ele=>(ele.uname==payload.uname))
        if(data && data.uname == payload.uname && data.password==payload.password){
            state.duplicate=true
            return false
        }
        state.credential.push(payload)   
        state.duplicate=false
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