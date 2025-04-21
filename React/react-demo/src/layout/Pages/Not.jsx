import React from 'react'
import { useNavigate } from 'react-router-dom'

function Not() {

  const redirect = useNavigate()

  // Function use
  const goback=()=>{
    redirect("/")
  }

  return (
    <div className='container'>
      <h1 className='bg-danger p-5 text-center'>hello Not Found Pages 404</h1>
      <button className='btn btn-primary' onClick={()=>redirect("/")}>Go back to Home</button>
    </div>
  )
}

export default Not
