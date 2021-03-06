import { css, createGlobalStyle } from 'styled-components'

export const reset = css `
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, figure {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 0;
    display: block;
    float: left;
    margin: 10px;
    margin-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:visited {
      color: inherit;
    }
  }
`

export const Reset = createGlobalStyle`${reset}`

export default reset