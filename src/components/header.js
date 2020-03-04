
import React from "react"

import { Link, Grid, GridItem, H1, P } from '../styles'

const Header = () => (
  <Grid as='header'>
    <GridItem column='1/2'>
      <H1><Link to='/'>brhlk.</Link></H1>
    </GridItem>

    <GridItem as='nav' column='3/12' flex  justify='flex-end' align='center'>
      <P><Link to ='/about'>About</Link></P>
      <P><Link to ='/work'>Work</Link></P>
      <P><Link to ='/contact'>Contact</Link></P>
    </GridItem>
  </Grid>
)

export default Header
