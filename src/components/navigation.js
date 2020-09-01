import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import styled from "styled-components"
import { Hamburger_menu } from "./hamburger_menu"
import { motion } from "framer-motion"
 
const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 32px;
background: var(--site-header);
margin-bottom: 32px;
box-shadow: 0 0 30px var(--card-shadow);
border-radius: 24px;
align-items: center;
position: sticky;
top: 32px;

  .logo {
    padding: 15px 0;
  }
  ul {
    list-style: none;
    display: inline;
    height: 5px;
  }
  li {
    display: inline;
    padding-right: 20px;
  }
`

const MenuItems = styled.nav`
width: auto;
height: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`

export default (props) => (

  <Nav>
    <div className="logo">
      Nav Bar
    </div>
<MenuItems>
<Hamburger_menu/>
    <ul>
      <li>Home</li>
      <li>About Me</li>
      <li>My Work</li>
      <li>Contact Me</li>
    </ul>
    <ThemeChanger />
</MenuItems>
  </Nav>


//       <header className="site-header">
//       <div className="site-logo">
//       Logo goes here
//       </div>
//         <div className="site-title">
// Simonlucas.design
//         </div>


//   <nav className="navigation"> 
//     <Link to="/home">Home</Link>
//     <Link to="/about">About Me</Link>
//     <Link to="/projects">Projects</Link>
//     <Link to="/contact">Contact</Link>
//     <ThemeChanger/>
//   </nav>
  
//         </header>
  
)