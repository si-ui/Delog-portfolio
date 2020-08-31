import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (


      <header className="site-header">
        <div className="site-title">
Simonlucas.design
        </div>


  <nav className="navigation"> 
    <Link to="/home">Home</Link>
    <Link to="/about">About Me</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
        </header>
  
)