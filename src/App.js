import './App.css';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
   <>
   <Navbar/>
<Routes>
    <Route exact path="/about"element={<About/>}>
    </Route>

    <Route exact path="/"element={<Home/>}>
    </Route>

    </Routes>
    
   </>
      
  
  );
}

export default App;
