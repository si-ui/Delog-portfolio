import React from "react"
import { useState } from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from "styled-components"
import { Hamburger_menu } from "./hamburger_menu"
import { NavbarLinks } from "./navbar-links"
import { motion } from "framer-motion"
 
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
    height: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: var(--site-header);
    box-shadow: 0 0 30px var(--card-shadow);
    border-radius: 24px;
    justify-content: space-between;
    align-items: center;
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

const Hamburger = styled(motion.div)`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  top: 10px;
  right: 10px;
  position: absolute;
  
    @media (min-width: 720px) {
        display: none;
    }
`



const ThemeChangerWrapper = styled.div`
bottom: 20px;
@media (max-width: 720px) {
  position: relative;
}
`

const top = {
  closed: {
      rotate: [45, 45, 0, 0, 0, 0, 0, 0],
      y: [8, 8, 8, 8, 0, 0, 0, 0],
      x: [6, 6, 6, 6, 0, 0, 0, 0],
  },
  open: {
      rotate: [0, 0, 0, 0, 0, 0, 45, 45],
      y: [0, 0, 0, 0, 8, 8, 8, 8],
      x: [0, 0, 0, 0, 6, 6, 6, 6],
  },
}

const middle = {
  closed: {
      rotate: 0,
      opacity: [0, 0, 0, 0, 1, 1, 1, 1],
  },
  open: {
      rotate: 0,
      opacity: [1, 1, 1, 1, 0, 0, 0, 0],
  },
}

const bottom = {
  closed: {
      rotate: [-45, -45, 0, 0, 0, 0, 0, 0],
      y: [-8, -8, -8, -8, 0, 0, 0, 0],
      x: [-6, -6, -6, -6, 0, 0, 0, 0],
  },
  open: {
      rotate: [0, 0, 0, 0, 0, 0, -45, -45],
      y: [0, 0, 0, 0, -8, -8, -8, -8],
      x: [0, 0, 0, 0, -6, -6, -6, -6],
  },
}
// ${({ isOpen }) => isOpen ? '32px' : '64px'}

const [isOpen, setIsOpen] = useState(false)

export default (props) => (

  <Nav>
    <Logo>
      Poo Bar
      </Logo>


      <Hamburger
            initial="var(--hamburgerbg-initial)"
            whileHover="var(--hamburgerbg-hover)"
            whileTap="var(--hamburgerbg-hover)"
            transition={{ duration: 0.3 }}
            // variants={hamburgervariants}
            onClick={toggleMenu}
        >
            <motion.svg
                viewBox="0 0 48 48"
                overflow="visible"
                preserveAspectRatio="none"
                width={48}
                height={48}
                {...props}
            >
                <motion.line
                    x1="12"
                    x2="24"
                    y1="16"
                    y2="16"
                    variants={top}
                    animate={isOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="2"
                    stroke="var(--hamburger)"
                    // stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    // {...lineProps}
                />
                <motion.line
                    x1="12"
                    x2="36"
                    y1="24"
                    y2="24"
                    variants={middle}
                    animate={isOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="2"
                    stroke="var(--hamburger)"
                    // stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    // {...lineProps}
                />
                <motion.line
                    x1="24"
                    x2="36"
                    y1="32"
                    y2="32"
                    variants={bottom}
                    animate={isOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="2"
                    stroke="var(--hamburger)"
                    // stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    // {...lineProps}
                />
            </motion.svg>
        </Hamburger>

    {/* <Hamburger_menu isDarkMode={true} /> */}




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
    <ThemeChangerWrapper>
    <ThemeChanger />
    </ThemeChangerWrapper>
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