import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({

    name: "note",
    initialState:[{
           
            title: "Sample Note",
            content: "Sample Notes here"
        },
        {
           
            title: "Sample Note",
            content: "Sample Notes here"
        }
    ],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        edit:(state,action)=>{
            state.splice(action.payload.param, 1, action.payload.values)
        },
        del:(state,action)=>{
            state.splice(action.payload, 1);
        }
    }
       
})
export const {add, edit, del} = noteSlice.actions
export default noteSlice.reducer