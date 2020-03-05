import styled from 'styled-components'

export const H1 = styled.h1 `
  color: ${({ theme, altColor }) => altColor ? theme.colors.salmon : theme.colors.brownishGrey};
  padding: ${({ padding, paddingBottom }) => (paddingBottom || padding) || '2rem 0'};
  font-family: mr-eaves-modern, sans-serif;
  font-size: 3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  strong {
    color: ${({ theme, altColor }) => altColor ? theme.colors.brownishGrey : theme.colors.salmon};
    font-weight: normal;
  }
  @media (min-width: 900px) {
    font-size: 4rem;
    padding: ${({ padding }) => padding || '4rem 0'};
  }
`