import React from "react"

import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"
import ReadMore from '../components/readMore'

import { Grid, GridItem, H1, H2 } from '../styles'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <GridItem column='3/10' mobileColumn='1/13'>
        <H1><strong>Hello,</strong> my name is Marina Braholka and I am a UX/UI designer based in Vancouver, BC.</H1>
        <H2>I have previously worked in big agencies, mid-sized companies and for the last year in a big company called TCP, they are the second biggest seaport in Brazil. I am highly skilled in creating user flows, user journeys, architecture information, personas, wireframes, prototypes and style guides.</H2>
      </GridItem>
      <GridItem column='3/13'>
        <ReadMore />
      </GridItem>
      <Posts />
    </Grid>
  </Layout>
)

export default IndexPage
