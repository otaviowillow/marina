import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'

import { MarkdownParser, Grid, GridItem, H1, H3, P } from '../styles'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  const imageSrc = image => image.childImageSharp ? image.childImageSharp.fluid.src : image.publicURL

  return (
    <Layout>
      <Grid>
        <GridItem as='header' column='3 / 8' style={{ positiion: 'relative' }}>
          <H1 altColor>{frontmatter.title}</H1>
          <H3>Details</H3>
          <P><strong>Client:</strong> {frontmatter.client}</P>
          <P><strong>Role:</strong> {frontmatter.role}</P>
          <P><strong>Responsabilities:</strong> {frontmatter.responsabilities}</P>
        </GridItem>
        <GridItem column='9 / 12'>
          {frontmatter.mainImage ? <img style={{ position: 'absolute', top: 0, left: 0, height: 'auto' }} src={imageSrc(frontmatter.mainImage)} alt='' /> : null}
        </GridItem>
        <GridItem column='3 / 9'>
          <MarkdownParser content={htmlAst} />  
        </GridItem>
      </Grid>
      <ul style={{ textAlign: 'center' }}>
        {frontmatter.portfolio && frontmatter.portfolio.map((port, i) => (
          port ? <li key={i}><img src={imageSrc(port)} alt='' /></li> : null
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
