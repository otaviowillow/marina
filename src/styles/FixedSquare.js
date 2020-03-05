import styled from 'styled-components'

export const FixedSquare = styled.div `
  background: ${({ theme }) => theme.colors.veryLightPink};
  position: fixed;
  top: 192px;
  right: 0;
  width: 214px;
  height: 208px;
  opacity: 0.5;
  z-index: -1;
  @media (min-width: 900px) {
    width: 814px;
    height: 708px;
  }
`