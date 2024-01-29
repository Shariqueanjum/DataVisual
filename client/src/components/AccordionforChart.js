import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BarChart from '../charts/BarChart'
import LineChart from '../charts/LineChart'
import DoughnutChart from '../charts/DoughnutChart'
import PieChart from '../charts/PieChart'
import PolarChart from '../charts/PolarChart'
import RadarChart from '../charts/RadarChart'




const Section=({title , description , isVisible , setIsVisible , data , sectionConfig})=>{


 


    return(
        <div className='  border border-gray-300'>

        <div className='flex justify-between '>

           <h1 className='font-normal  p-4 text-xl pl-10'>{description}</h1>
           <img onClick={()=>setIsVisible()}
           className='w-8 h-8 -mt-2'
           alt='caret-logo'
            src={!isVisible ?'https://static.thenounproject.com/png/1916332-200.png' : 'https://static.thenounproject.com/png/196766-200.png'}/>
        
           </div>

           {isVisible && sectionConfig==="PolarChart-DoughnutChart" &&
                <div className='flex'>
             <PolarChart serverData={data}/>
            <DoughnutChart serverData={data}/>
               </div>
           } 


           {isVisible && sectionConfig==="LineChart" &&
                <div >
                <BarChart serverData={data}/>
               </div>
           } 

          {isVisible && sectionConfig==="BarChart" &&
                <div>
                 <LineChart serverData={data}/>
               </div>
           } 

          {isVisible && sectionConfig==="Radar and Pie Charts" &&       
                <div className='flex'>
                 <RadarChart serverData={data}/>
                 <PieChart serverData={data}/>
               </div>
           } 

        
            
            
           
                    

           
         
               
        </div>


    )

}

const AccordionforChart = ({data}) => {
   
  const [sectionConfig , setSectionConfig]=useState("");




  return (
    <div className='mt-4 ml-4'>

    <Section 
    title="PolarChart-DoughnutChart" 
    description="Polar Area and Doughnut Charts - represents number of countries, sectors, topics, pestles, sources, etc are involved"
    isVisible={sectionConfig==="PolarChart-DoughnutChart"}  
    setIsVisible={()=>sectionConfig==="PolarChart-DoughnutChart" 
       ? setSectionConfig("") : setSectionConfig("PolarChart-DoughnutChart")}  
    data={data}
    sectionConfig={sectionConfig}/>


    <Section 
    title="LineChart" 
    description="Line Chart- represents number of projects as per sector"
    isVisible={sectionConfig==="LineChart"}
    setIsVisible={()=>sectionConfig==="LineChart"? setSectionConfig("") : setSectionConfig("LineChart")}
    data={data}
    sectionConfig={sectionConfig}/>




    <Section 
    title="BarChart" 
    description="Bar Chart- represents number of projects in each pestle"
    isVisible={sectionConfig==="BarChart"}
    setIsVisible={()=>sectionConfig==="BarChart"? setSectionConfig("") : setSectionConfig("BarChart")}
    data={data}
    sectionConfig={sectionConfig}/>
     

    <Section 
    title="Radar and Pie Charts"
    description="Radar and Pie Charts- represents number of projects as per pestle"
    isVisible={sectionConfig==="Radar and Pie Charts"}
    setIsVisible={()=>sectionConfig==="Radar and Pie Charts"? setSectionConfig("") : setSectionConfig("Radar and Pie Charts")}
    data={data}
    sectionConfig={sectionConfig}/>




    </div>




      )
 
  


  
}

export default AccordionforChart