import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import Example from "./Example";
import Home from "../PageComponents/Home";
import Contact from "../PageComponents/Contact";
import About from "../PageComponents/About";
import NavBar from "../PageComponents/NavBar";


const App = () => {
    return(
        <>
        
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<LoginPage/>}/>
                <Route path="/navbar" element={<NavBar/>}>
                    <Route path="/navbar/" element={<Home/>}/>
                    <Route path="/navbar/contact" element={<Contact/>}/>
                    
                    <Route path="/navbar/about" element={<About/>}/>
                </Route>
                <Route path="/example" element={<Example/>}/>
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;