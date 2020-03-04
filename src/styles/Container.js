import styled from 'styled-components'

export const Container = styled.div `
  background: ${({ theme, color }) => color || theme.colors.veryLightPink};
  position: relative;
  padding: 90px 0;
`