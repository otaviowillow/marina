import styled from 'styled-components'

export const H2 = styled.h2 `
  color: ${({ theme }) => theme.colors.brownishGrey};
  font-family: mr-eaves-modern, sans-serif;
  font-size: 2rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`