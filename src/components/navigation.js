import React from "react"
import { useState } from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from "styled-components"
import { Hamburger_menu } from "./hamburger_menu"
import { NavbarLinks } from "./navbar-links"
import { motion } from "framer-motion"
 


// ${({ isOpen }) => isOpen ? '32px' : '64px'}
const NavigationItems = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isDarkMode, setDarkMode] = useState(false)

  const Logo = styled.div`
width: 100px;
height: auto;
position: relative;
@media (max-width: 720px) {
  width: 100px;
  height: auto;
  position: absolute;
  left: 20px;
  top: 27px;
}
`

  const Nav = styled(motion.nav)`
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
z-index: 1;

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
  @media (max-width: 720px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: var(--site-header);
    box-shadow: 0 0 30px var(--card-shadow);
    border-radius: 24px;
    justify-content: space-between;
    align-items: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

  const MenuItems = styled.nav`
width: auto;
height: 10px;
display: flex;
top: 400px;
position: realtive;
justify-content: space-between;
align-items: center;
@media (max-width: 720px) {
  flex-direction: column;
  height: 100%;
  margin-top: 100px;
}
`

  const MenuItem = styled.li`
width: 100%;
height: 100px;
@media (max-width: 720px) {
  height: 40px;
  display: block !important;
  width: 100%;
}
`

  const UnorderedList = styled.ul`
width: 100%;
height: 100px;
@media (max-width: 720px) {
  height: 500px;
}
`

  const ThemeChangerWrapper = styled.div`
bottom: 20px;
@media (max-width: 720px) {
  position: relative;
}
`

  const MenuButtonWrapper = styled.div`
width: 48px;
height: 48px;
position: absolute;
right: 10px;
top: 10px;
display: none;
@media (max-width: 720px) {
  width: 48px;
  height: 48px;
  display: block;
}
`

const variants = {
  initial: {
    height: 200,
  },
  open: {
    height: 350,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.67, 0.83, 0.67]
    },
  },
  closed: {
    height: 0,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.67, 0.83, 0.67]
    },
  },
}



  return (
    <Nav 
    initial={{ height: 0}}
    animate={isMenuOpen ? { height:350} : { height:0}}

     >
    <Logo>
      Logo
      </Logo>

    {/* <MenuButtonWrapper>   */}
    <MenuButtonWrapper onClick={() => setMenuOpen(!isMenuOpen)} >     
    <Hamburger_menu  isMenuOpen={isMenuOpen} isDarkMode={true} />
    </MenuButtonWrapper>
    {/* onClick={() => setMenuOpen(!isMenuOpen)} */}

<MenuItems>

    <UnorderedList>
      <MenuItem>Home</MenuItem>
      <MenuItem>About Me</MenuItem>
      <MenuItem>My Work</MenuItem>
      <MenuItem>Contact Me</MenuItem>
      {/* <li>Home</li>
      <li>About Me</li>
      <li>My Work</li>
      <li>Contact Me</li> */}
    </UnorderedList>
    <ThemeChangerWrapper >
    {/* <ThemeChangerWrapper onClick={() => setDarkMode(!isDarkMode)}> */}
    <ThemeChanger />
    </ThemeChangerWrapper>
</MenuItems>
  </Nav>
  )
}

export default NavigationItems


// export default (props) => (

//   <Nav>
//     <Logo>
//       Poo Bar
//       </Logo>

//     <MenuButtonWrapper>    
//     <Hamburger_menu isDarkMode={true} />
//     </MenuButtonWrapper>





// <MenuItems>

//     <UnorderedList>
//       <MenuItem>Home</MenuItem>
//       <MenuItem>About Me</MenuItem>
//       <MenuItem>My Work</MenuItem>
//       <MenuItem>Contact Me</MenuItem>
//       {/* <li>Home</li>
//       <li>About Me</li>
//       <li>My Work</li>
//       <li>Contact Me</li> */}
//     </UnorderedList>
//     <ThemeChangerWrapper>
//     <ThemeChanger />
//     </ThemeChangerWrapper>
// </MenuItems>
//   </Nav>


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
  
