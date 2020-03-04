import styled from 'styled-components'

export const H1 = styled.h1 `
  color: ${({ theme, altColor }) => altColor ? theme.colors.salmon : theme.colors.brownishGrey};
  font-family: mr-eaves-modern, sans-serif;
  font-size: 4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
`