import React, { useReducer } from 'react'

const inital = 0;

export function reducer(state,action){
    switch (action) {
        case 'incement':
            return state + 1;
            break;
        case 'decement':
            return state - 1;
            break;
        case 'zero':
            return inital;
            break;
    
        default:
            return state
            break;
    }
}

function UseRedu() {

    // varibale name , dispatch
    const [count,dispatch] = useReducer(reducer,inital)

  return (
    <div>
      <h1>Hello reducer logic</h1>
      <h1>hello count :- {count}</h1>
      <button onClick={()=>{dispatch("incement")}}>incement</button>
      <button onClick={()=>dispatch("decement")}>Decement</button>
      <button onClick={()=>dispatch('zero')}>zero</button>
    </div>
  )
}

export default UseRedu
