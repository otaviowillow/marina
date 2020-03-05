import styled from 'styled-components'

export const GridItem = styled.div `
  grid-column: ${({ mobileColumn, column }) => mobileColumn || column};
  display: ${({ flex }) => flex ? 'flex' : 'inline-block'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  position: relative;
  @media (min-width: 900px) {
    grid-column: ${({ desktopColumn, column }) => desktopColumn || column};
  }
`