import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("himani patel")

  return (
    <div>
      <h1>Hello this Compoent A</h1>
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
