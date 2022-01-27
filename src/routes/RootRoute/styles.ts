import styled from 'styled-components'
import HeaderComp from './widgets/Header/Header'
import NavigationComp from './widgets/Navigation/Navigation'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  min-height: 100vh;
  padding-bottom: 70px;
`

export const Header = styled(HeaderComp)`
  position: sticky;
  top: 0;
`

export const Navigation = styled(NavigationComp)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`
