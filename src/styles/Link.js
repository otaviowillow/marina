import styled from 'styled-components'
import { Link as GatsbyLink } from "gatsby"

export const Link = styled(GatsbyLink) `
  color: ${({ theme }) => theme.colors.salmon};
  font-family: mr-eaves-modern, sans-serif;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-decoration: none;
`