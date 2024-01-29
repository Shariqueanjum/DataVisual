import React, { useState } from 'react'
import DataCard from './DataCard';

const Topics = () => {

  const [topicsData , setTopicsData]=useState([]);
  const [searchedText , setSearchedText]=useState("");
  
  const handleSearchResults = async (e)=>{
     e.preventDefault();
     
     try{
  
      const response=await fetch(`http://localhost:5001/api/data/topic/${searchedText}`);
      const data= await response.json();
      if(data.success===true) setTopicsData(data.data);
  
      
  
  
     }
  
     catch(e){
         console.log(e);
     }
  
  
  
  }

  return (
    
    <>
    
    <form onSubmit={handleSearchResults} 
    className='w-3/4 ml-10 '>

       <input onChange={(e)=>setSearchedText(e.target.value)}
       className='w-3/4 py-2 px-2 rounded-md border border-gray-200' 
       type='text' 
       placeholder='Search the result according to topic'/>

       <button 

       className='p-3 text-lg'>Search
       
       </button>
       </form>
       

       

    
      <div className='flex flex-wrap overflow-y-scroll h-screen'>

       { topicsData.length>0 ? topicsData.map((item)=><DataCard key={item.name} item={item}/>) : 
         <p className='text-3xl pt-20 font-bold pl-10'> No data found , please search</p>  }

       </div>
       </>
  )
}

export default Topics