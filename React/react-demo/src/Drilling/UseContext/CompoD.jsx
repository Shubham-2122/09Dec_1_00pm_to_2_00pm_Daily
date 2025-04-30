import React, { useContext } from 'react'
import { data } from './CompoA'

function CompoD() {

    const {name,setname} = useContext(data)

  return (
    <div>
          <h1>Hello compo D</h1>

          <h1>hello name :- {name}</h1>

          <button onClick={()=>setname("himani patel")}>Change name</button>
    </div>
  )
}

export default CompoD
