import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Clans from "./Pages/Clans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vtmclans-frontend/"
         element={<Home/>}/>
        <Route path="/vtmclans-frontend/:clanId"
         element={<Clans/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;