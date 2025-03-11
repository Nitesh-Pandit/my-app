import "./App.css";
import React, { useState } from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Statement from "./componenet/Statement";
import Statement2 from "./componenet/Statement2";
import Statement3 from "./componenet/Statement3";
import Defaultprops from "./componenet/defaultprops";
import Anmoysous from "./componenet/Anmoysous";
import Goo from "./componenet/Goo";
import ApiSimulation from "./componenet/UseeffectClass"; 
import { StrictMode } from "react";
import TestComponent from "./componenet/customcomp3";
import ImageCarousel from "./componenet/imageCrasual";
import { UserProvider } from "./componenet/use_con_exmp1";
import UseContextExample from "./componenet/use_con_exmp3";
import TotalAmount from "./componenet/TotalAmount";


function App() {
  const [principle, setPrinciple] = useState('');
  const [rate, setRate] = useState('');
  const [duration, setDuration] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateTotal = () => {
    const P = parseFloat(principle);
    const R = parseFloat(rate);
    const T = parseFloat(duration);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
      alert("Please enter valid numbers!");
      return;
    }

    const interest = (P * R * T) / 100;
    const total = P + interest;
    setTotalAmount(total.toFixed(2));
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Statement />
      <Statement2/>
      <Statement3/>
      <Anmoysous abc="Nitesh" xyz="Pandit"/>
      <StrictMode>
    <Defaultprops />
    <br />
    <Defaultprops var1={true} />
    <br />
    <Defaultprops var2={"yellow"} />
    <br />
    <Defaultprops var3={"New Text"} />
    <br />
    <Defaultprops var1={true} var2={"red"} />
    <br />
    <Defaultprops var1={true} var2={"blue"} var3={"abc"} />
  </StrictMode>
<Goo/>

    <ApiSimulation />

<TestComponent/>
<ImageCarousel/>
<UserProvider/>

<UseContextExample />
<TotalAmount
        principle={principle} setPrinciple={setPrinciple}
        rate={rate} setRate={setRate}
        duration={duration} setDuration={setDuration}
        calculateTotal={calculateTotal}
      />

      <button onClick={calculateTotal}>Calculate</button>

      {totalAmount !== null && (
        <h2>Total Amount: ₹{totalAmount}</h2>
      )}

    </>
    
  );
}

export default App;
