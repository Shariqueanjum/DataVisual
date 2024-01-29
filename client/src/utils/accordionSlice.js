import { createSlice } from "@reduxjs/toolkit";

const accordionSlice=createSlice({
    name:'accordion',
    initialState:{
        isAnyoneOpen:false,
        accordionIconForOff:'https://static.thenounproject.com/png/1916332-200.png',
        accordionIconForOnn:'https://static.thenounproject.com/png/196766-200.png',
    },
    reducers:{
        toggleIsAnyOneOpen :(state)=>{
            state.isAnyoneOpen=!state.isAnyoneOpen
        }
    }

});

export const {toggleIsAnyOneOpen}=accordionSlice.actions;
export default accordionSlice.reducer;