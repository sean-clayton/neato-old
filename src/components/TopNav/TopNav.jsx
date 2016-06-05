import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './TopNav.pcss'

const TopNav = () =>
  <nav styleName="top-nav">
    <Link to="/">Hello Form</Link>
    <Link to="/counter">Counter</Link>
  </nav>

export default CSSModules(TopNav, styles)
