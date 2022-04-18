import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>
            <Routes>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/details" element={<div> hhfbfb </div>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
