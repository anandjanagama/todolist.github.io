
const initialstate={list:[]
};
const reducers=(state=initialstate, action)=>{
    switch(action.type){
    case "ADD" : 
         const {id,data}= action.payload;
         if(data){
             if(data.length>2){
                return{ 
                    ...state,list:[
                        ...state.list,{id:id,data:data}
                    ]
                
                    
                }
             }
            
         }
    
    case "DELETE" : const newlist= state.list.filter((elem)=>elem.id !== action.id);
    return {
        ...state, list: newlist,
    }

    case "DELETEALL" : 
    return {
        ...state, list: [],
    }
    default: return state;

}


}
export default reducers;