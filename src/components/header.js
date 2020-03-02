
import React from "react"

import { Grid, GridItem, H1, P, Link } from '../styles'

const Header = () => (
  <Grid as='header'>
    <GridItem column='1/2'>
      <H1>brhlk.</H1>
    </GridItem>

    <GridItem as='nav' column='3/12' flex  justify='flex-end' align='center'>
      <P><Link to ='/about'>About</Link></P>
      <P><Link to ='/work'>Work</Link></P>
      <P><Link to ='/contact'>Contact</Link></P>
    </GridItem>
  </Grid>
)

export default Header
