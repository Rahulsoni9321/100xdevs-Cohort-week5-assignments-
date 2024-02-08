import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gradient-to-tr from-gray-500 to-white'>
    <Card name={"Rahul Soni"} description={"Full Stack Developer"} interest={['Swimming','Squash','Learning']}></Card>
    </div>
  )
}

function Card(props){

   const linkedin=()=>{
    window.location.assign("https://www.linkedin.com/in/rahul-soni-50b806203/")  
   }
   const github=()=>{
    window.location.assign("https://github.com/Rahulsoni9321/")  
   }
   const twitter=()=>{
    window.location.assign("https://twitter.com/SoniRahul3108")  
   }
  return <div className='w-2/4 h-96  bg-white text-black rounded-lg font-serif border border-1 border-gray-300 shadow-xl '>
     <div className='ml-8 text-3xl font-semibold mt-12 text-center '>{props.name}</div>
    
     <div className='ml-8 text-lg text-gray-500 my-4 font-normal text-center'>{props.description}</div>
     <div className='ml-8 text-2xl font-semibold mb-2'>Interests</div>
     <ul>
     {props.interest.map((interest)=>{
      return <li className='ml-8 text-md font-light text-lg text-gray-600 list-disc list-inside'>{interest}</li>
     })}
     </ul>
     {/* <br></br */}
     <div className='flex ml-7 mt-4'>
    <Button titles={"LinkedIn"} onclick={linkedin}/>
     <Button titles={"Twitter"}  onclick={twitter}/>
      <Button titles={"Github"}  onclick={github}/>
     </div>
     
  </div>
}

function Button({titles,onclick}) {
   return <button onClick={onclick}  className='w-24 h-8 mr-4 bg-blue-500 text-white border border-none rounded-lg'>{titles}</button>
}
export default App
