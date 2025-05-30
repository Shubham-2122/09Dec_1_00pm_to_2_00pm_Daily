import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './counterSlice'

function Counter() {

    const count = useSelector((state)=>state.count.value)

    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello This Counter data</h1>

      <h1>Hello count :- {count}</h1>

      <button onClick={()=>dispatch(increment())}>increment</button>

      <button onClick={()=>dispatch(decrement())}>decrement</button>

      <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Counter
