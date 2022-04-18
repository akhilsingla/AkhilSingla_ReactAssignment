import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:movieCategory/:movieName" element={<MovieDetail/>}/>
                <Route path="*" element={<div>No Data Found</div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
