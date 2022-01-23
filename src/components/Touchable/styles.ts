import styled from 'styled-components'

export const Root = styled.div`
  transition: transform ${({ theme }) => theme.animation.transitionDuration};
  &:active {
    transform: scale(0.9);
  }
`
