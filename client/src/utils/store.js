import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import dashboardSlice from "./dashboardSlice";
import accordionSlice from "./accordionSlice";

const store=configureStore({
    reducer:{
      navigation:navSlice,
      dashb:dashboardSlice,
      accordion:accordionSlice
    }
});

export default store;