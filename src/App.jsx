import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Nav from "./components-temp/Nav";
const App = ()=>{

  return <>
  
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route  path = '/'  element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;