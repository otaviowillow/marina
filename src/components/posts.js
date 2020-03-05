import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import ViewProjectLink from "../components/viewProjectLink"

import { H1, P, Date, PhotoGallery } from '../styles'

const Posts = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allMarkdownRemark(
        sort: {
          fields: [frontmatter___date, frontmatter___feat]
          order: DESC
        }
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY")
              title
              feat
              path
              summary
              homeImage {
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
      }
    }
  `)

  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    edges.map(({node}, i) => (
      <PhotoGallery column='1/13' flex isEven={i % 2}>
        <main>
          <Link to={node.frontmatter.path}>
            {node.frontmatter.homeImage ? <img src={node.frontmatter.homeImage.publicURL} alt='' /> : null}
          </Link>
        </main>
        <aside>
          <Date>{node.frontmatter.date}</Date>
          <H1 padding='0'>{node.frontmatter.title}</H1>
          <P>{node.frontmatter.summary}</P>
          <ViewProjectLink to={node.frontmatter.path} />
        </aside>
      </PhotoGallery>
    ))
  )
}

export default Posts
