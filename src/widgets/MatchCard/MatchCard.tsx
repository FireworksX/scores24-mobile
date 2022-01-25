import React from 'react'
import * as Styled from './styles'

interface MatchCardProps {
  className?: string
}

const MatchCard: React.FC<MatchCardProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Date>Live</Styled.Date>
      <Styled.Logos />
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
