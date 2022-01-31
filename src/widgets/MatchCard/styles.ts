import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'

export const Root = styled(Touchable)`
  padding: 20px 15px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBig};
  max-width: 210px;
  min-width: 130px;
  display: inline-block;

  &:nth-child(1) {
    background: #d84141;
  }

  &:nth-child(2) {
    background: #1f8fe9;
  }

  &:nth-child(3) {
    background: #2b3439;
  }
`

export const Date = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  font-weight: 500;
  padding: 3px 10px;
  background: ${({ theme }) => theme.colors.basicWhite};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 10px;
  margin-bottom: 15px;
  display: inline-flex;
`

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  height: 40px;
`

export const Logo = styled(CommonLogo).attrs({ size: 20 })``

export const Team = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textWhite};

  &:last-child {
    margin-bottom: 0;
  }
`

export const TeamName = styled.div`
  margin-right: 7px;
`
