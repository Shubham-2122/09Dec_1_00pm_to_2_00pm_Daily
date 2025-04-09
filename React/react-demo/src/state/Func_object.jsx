import React, { useState } from 'react'
import Image_compo from './Image_compo'

function Func_object() {

    // name define , sedata define fucntion change
    const [data,setdata] = useState({
        name : "Himani patel",
        count : 0,
        isimage : true
    })

    // console.log(data)

    const changename = ()=>{
        setdata({
            ...data,
            name : "jigger sir"
        })
    }

  return (
    <div>
      <h1>hello this Function state in object</h1>

      <h1>Hello name :- {data.name}</h1>

      <button onClick={()=>setdata({...data,name : "vishu patel"})}>Change name1</button>
      <button onClick={()=>setdata({...data,name : "shubha jadav"})}>Change name2</button>
      <button onClick={changename}>Change name</button>

      <h1>hello count :- {data.count}</h1>

        {/* spred op ...value */}
      <button onClick={()=>setdata({...data,count : data.count + 1})}>increment</button>
      <button onClick={()=>setdata({...data,count : data.count - 1})}>DEcrement</button>
      <button onClick={()=>setdata({...data,count : 0})}>Zero</button>

    <br /> <br />

    <button onClick={()=>setdata({...data,isimage : false})}>Hide</button>
    <button onClick={()=>setdata({...data,isimage : true})}>SHow</button>
    <button onClick={()=>setdata({...data,isimage : !data.isimage})}>Toggle</button>

      {(data.isimage) ? <Image_compo /> : false}
    </div>
  )
}

export default Func_object
