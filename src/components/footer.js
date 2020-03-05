
import React from "react"

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
        <Li><a href='https://dribbble.com/mabrhlk' target='_blank' rel="noopener noreferrer"><IconDribble /></a></Li>
        <Li><a href='https://www.linkedin.com/in/marinabraholka' target='_blank' rel="noopener noreferrer"><IconLinkedin /></a></Li>
      </GridItem>
    </Grid>
    <TextDecoration bottom='120px' left='0'>contact</TextDecoration>
  </Container>
)

export default Footer
