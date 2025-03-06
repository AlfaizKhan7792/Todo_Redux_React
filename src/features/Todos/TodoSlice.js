import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : 'Todos',
    initialState : {
        AllTodos : [{id:1, title:"Title", description:"Description"}],
        Edit : {Todo : {} , isEdit : false}
    },
    reducers : {
        // Add
Add : (state , action) =>{
    return {
        ...state,
        AllTodos : [...state.AllTodos , action.payload]
    }
},

// Remove
Remove : (state , action) => {
    return{
        ...state,
        AllTodos : state.AllTodos.filter((item) => item.id !== action.payload)
    }
},

// Edit
Edit : (state , action) =>{
    return{
        ...state,
        Edit : {Todo : action.payload , isEdit : true}
    }
}, 

// Update
Update : (state , action) =>{
    return{
        ...state,
        AllTodos : state.AllTodos.map((item) => item.id === action.payload.id ? action.payload : item),
        Edit : {Todo : {} , isEdit : false}
    }
}

    }
})

export const {Add , Remove , Edit , Update} = TodoSlice.actions
export default TodoSlice.reducer