import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"


const Hamburger = styled(motion.div)`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  position: absolute;
  
    @media (min-width: 720px) {
        display: none;
    }
`

// const hamburgervariants = {
//     rest: { backgroundColor: "rgba(222,222,222,0)" },
//     hover: { backgroundColor: "rgba(222,222,222,1)" },
//     pressed: { backgroundColor: "rgba(222,222,222,1)" },
// }

// Learn more: https://framer.com/api

export function Hamburger_menu(props) {


    const [darkMode, setDarkMode] = useState({
        isDarkMode: props.isDarkMode,
    })

    const [isMenuOpen, setMenuOpen] = useState({
        isMenuOpen: props.isMenuOpen,
    })

    React.useEffect(() => {
        if (darkMode.isDarkMode !== props.isDarkMode) {
            setDarkMode({
                isDarkMode: props.isDarkMode,
            })
        }
        
    }, [props.isDarkMode ])

    // const toggleMenu = () => {
    //     // setIsOpen(!isOpen)
    //     setMenuOpen(!isMenuOpen)
    // }

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

    return (
        <Hamburger
            initial={{
                backgroundColor: darkMode.isDarkMode
                    ? "rgba(10, 4, 28, 0)"
                    : "rgba(222,222,222,0)",
            }}
            whileHover={{
                backgroundColor: darkMode.isDarkMode
                    ? "rgba(10, 4, 28, 1)"
                    : "rgba(222,222,222,1)",
            }}
            whileTap={{
                backgroundColor: darkMode.isDarkMode
                    ? "rgba(10, 4, 28, 1)"
                    : "rgba(222,222,222,1)",
            }}
            transition={{ duration: 0.3 }}
            // variants={hamburgervariants}
            // onClick={toggleMenu}
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
                    animate={props.isMenuOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="2"
                    stroke={
                        darkMode.isDarkMode
                            ? "hsl(0, 100%, 100%)"
                            : "hsl(0, 0%, 18%)"
                    }
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
                    animate={props.isMenuOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="2"
                    stroke={
                        darkMode.isDarkMode
                            ? "hsl(0, 100%, 100%)"
                            : "hsl(0, 0%, 18%)"
                    }
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
                    animate={props.isMenuOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="2"
                    stroke={
                        darkMode.isDarkMode
                            ? "hsl(255, 75%, 100%)"
                            : "hsl(0, 0%, 18%)"
                    }
                    // stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    // {...lineProps}
                />
            </motion.svg>
        </Hamburger>
    )
}

Hamburger_menu.defaultProps = {
    height: 48,
    width: 48,
    duration: 0.3,
    isDarkMode: false,
    isMenuOpen: false,
    onValueChange: () => null,
}

