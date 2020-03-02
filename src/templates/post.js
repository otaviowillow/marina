import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'

import { MarkdownParser, Grid, GridItem, H1, H3, P } from '../styles'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  
  return (
    <Layout>
      <Grid>
        <GridItem as='header' column='3 / 8' style={{ positiion: 'relative' }}>
          <H1 altColor>{frontmatter.title}</H1>
          <H3>Details</H3>
          <P><strong>Client:</strong> {frontmatter.client}</P>
          <P><strong>Role:</strong> {frontmatter.role}</P>
          <P><strong>Responsabilities:</strong> {frontmatter.responsabilities}</P>
          <img src={frontmatter.mainImage.publicURL} style={{ position: 'absolute', top: 0, right: 0, height: '100%' }} alt='' />
        </GridItem>
        <GridItem column='3 / 9'>
          <MarkdownParser content={htmlAst} />  
        </GridItem>
      </Grid>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        client
        role
        mainImage {
          publicURL
        }
        responsabilities
        portfolio
      }
    }
  }
`
