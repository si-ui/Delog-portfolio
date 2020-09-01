import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const Hamburger = styled(motion.div)`
  border-radius: 50px;
`


export function Hamburger_menu(props) {
    const {
        duration,
        easeType,
        isSpring,
        stiffness,
        damping,
        mass,
        loopAmount,
        easeString,
        easePreset,
        easeCustom,
        restSpeed,
        restDelta,
        onTap,
        ...rest
    } = props

    const [isDarkMode, setDarkMode] = React.useState(true)

    const [isOpen, setIsOpen] = useState(false)

    const top = {
        closed: {
            rotate: [45, 45, 0, 0, 0, 0, 0, 0],
            y: [4, 4, 4, 4, 0, 0, 0, 0],
            x: [3, 3, 3, 3, 0, 0, 0, 0],
            opacity: 1,
        },
        open: {
            rotate: [0, 0, 0, 0, 0, 0, 45, 45],
            y: [0, 0, 0, 0, 4, 4, 4, 4],
            x: [0, 0, 0, 0, 3, 3, 3, 3],
            opacity: 1,
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
            y: [-4, -4, -4, -4, 0, 0, 0, 0],
            x: [-3, -3, -3, -3, 0, 0, 0, 0],
            opacity: 1,
        },
        open: {
            rotate: [0, 0, 0, 0, 0, 0, -45, -45],
            y: [0, 0, 0, 0, -4, -4, -4, -4],
            x: [0, 0, 0, 0, -3, -3, -3, -3],
            opacity: 1,
        },
    }

    return (
        <Hamburger
            initial={{ backgroundColor: "rgba(222,222,222,0)" }}
            whileHover={{ backgroundColor: "rgba(222,222,222,1)" }}
            whileTap={{ backgroundColor: "rgba(222,222,222,1)" }}
            transition={{ duration: 0.3 }}
            // variants={hamburgervariants}
            onClick={() => setIsOpen(!isOpen)}
        >
            <motion.svg
                viewBox="0 0 24 24"
                overflow="visible"
                preserveAspectRatio="none"
                width={24}
                height={24}
                {...props}
            >
                <motion.line
                    x1="6"
                    x2="12"
                    y1="8"
                    y2="8"
                    variants={top}
                    animate={isOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="1"
                    stroke={isDarkMode ? "hsl(0, 100%, 100%)" : "hsl(0, 0%, 18%)"}
                    // stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    // {...lineProps}
                />
                <motion.line
                    x1="6"
                    x2="18"
                    y1="12"
                    y2="12"
                    variants={middle}
                    animate={isOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="1"
                    stroke={isDarkMode ? "hsl(0, 100%, 100%)" : "hsl(0, 0%, 18%)"}
                    // stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    // {...lineProps}
                />
                <motion.line
                    x1="12"
                    x2="18"
                    y1="16"
                    y2="16"
                    variants={bottom}
                    animate={isOpen ? "open" : "closed"}
                    initial="closed"
                    fill="transparent"
                    strokeWidth="1"
                    stroke={isDarkMode ? "hsl(0, 100%, 100%)" : "hsl(0, 0%, 18%)"}
                    // stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    // {...lineProps}
                />
            </motion.svg>
        </Hamburger>
    )
}

Hamburger_menu.defaultProps = {
    height: 96,
    width: 96,
    duration: 0.3,
}


