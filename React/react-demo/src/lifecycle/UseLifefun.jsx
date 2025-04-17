import React, { useState } from 'react'

function UseLifefun() {

    // 1) mouting phase :- state/props 
    const [name,setname] = useState("himani patel")

    // 2) updating phase :- change name
    const chnagename=()=>{
        setname("vishu patel")
        console.log("updateing phase..!")
    }
    
  return (
    <div>
      <h1>hello Function life cycle</h1>
      <h1>hello name :- {name}</h1>
      <button onClick={chnagename}>Change name</button>
    </div>
  )
}

export default UseLifefun
