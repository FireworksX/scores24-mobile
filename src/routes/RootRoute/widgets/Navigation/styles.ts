import styled, { css } from 'styled-components'
import IconComp from 'src/components/Icon/Icon'
import Touchable from 'src/components/Touchable/Touchable'

interface Props {
  isActive?: boolean
}

export const Root = styled.nav`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: 0 8px 24px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 12%);
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  border-radius: 20px 20px 0 0;
`

export const Item = styled(Touchable)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-basis: 16%;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 15px 0;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      ${Icon}, ${Name} {
        color: ${({ theme }) => theme.colors.primary};
      }

      &:before {
        content: '';
        width: 40px;
        height: 32px;
        position: absolute;
        top: 8px;
        left: 50%;
        margin-left: -20px;
        background: ${({ theme }) => theme.colors.primaryBg};
        border-radius: 10px;
        z-index: -1;
      }
    `}
`

export const Icon = styled(IconComp).attrs({
  width: 24,
  height: 24
})`
  color: ${({ theme }) => theme.colors.iconBasic};
`

export const Name = styled.span`
  ${({ theme }) => theme.typography.text_11_12};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 4px;
`
