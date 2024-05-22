import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maestro from "./pages/Maestro";
import Segunda from './pages/Segunda';
import shook from "./pages/hooks";

const App=()=>(
   <BrowserRouter>
          <Routes>

    <Route exact path="/ruta1" element={<Maestro/>}></Route>
    <Route exact path="/ruta2" element={<Segunda/>}></Route>
    <Route exact path="/*" element={shook}></Route>
          </Routes>
       </BrowserRouter>

)
export default App
