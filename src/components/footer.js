
import React from "react"

import IconBehance from '../img/icon-behance.svg'
import IconDribble from '../img/icon-dribble.svg'
import IconLinkedin from '../img/icon-linkedin.svg'

import { TextDecoration, Grid, GridItem, Container, H2, Li } from '../styles'

const Footer = () => (
  <Container id='contact' style={{ overflow: 'hidden' }}>
    <Grid as='footer'>
      <GridItem column='1/12' flex  justify='center' align='center'>
        <H2 style={{ textAlign:'center' }}>Feel free to contact me in my social medias</H2>
      </GridItem>

      <GridItem as='ul' column='1/12' flex  justify='center' align='center'>
        <Li><IconBehance /></Li>
        <Li><IconDribble /></Li>
        <Li><IconLinkedin /></Li>
      </GridItem>
    </Grid>
    <TextDecoration bottom='120px' left='0'>contact</TextDecoration>
  </Container>
)

export default Footer
