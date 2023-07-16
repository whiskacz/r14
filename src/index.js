import React from "react";
import ReactDOM from 'react-dom/client';
import Contact from "./components/Contact";
import './css/index.css'
import Data from './components/Data.json'

export default function R14App() {
    return(
    <div className="wrapper">
        <h1>Filter Contacts App</h1>
        <input type="text" />
        <div className="container">
            {Data.map((Data) => <Contact Data={Data} />)}
        </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R14App />)
