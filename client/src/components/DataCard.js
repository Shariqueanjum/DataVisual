import React from 'react'

const DataCard = ({item}) => {
  return (
    <div className='border border-black w-1/4 h-auto ml-12 mt-4 rounded-lg overflow-y-scroll '>
                        <ul className='px-6 list-disc'>
                            <li className='text-lg font-medium list-none'> {item?.topic ? item.topic : "No Info"} </li>
                            <li> {item?.title ? item.title : "No Info"} </li>
                            <li> {item?.insight ? item.insight : "No Info"} </li>
                            <li> {item?.url ? item.url : "No Info"} </li>
                            <li> {item?.region ? item.region : "No Info"} </li>
                            <li> {item?.country ? item.country : "No Info"} </li>
                            <li> {item?.source ? item.source : "No Info"} </li>
                            <li> {item?.pestle ? item.pestle : "No Info"} </li>
                            <li> {item?.start_year ? item.start_year : "No Info"} </li>
                            <li> {item?.end_year ? item.end_year : "No Info"} </li>
                            <li> {item?.added ? item.added : "No Info"} </li>
                            <li> {item?.published ? item.published : "No Info"} </li>
                            <li> {item?.intensity ? item.intensity : "No Info"} </li>
                            <li> {item?.likelihood ? item.likelihood : "No Info"} </li>
                        </ul>


    </div>
  )
}

export default DataCard