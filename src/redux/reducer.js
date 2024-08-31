const initalTab={
    activetab:'home'
}

export const reducer=(state=initalTab,action)=>{
    switch(action.type){
        case 'ACTIVE_TAB':
            return {...state,activetab:action.payload}
        default:
            return state
    }
}