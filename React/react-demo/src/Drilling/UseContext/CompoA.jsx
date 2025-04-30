import React, { createContext, useState } from 'react'
import CompoD from './CompoD'
import CompoB from './CompoB'
import CompoC from './CompoC'

export const data = createContext()

function CompoA() {

    const [name,setname] = useState("Vishu patel")

    const [data1,setdata1] = useState({
        count : 0
    })

  return (
    <div>
      <h1>Hello compo A</h1>

      {/* 1) create context */}
      {/* 2) provide data context */}
      {/* 3) useContext */}

      <data.Provider value={{name,setname,data1,setdata1}}>
        <CompoD />
        <CompoB />
        <CompoC />
      </data.Provider>
    </div>
  )
}

export default CompoA
