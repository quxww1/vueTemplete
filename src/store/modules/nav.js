export default {
    state:{
        current :0,
        isShow:true
    },
    mutations:{
        set(state,n){
            state.current = n
        },
        hidden(state,bool){
            state.isShow = bool;
        }

    },
    actions:{ 
        
    },
    getters:{
        
    },
}