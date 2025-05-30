import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from './todoSlice'

function Addtodo() {

    const [user,setuser] = useState("")

    const dispatch = useDispatch()

    const Addtodos=(e)=>{
        e.preventDefault()
        dispatch(addtodo(user))
        setuser("")
    }

  return (
    <div>
      <form action="" onSubmit={Addtodos}>
        <input type="text" value={user} onChange={(e)=>setuser(e.target.value)} placeholder='Enter your name' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Addtodo
