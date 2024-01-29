import React from 'react'

const DashboardComponents = ({item}) => {
  return (
    <div className='flex flex-row items-center pl-16 m-3 mb-6'>
    <img className='w-9'
    alt={item.alt} 
    src={item.url}/>
    <p className='text-lg font-medium pl-3'>{item.name}</p>
  </div>
  )
}

export default DashboardComponents