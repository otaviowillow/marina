import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <Link to={node.frontmatter.path} key={i}>
          <h2>{node.frontmatter.title}</h2>
          <img src={node.frontmatter.mainImage.publicURL} />
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage
