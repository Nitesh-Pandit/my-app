import { useState } from "react";
import NewConponnent1 from "./customrequest";

const ShowComp=({var3})=>
(var3?<NewConponnent1/>:null);

function TestComponent(){
    const[show,setshow]=useState(false);

    return(
        <>
        <button onClick={()=>setshow(!show)}>
            {show? "Hide user":"Show user"}
        </button>

        <ShowComp var3={show}/>
        </>
    )
}

export default TestComponent