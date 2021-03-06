import React from 'react'
import * as Styled from './styles'

interface MatchCardProps {
  className?: string
}

const MatchCard: React.FC<MatchCardProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Date>23.02.2022</Styled.Date>
      <Styled.Logos>
        <Styled.Logo src='https://cdn.scores24.ru/upload/team/w34-h34/621/2e4/ae04abc5c947467e81e702ff0c7682b709.png' />
        <Styled.Logo src='https://cdn.scores24.ru/upload/team/w34-h34/bae/9ab/5ac8ce1657b7cc59b8337b4efe50ba7052.png' />
      </Styled.Logos>
      <Styled.Team>
        <Styled.TeamName>Арсенал</Styled.TeamName>1
      </Styled.Team>
      <Styled.Team>
        <Styled.TeamName>Бернли</Styled.TeamName>1
      </Styled.Team>
    </Styled.Root>
  )
}

export default MatchCard
