import styled from 'styled-components'

export const P = styled.p `
  color: ${({ theme, altColor }) => altColor ? theme.colors.salmon : theme.colors.brownishGrey};
  display: inline-block;
  font-family: mr-eaves-modern, sans-serif;
  font-size: 1.5625rem;
  font-weight: 300;
  line-height: 1.5;
  width: 100%;
  a, &:visited {
    color: ${({ theme }) => theme.colors.salmon};
  }
  svg {
    vertical-align: middle;
  }
`