import React, { useEffect, useState } from 'react'
import DataCard from './DataCard'

const Home = () => {
  
  const [mainData , setMainData]=useState([]);
  const [searchedText, setSearchedText]=useState(" ");
  const[limit,setLimit]=useState(100);
  const visibleData=mainData.slice(0,limit);




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


 if(!mainData) return <p className='text-xl font-medium'>Loading...</p>
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


          <div className='flex flex-row flex-wrap flex-grow-3 overflow-y-scroll h-screen'>
           {visibleData.map((item,index)=> <DataCard item={item} key={index}/>)}
          </div>

              

       
    </div>
    
  )
}

export default Home