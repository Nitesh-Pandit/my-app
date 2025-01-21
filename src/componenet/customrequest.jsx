import { use, useEffect,useState } from "react";

import {Promise, resolve} from "bluebird";
Promise.config({cancellation:true});

function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id:2,name:"Nitesh pandit"})
        },4000)
    });
}

function NewConponnent1(){
    const[id,setid]=useState("loading.....");
    const[name,setName]=useState("loading.....");

    useEffect(()=>{
        const promise=fetchUser().then((val1)=>{
            setid(val1.id);
            setName(val1.name);
        })

        return()=>{
            promise.cancel();
        }
    });
    return(
        <div>
            User Id: {id},<br/>
            Name: {name}
        </div>
    )
}

export default NewConponnent1