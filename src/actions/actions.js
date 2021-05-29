export const addvalue=(data)=>{
return {type: 'ADD', payload:{
    id:new Date().getTime().toString(),data:data
}}
}

export const deletevalue=(id)=>{
    return {type: 'DELETE', id}
    }

    export const deleteallvalues=()=>{
        return {type: 'DELETEALL'}
        }