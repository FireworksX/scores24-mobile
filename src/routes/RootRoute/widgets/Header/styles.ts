import styled from 'styled-components'
import Icon from 'src/components/Icon/Icon'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import Link from 'src/widgets/Link/Link'

const LINK_CLASS_NAME = 'navigation_active'

export const Root = styled.header`
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: 0 1px 1px rgb(32 35 51 / 4%), 0 2px 4px rgb(32 35 51 / 2%);

  .${LINK_CLASS_NAME} {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryBg};
  }
`

export const Top = styled.div`
  padding: 0 ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Logo = styled(Icon).attrs({
  name: 'logo-scores24'
})`
  --rgb-color-primary: ${({ theme }) => theme.colors.primary};
  --rgb-text-color: ${({ theme }) => theme.colors.textColor};

  width: 130px;
  height: 30px;

  path {
    &:first-child {
      color: ${({ theme }) => theme.colors.textColor};
    }
    &:last-child {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const Search = styled(Icon).attrs({
  name: 'search'
})`
  color: ${({ theme }) => theme.colors.iconBasic};
  margin-right: 10px;
  margin-left: auto;
`

export const User = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 50%;
`

export const SportList = styled(HorizontalScroll)`
  display: flex;
  align-items: center;
`

export const SportIcon = styled(Icon)`
  margin-right: 5px;
`

export const SportItem = styled(Link).attrs({ activeClassName: LINK_CLASS_NAME })`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 5px;
  margin-right: 10px;

  &:first-child {
    margin-left: 7px;
  }
`
