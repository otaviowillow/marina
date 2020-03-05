
import React from "react"

import { Link } from 'gatsby'

import { Grid, GridItem, Logo, H4 } from '../styles'

const Header = () => (
  <Grid as='header' padding='2rem 1rem'>
    <GridItem column='1/2'>
      <Link to='/'>
        <Logo />
      </Link>
    </GridItem>

    <GridItem as='nav' column='10/13' flex justify='space-between' align='center'>
      <H4><Link to ='/about'>About</Link></H4>
      <H4><Link to ='/work'>Work</Link></H4>
      <H4><Link to ='/contact'>Contact</Link></H4>
    </GridItem>
  </Grid>
)

export default Header
