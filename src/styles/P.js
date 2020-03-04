import React from 'react'
import styled from 'styled-components'

const PWrapper = styled.p `
  color: ${({ theme, altColor }) => altColor ? theme.colors.salmon : theme.colors.brownishGrey};
  display: inline-block;
  font-family: mr-eaves-modern, sans-serif;
  font-size: 1.5625rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  a, &:visited {
    color: ${({ theme }) => theme.colors.salmon};
  }
  svg {
    vertical-align: middle;
  }
`

export const P = ({ children }) => <PWrapper>{children}</PWrapper>