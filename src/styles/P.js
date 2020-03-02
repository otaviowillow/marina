import React from 'react'
import styled from 'styled-components'

const PWrapper = styled.p `
  color: ${({ theme }) => theme.colors.brownishGrey};
  font-family: mr-eaves-modern, sans-serif;
  font-size: 1.5625rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`

export const P = ({ children }) => <PWrapper>{children}</PWrapper>