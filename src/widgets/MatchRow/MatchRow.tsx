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
          <Styled.Logo src='https://cdn.scores24.ru/upload/team/w20-h20/621/2e4/ae04abc5c947467e81e702ff0c7682b709.png' />
          <Styled.Name>Мельбурн Виктори</Styled.Name>
          <Styled.Score>-</Styled.Score>
        </Styled.TeamRow>
        <Styled.TeamRow>
          <Styled.Logo src='https://cdn.scores24.ru/upload/team/w20-h20/bae/9ab/5ac8ce1657b7cc59b8337b4efe50ba7052.png' />
          <Styled.Name>Сидней</Styled.Name>
          <Styled.Score>-</Styled.Score>
        </Styled.TeamRow>
      </Styled.Teams>
    </Styled.Root>
  )
}

export default MatchRow
