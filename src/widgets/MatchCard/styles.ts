import styled from 'styled-components'
import Touchable from "src/components/Touchable/Touchable";

export const Root = styled(Touchable)`
  padding: 20px 15px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBig};
  max-width: 210px;
  min-width: 130px;
  display: inline-block;
`

export const Date = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  font-weight: 500;
  padding: 3px 15px;
  background: ${({ theme }) => theme.colors.accentRed};
  color: ${({ theme }) => theme.colors.textWhite};
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

export const Team = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textColor};

  &:last-child {
    margin-bottom: 0;
  }
`

export const TeamName = styled.div`
  margin-right: 7px;
`
