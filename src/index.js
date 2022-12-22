import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./Components/Pages/App";
import { FunctionProvider } from "./context/contextFunction";
import './style.css'
const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
    <> 
    <FunctionProvider>

        <App className="app"/>
    </FunctionProvider>
   
    </>
)