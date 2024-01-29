import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import store from "./utils/store";
import Year from "./components/Year";
import Pestle from "./components/Pestle";
import Country from "./components/Country";
import Sector from "./components/Sector";
import Region from "./components/Region";
import Topics from "./components/Topics";
import Intensity from "./components/Intensity";
import Likelihood from "./components/Likelihood";




const appRouter=createBrowserRouter([
     {

        path:"/",
        element:<AppLayout/>,
        children:[
           
          {
            path:"/",
            element:<Home/>
          },

          {
            path:"/dashboard",
            element:<Dashboard/>
          },

          {
            path:"/year",
            element:<Year/>
          },

          {
            path:"/intensity",
            element:<Intensity/>
          },

          {
            path:"/pestle",
            element:<Pestle/>
          },

          {
            path:"country",
            element:<Country/>
          },

          {
            path:"sector",
            element:<Sector/>
          },

          {
            path:"region",
            element:<Region/>
          },

          {
            path:"likelihood",
            element:<Likelihood/>
          },

          {
            path:"topics",
            element:<Topics/>
          },

   

        ]

     }





])




function App() {
  return (
  <Provider store={store}>
   <div>
    <RouterProvider router={appRouter}/>
   </div>
   </Provider>
  )
}

export default App;
