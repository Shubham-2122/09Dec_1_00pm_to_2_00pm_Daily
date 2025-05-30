import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from './todoSlice'

function Todolist() {

    const todo = useSelector((state)=>state.todo.todos)

    console.log(todo)

    const dispatch = useDispatch()

  return (
    <div>
      <ul>
        {
            todo && todo.map((data,index)=>{
                return(
                    <li>{data} <button onClick={()=>dispatch(removetodo(index))}>Delete</button> <button>update</button></li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Todolist
