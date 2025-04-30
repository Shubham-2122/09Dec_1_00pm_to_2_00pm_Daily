import React from 'react'
import C from './C'

function B({ name, setname }) {
    return (
        <div>
            <h1>Hello this Compoent B</h1>

            <h1>hello this name :- {name}</h1>
            <button onClick={()=>setname("dev patel")}>Change name</button>

            <C name={name} setname={setname} />
        </div>
    )
}

export default B
