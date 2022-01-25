import Touchable from 'src/components/Touchable/Touchable'
import styled from 'styled-components'

export const Root = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  grid-gap: 10px;
  background: ${({ theme }) => theme.colors.iconWhite};
  padding: 7px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Time = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`

export const Teams = styled(Touchable)``

export const TeamRow = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Logo = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: ${({ theme }) => theme.colors.skeleton};
`

export const Name = styled.div``

export const Score = styled.div`
  margin-left: auto;
`
