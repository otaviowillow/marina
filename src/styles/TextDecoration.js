import styled from 'styled-components'

export const TextDecoration = styled.h2 `
  color: ${({ theme }) => theme.colors.white};
  top: ${({ bottom }) => bottom || 'initial'};
  right: ${({ right }) => right || 'initial'};
  bottom: ${({ bottom }) => bottom || 'initial'};
  left: ${({ left }) => left || 'initial'};
  display: none;
  position: absolute;
  font-family: mr-eaves-modern, sans-serif;
  opacity: 0.35;
  font-size: 70px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  z-index: 1;
  @media (min-width: 900px) {
    display: block;
    font-size: 200px;
  }
`