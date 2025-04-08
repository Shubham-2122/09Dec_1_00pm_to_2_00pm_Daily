// hooks :- it's comana logic data 
// hooks are resuse
// hooks data easy read
// 1) useState const [state,setstate] = useState()
// hook only use for function
// useState is a React Hook that lets you add a state variable to your component.

import React, { useState } from 'react'
import Image_compo from './Image_compo'

function Func_state() {

    //  varible define , setname function = usestate()
    const [name,setname] = useState("himani patel")
    const [count,setcount] = useState(0)
    const [isImage,setisimage] = useState(true)

    console.log(name)
    
    const name2 =()=>{
        setname("shubham jadav")
    }

  return (
    <div>
      <h1>hello this function compo</h1>
      <h1>hello name :- {name}</h1>
      <button onClick={()=>setname("vishu patel")}>Change name</button>
      <button onClick={name2}>Change name2</button>

      <h1>hello count :- {count}</h1>
      <button onClick={()=>setcount(count + 1)}>Increment</button>
      <button onClick={()=>setcount(count - 1)}>Deccrement</button>
      <button onClick={()=>setcount(0)}>Zero</button>

    <br /> <br />
    <button onClick={()=>setisimage(false)}>Hide</button>
    <button onClick={()=>setisimage(true)}>Show</button>
    <button onClick={()=>setisimage(!isImage)}>Toggle</button>

    {(isImage)?<Image_compo /> : false}

    </div>
  )
}

export default Func_state
