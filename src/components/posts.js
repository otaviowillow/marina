import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import ViewProjectLink from "../components/viewProjectLink"

import { GridItem, H1, P, Date } from '../styles'

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
      <>
        <GridItem id={i === 0 && 'work'} as='figure' column='1/7' mobileColumn='1/13' flex justify='flex-start'>
          <Link to={node.frontmatter.path}>
            <img src={node.frontmatter.homeImage.publicURL} alt='' />
          </Link>
        </GridItem>
        <GridItem as='aside' column='7/13' mobileColumn='1/13'>
          <Date>{node.frontmatter.date}</Date>
          <H1 padding='0'>{node.frontmatter.title}</H1>
          <P>{node.frontmatter.summary}</P>
          <ViewProjectLink to={node.frontmatter.path} />
        </GridItem>
      </>
    ))
  )
  // return (
  //   edges.map(({node}, i) => i % 2 ? (
      // <>
      //   <GridItem as='figure' column='1/7' mobileColumn='1/13' flex justify='flex-start'>
      //     <Link to={node.frontmatter.path}>
      //       <img src={node.frontmatter.homeImage.publicURL} alt='' />
      //     </Link>
      //   </GridItem>
      //   <GridItem as='aside' column='7/13' mobileColumn='1/13'>
      //     <Date>{node.frontmatter.date}</Date>
      //     <H1 padding='0'>{node.frontmatter.title}</H1>
      //     <P>{node.frontmatter.summary}</P>
      //     <ViewProjectLink to={node.frontmatter.path} />
      //   </GridItem>
      // </>
  //   ) : (
  //     <>
  //       <GridItem as='aside' column='1/7' mobileColumn='1/13'>
  //         <Date>{node.frontmatter.date}</Date>
  //         <H1 padding='0'>{node.frontmatter.title}</H1>
  //         <P>{node.frontmatter.summary}</P>
  //         <ViewProjectLink to={node.frontmatter.path} />
  //       </GridItem>
  //       <GridItem as='figure' column='7/13' mobileColumn='1/13' flex justify='flex-end'>
  //         <Link to={node.frontmatter.path}>
  //           <img src={node.frontmatter.homeImage.publicURL} alt='' />
  //         </Link>
  //       </GridItem>
  //     </>
  //   ))
  // )
}

export default Posts
