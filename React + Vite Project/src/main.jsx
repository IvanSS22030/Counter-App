import React from 'react';
import  ReactDom from 'react-dom/client';
import HelloWorldApp from './HelloWorldApp';
import Borrable from './FirstApp';
import './style.css';
import CounterApp from './CounterApp';

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        {/* <HelloWorldApp/> */}
        <CounterApp value = {20}/>
       

    </React.StrictMode>
    
    )
