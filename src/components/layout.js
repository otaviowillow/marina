import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import { ThemeProvider } from 'styled-components'
import { mainTheme, Reset, FixedSquare } from '../styles'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={mainTheme}>
      <Reset />
      <Header siteTitle={data.site.siteMetadata.title} />
      <>
        <FixedSquare />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout
