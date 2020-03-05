import styled from 'styled-components'

export const Date = styled.time `
  color: ${({ theme }) => theme.colors.salmon};
  display: block;
  font-family: mr-eaves-modern, sans-serif;
  font-size: 2.1875rem;
  font-weight: normal;
  padding: 1rem 0 1rem 0;
  @media (min-width: 900px) {
    padding: 4rem 0 1rem 0;
  }
`
