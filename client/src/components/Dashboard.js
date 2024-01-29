import React, { useEffect, useState } from 'react'
import AccordionforChart from './AccordionforChart';



const Dashboard = () => {

  const [mainData , setMainData]=useState([]);
  const [searchedText, setSearchedText]=useState(" ");


  const handleSearchResults=async(e)=>{
   
    e.preventDefault();
    
    try{
      
     const response = await fetch(`http://localhost:5001/api/data/any/${searchedText}`);

     const data= await response.json();
      setMainData(data.data);
     
     console.log(mainData,'after filtering')
    }
    catch(e){
      console.log(e);
    }


}


const getDataFromOurServer =async()=>{
   
  try{
         const response = await fetch("http://localhost:5001/api/data/all");
        const data= await response.json();
          //console.log(data.data);
          setMainData(data.data);
         
          console.log(mainData , 'this is our data before filtering')

     }

 catch(e){
    console.log(e)
}

}


useEffect(()=>{
 
getDataFromOurServer();

},[])








  return (
    <div>
     
     <form onSubmit={handleSearchResults}
        className='w-3/4 ml-10 '>

           <input onChange={(e)=>setSearchedText(e.target.value)}
           className='w-3/4 py-2 px-2 rounded-md border border-gray-200' 
           type='text' 
           placeholder='Search by Sector Name, Topic, Title, Pestle, Source, Insight'/>

           <button 

           className='p-3 text-lg'>Search
           
           </button>

          </form>

        <AccordionforChart data={mainData}/>




    </div>
  )
}

export default Dashboard