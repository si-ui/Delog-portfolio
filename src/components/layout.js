import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import 'prismjs/themes/prism-okaidia.css'
import PropTypes from "prop-types"
import { motion, AnimatePresence } from 'framer-motion'
import NavigationItems from "../components/navigation"
// import Navbar from "../components/navbar"

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    x: -100,
        transition: {
      duration: duration,
    },

  },
}


const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="site-wrapper">
    
    
    <NavigationItems/>
    {/* <Navbar/> */}
      

      <div className="main-content">
      <AnimatePresence>
        <motion.main
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
      {children}
         </motion.main>
      </AnimatePresence>
     
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://simonlucas.design">Simon Lucas</a></p>
      </footer>
       </div>
       
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout