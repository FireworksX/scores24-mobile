import styled from 'styled-components'
import Icon from 'src/components/Icon/Icon'

export const Root = styled.div``

export const Header = styled.div`
  padding: 12px ${({ theme }) => theme.baseStyles.paddings.gutterMobile} 5px;
`

export const Title = styled.h1`
  ${({ theme }) => theme.typography.text_26_30};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

export const TitleIcon = styled(Icon).attrs({
  width: 30,
  height: 30
})`
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
`
