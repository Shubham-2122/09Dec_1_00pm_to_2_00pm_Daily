// useEffect :- this is for function side effect
// first para this callback/fuction
// secound this opitonl [],[state],
// useEffect  vitrtual  redering 
// useEffect(()=>{
// fetch() 
// },[optional])
// useEffect is a React Hook that lets you synchronize a component with an external system.

import React, { useEffect, useState } from 'react'

function Useeffct() {

    const [count,setcount] = useState(0)

    // empty dep remove
    // useEffect(()=>{
    //     console.log("hello this wihout reder 1")
    //     return(()=>{
    //         console.log("hello with redering 2")
    //     })   
    // })

    // dep null/empty api 
    // useEffect(()=>{
    //     console.log("hello this wihout reder 1")
    //     return(()=>{
    //         console.log("hello with redering 2")
    //     })   
    // },[])
    
    // useEffect(()=>{
    //     console.log("hello this wihout reder 1")
    //         return(()=>{
    //             console.log("hello with redering 2")
    //         }) 
    // },[count])



  return (
    <div>
      <h1>hello this use effect</h1>
      <h1>hello count : {count}</h1>
      <button onClick={()=>{setcount(count+1)}}>increment</button>
    </div>
  )
}

export default Useeffct
