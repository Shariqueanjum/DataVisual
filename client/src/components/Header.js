import React from 'react'
import { useSelector } from 'react-redux';
import { HEADER_LOGO_URL } from '../utils/constant';

const Header = () => {
  const isSidebarOpen=useSelector(store=>store.navigation.isSidebarOpen);


  return (
    <div className={' border border-gray-300 h-16 flex  justify-between items-center  '+ (isSidebarOpen ? 'w-[85%]' : 'w-[92%]')}>
      
      <div className='flex '>
      <img className='w-12 mx-4' alt='dashboard-icon' src={HEADER_LOGO_URL}/>
      <p className='text-3xl font-medium mt-2 text-purple-600'> Visualization Dashboard </p>
      </div>

      <div className='flex flex-row-reverse '>

      <img className='w-8 h-9 mr-4 '
      alt='user-icon' 
      src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'/>

      <img className='w-8 h-9 mr-4  '
      alt='notification-icon' 
      src='https://cdn-icons-png.flaticon.com/512/3119/3119338.png'/>



     <img className='w-10 h-9 mr-4 '
     alt='modes-icon' 
     src='https://static.thenounproject.com/png/4676033-200.png'/>

     </div>


    </div>
  )
}

export default Header