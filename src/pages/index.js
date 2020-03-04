import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from '../styles'

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
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
      }
    }
  `)
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      {edges.map(({node}, i) => (
        <div key={i}>
          <h2><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></h2>
          <img src={node.frontmatter.mainImage.publicURL} />
        </div> 
      ))}
    </Layout>
  )
}

export default IndexPage
