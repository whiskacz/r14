import React, { useState} from "react";
import ReactDOM from 'react-dom/client';
import Contact from "./components/Contact";
import './css/index.css'
import Data from './components/Data.json'

export default function R14App() {
    
    const [text, setText] = useState("")

    const handleText = (e) => {
        setText(e.target.value)
    }
    
    return(
    <div className="wrapper">
        <h1>Filter Contacts App</h1>
        <input type="text" onChange={handleText} />
        <div className="container">
           {Data.filter((element) => {
            if(text === ""){
                return element
            } else if (
                element.first_name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) 
            ) {
                return element
            }
           }).map((contact) => <Contact contact={contact} />)}
        </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R14App />)
