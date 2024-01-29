import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../utils/navSlice'
import { toggleDashboard } from '../utils/dashboardSlice';
import { listItems } from '../utils/helper';
import DashboardComponents from './DashboardComponents';
import { Link } from 'react-router-dom';
import { DASHBOARD_ICON_URL, DASHBOARD_TOGGLE_ICON_URL, HOME_ICON_URL, SIDEBAR_ICON_URL, SIDEBAR_LOGO_URL } from '../utils/constant';

const Sidebar = () => {

    const dispatch=useDispatch();
    const isSidebarOpen=useSelector(store=>store.navigation.isSidebarOpen);
    const isDashboardOpen=useSelector(store=>store.dashb.isDashboardOpen);

    const handleSidebar=()=>{
         dispatch(toggleSidebar())
    }

    const handleDashboard=()=>{
        dispatch(toggleDashboard())
    }

    


  return (
    <div className={(isSidebarOpen ? 'w-[15%]' : 'w-[8%]' ) + ' h-auto border border-gray-400 relative'}>

    <div className='flex items-center'>
        <img  className="w-16 rounded-full ml-3 mt-2" alt='logo' src={SIDEBAR_LOGO_URL}/>

        <p className={(isSidebarOpen ? 'block' : 'hidden') +' p-3 text-xl font-semibold'}>Data Visual</p>

        <img  className={(isSidebarOpen ? 'ml-12' : 'ml-5') +  ' w-6 -mt-10'} alt='sidebar-icon' src={SIDEBAR_ICON_URL} onClick={handleSidebar}/>

    </div>

     <div className='mt-8 flex flex-row items-center'>
      <img className='w-10 mx-4'
      alt='home-icon' 
      src={HOME_ICON_URL}/>

      <p className={(isSidebarOpen ? 'block' : 'hidden') +  ' p-3 text-xl font-semibold'}><Link to={'/'}>Home</Link></p>


     </div>
      
      <div className='mt-8 text-xl font-semibold flex flex-row items-center'>
        <img className='w-10 mx-4' alt='dashboard-icon' src={DASHBOARD_ICON_URL}/>

        <p className={isSidebarOpen ? 'block' : 'hidden'}> <Link to={"/dashboard"}> Dashboard </Link> </p>

        <img className='w-8 ml-3 bg-gray-300' onClick={handleDashboard} 
        alt='toggle-icon' 
        src={DASHBOARD_TOGGLE_ICON_URL}/>

      </div>
      
      {isDashboardOpen && isSidebarOpen &&
      <div>
        {listItems.map((item) =>(
         <Link key={item.name} to={'/' + item.name}> <DashboardComponents  item={item}/> </Link>))}
      </div>
      }


    </div>
  )
}

export default Sidebar