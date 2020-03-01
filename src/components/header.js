import { Link } from "gatsby"
import React from "react"

import { Header as HeaderWrapper, H1 } from '../styles'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <H1>brhlk.</H1>

    <nav>
      <Link to ='/about'>About</Link>
      <Link to ='/work'>Work</Link>
      <Link to ='/contact'>Contact</Link>
    </nav>
  </HeaderWrapper>
)

export default Header
