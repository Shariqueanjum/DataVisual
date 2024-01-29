import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice=createSlice({
   name:'dashb',
   initialState:{
    isDashboardOpen:true,
   },
   reducers:{
    toggleDashboard:(state)=>{
        state.isDashboardOpen=!state.isDashboardOpen
    }

   }

});

export const {toggleDashboard}=dashboardSlice.actions;
export default dashboardSlice.reducer;