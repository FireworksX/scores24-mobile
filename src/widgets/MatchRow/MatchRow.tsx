import React from 'react'
import * as Styled from './styles'

interface MatchRowProps {
  className?: string
}

const MatchRow: React.FC<MatchRowProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.LeftSide>
        <Styled.Time>20:40</Styled.Time>
      </Styled.LeftSide>
      <Styled.Teams>
        <Styled.TeamRow>
          <Styled.Logo />
          <Styled.Name>Мельбурн Виктори</Styled.Name>
          <Styled.Score>-</Styled.Score>
        </Styled.TeamRow>
        <Styled.TeamRow>
          <Styled.Logo />
          <Styled.Name>Сидней</Styled.Name>
          <Styled.Score>-</Styled.Score>
        </Styled.TeamRow>
      </Styled.Teams>
    </Styled.Root>
  )
}

export default MatchRow
