import styled from 'styled-components'

export const Grid = styled.div `
  justify-content: ${({ justify }) => justify || 'start'};
  align-content: ${({ align }) => align || 'start'};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  float: none;
  max-width: 1640px;
  margin: 0 auto;
  padding: 0 15px;
  border: 1px solid red;
`