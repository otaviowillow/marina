import styled from 'styled-components'

export const H3 = styled.h3 `
  color: ${({ theme }) => theme.colors.salmon};
  font-family: mr-eaves-modern, sans-serif;
  font-size: 1.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding: 25px 0;
  @media (min-width: 900px) {
    font-size: 2.1875rem;
    padding: 38px 0 28px 0;
  }
`