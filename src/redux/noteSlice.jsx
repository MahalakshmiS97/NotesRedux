import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({

    name: "note",
    initialState:[{
           
            title: "Feedbacks",
            content: "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."
        },
        {
           
            title: "Weekly Task",
            content: "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."
        },
        {
           
            title: "Lyrics",
            content: "Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."
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