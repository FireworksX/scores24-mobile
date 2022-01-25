import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import Icon from 'src/components/Icon/Icon'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
`

export const League = styled(Touchable)`
  display: flex;
  align-items: center;
  padding: 7px 10px;
`

export const Body = styled.div``

export const Delimiter = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`

export const Logo = styled.div`
  width: 60px;
  margin-right: 10px;
`

export const Name = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 3px;
`

export const Country = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
`

export const Arrow = styled(Icon).attrs({
  name: 'arrow-chevron',
  width: 16,
  height: 16
})`
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: auto;
`
