import "./App.css";
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
function App() {
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

    </>
  );
}

export default App;
