import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Light_dark_toggle } from './light-dark-toggle'

export default (props) => (
  <ThemeToggler >
    {({ theme, toggleTheme }) => (

      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
           <Light_dark_toggle isDarkMode={theme === 'dark'}/>
      </label>
    )}
  </ThemeToggler>
)