import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "./ActionTypes";

const initialData = {
    list:[]
};


const todoReducer = (state=initialData,action) =>{
    switch(action.type){
        case ADD_TODO:
            const {id,data} = action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case DELETE_TODO: 
            prompt("are you sure ");
           const newList =  state.list.filter((element)=>element.id != action.id)
            return{
                    ...state,
                    list:newList
                } 
        case REMOVE_TODO:
            if(state.list.length == 0){
                alert('empty List ');
                return;
            }
            return{
                list:[]
            }           
        default : return state;    
    }
};
export default todoReducer;