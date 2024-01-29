import { createSlice } from "@reduxjs/toolkit";



const navSlice=createSlice({
    name:"navigation",
    initialState:{
        isSidebarOpen:true,
    },
    reducers:{
        toggleSidebar:(state)=>{
         state.isSidebarOpen=!state.isSidebarOpen
        },

        closeSidebar:(state)=>{
            state.isSidebarOpen=false
        }
    }

});

export const {toggleSidebar , closeSidebar}=navSlice.actions;

export default navSlice.reducer;