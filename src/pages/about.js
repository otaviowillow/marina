import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, GridItem, H1, P, Img } from '../styles'

import PortfolioLink from '../components/portfolioLink.js'

const About = () => (
  <Layout>
    <SEO title="About" />
    <Grid>
      <GridItem column='3/9' mobileColumn='1/13'>
        <H1 altColor>Hello,</H1>
        <P>My name is Marina Braholka, I am a UX/UI designer originally from Brazil. I graduated in 2014 in Graphic Design at the Federal University of Technology of Parana. I was working, since 2009, in advertising agencies and mid-size companies, I was unsatisfied about it because I didn’t want to work with commercials or offline projects like billboards, magazines or flyers because, unfortunately, I think these kinds of media will eventually die off.</P>
        <P>In 2016, a friend of mine, back from England after studying user experience design, showed it to me,  and then I discovered the magic of user experience design and I fell in love with it, so I decided to change my career. </P>
        <P>In 2017, I went to Vancouver for vacation and I absolutely loved the city, and studying abroad was always my big dream. After the vacation, I started to search for a college or course about UX and UI, and I found Red Academy, where I am now pursuing a UX diploma.</P>
        <P>I began studying it all by myself with online courses and also reading books about service design and interface for websites and apps. After doing freelance jobs and working as a UI designer in a big digital agency called Midiaweb,  I found a really great job on Hero99, a company where everyone loves and cares about service design. In Hero99, they have a method where everybody teaches everything they know to each other with workshops and practical classes, as they believe they can grow in all the levels this way, and I think it is amazing. </P>
        <P>Since September 2018, I was working for Hero99 as a contractor on a huge company called TCP, which is the company that controls all the importations and exportations from southern Brazil: they are a seaport (you can see more about it here).
        <P>I am highly skilled in creating user flows, user journeys, architecture information, personas, wireframes, prototypes and style guides.</P>
        <P>My toolset includes Sketch, Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Lightroom, Invision App, Figma, Marvel App, UXPIN, Axure RP, and proto.io.</P></P>
      </GridItem>
      <GridItem column='5/13'>
        <Img src='../img/mazinha.png' alt='' />
        <PortfolioLink />
      </GridItem>
    </Grid>
  </Layout>
)

export default About
