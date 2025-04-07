// jsx :- javscript syntax xml/extesibale
// jsx html return read and writen
// js vs jsx both are same 0.2s
// jsx varibale define
// varibale javscrip return {}


import React from 'react'

function Hello() {

    let name = "vishu"
    console.log(name)

    let perons = {
        id : 1,
        name :"Himani patel",
        coruse : "Front-end"
    }

    let element = <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

  return (
    <div>
      <h1>Hello h1 tag jsx compo</h1>
      <h1>Hello name :- {name}</h1>

      <h2>Hello name :- {perons.name}</h2>
      <h2>Hello id :- {perons.id} course : {perons.coruse}</h2>

    {element}

    <h3>{50/5}</h3>

    </div>
  )
}

export default Hello
