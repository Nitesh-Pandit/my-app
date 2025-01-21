import React, { useState } from 'react'

function Goo() {
    const[name,setName]=useState("RKU")
    const[age,setAge]=useState("67")


    // const[color,setColor]=useState("red")
  return (
    <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
      <h1>This is my name{name}</h1>
      <h1>This is my age{age}</h1>
      <h1>{name}</h1>
    
      Fist: <input type="radio" name="fist" id=""  onClick={()=>{}}/><br />
      second: <input type="radio" name="fist" id="" /><br />
      thid: <input type="radio" name="fist" id="" /><br />
      Fourth: <input type="radio" name="fist" id="" /><br />
      Fifth: <input type="radio" name="fist" id="" /><br />
      Sixth: <input type="radio" name="fist" id="" /><br />

    </div>
  )
}
export default Goo;