import styled from 'styled-components'

export const FixedSquare = styled.div `
  background: ${({ theme }) => theme.colors.veryLightPink};
  position: fixed;
  top: 192px;
  right: 0;
  width: 814px;
  height: 708px;
  opacity: 0.5;
  z-index: -1;
`