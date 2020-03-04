
import React from "react"

import { Link } from 'gatsby'

import LogoBrlhk from '../img/logo-brhlk.svg'

import { Grid, GridItem, H4 } from '../styles'

const Header = () => (
  <Grid as='header' padding='2rem 0'>
    <GridItem column='1/2'>
      <Link to='/'>
        <LogoBrlhk style={{ height: '43px', width: 'auto' }} />
      </Link>
    </GridItem>

    <GridItem as='nav' column='9/12' flex justify='space-between' align='center'>
      <H4><Link to ='/about'>About</Link></H4>
      <H4><Link to ='/work'>Work</Link></H4>
      <H4><Link to ='/contact'>Contact</Link></H4>
    </GridItem>
  </Grid>
)

export default Header
