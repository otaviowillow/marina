import styled from 'styled-components'
import { GridItem } from './GridItem'

export const PhotoGallery = styled(GridItem)`
  grid-column: 1/13;
  flex-direction: column;
  aside, main {
    width: 100%;
  }
  main { 
    padding: 20px;
  }
  @media (min-width: 900px) {
    flex-direction: ${({ isEven }) => isEven ? 'row-reverse' : 'row'};
    aside, main {
    width: 50%;
  }
  }
`