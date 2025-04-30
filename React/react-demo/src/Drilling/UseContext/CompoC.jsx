import React, { useContext } from 'react'
import { data } from './CompoA'


function CompoC() {

    const {data1,setdata1} = useContext(data)

  return (
    <div>
          <h1>Hello compo C</h1>
          <h1>Hello count :- {data1.count}</h1>
          <button onClick={()=>setdata1({count:data1.count + 1})}>incrment</button>
    </div>
  )
}

export default CompoC
