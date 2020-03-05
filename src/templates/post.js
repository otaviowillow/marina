import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'

import { MarkdownParser, Grid, GridItem, H1, H3, P, Img } from '../styles'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  const imageSrc = image => image.childImageSharp ? image.childImageSharp.fluid.src : image.publicURL

  return (
    <Layout>
      <Grid>
        <GridItem as='header' column='3/8'  mobileColumn='1/13'>
          <H1 altColor>{frontmatter.title}</H1>
          <H3>Details</H3>
          <P fullWidth><strong>Client:</strong> {frontmatter.client}</P>
          <P fullWidth><strong>Role:</strong> {frontmatter.role}</P>
          <P fullWidth><strong>Responsabilities:</strong> {frontmatter.responsabilities}</P>
        </GridItem>
        <GridItem column='9/13'  mobileColumn='1/13'>
          {frontmatter.mainImage ? <img src={imageSrc(frontmatter.mainImage)} alt='' /> : null}
        </GridItem>
        <GridItem as='header' column='3/13'  mobileColumn='1/13'>
          <MarkdownParser content={htmlAst} />  
        </GridItem>
      </Grid>
      <ul style={{ textAlign: 'center' }}>
        {frontmatter.portfolio && frontmatter.portfolio.map((port, i) => (
          port ? <li key={i}><Img src={imageSrc(port)} alt='' /></li> : null
        ))}
      </ul>
    </Layout>
  )
}

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        client
        role
        responsabilities
        portfolio {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
