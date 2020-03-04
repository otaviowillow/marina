import styled from 'styled-components'

export const Grid = styled.div `
  justify-content: ${({ justify }) => justify || 'start'};
  align-content: ${({ align }) => align || 'start'};
  padding: ${({ padding }) => padding || '0 15px'};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1em;
  float: none;
  max-width: 1640px;
  margin: 0 auto;
`