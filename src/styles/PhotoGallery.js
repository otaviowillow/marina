import styled from 'styled-components'

export const PhotoGallery = styled.div `
  grid-column: 1/13;
  border: 1px solid red;
  h1 {
    padding: 0;
  }
  p {
    display: inline-block;
    border: 1px solid blue;
  }
  aside {
    grid-column: 2/12;
    border: 1px solid green;
  }
  div {
    display: grid;
    &:nth-child(even) {
      border: 1px solid green;
    }
  }
`