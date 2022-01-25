import React from 'react'
import * as Styled from './styles'
import LeagueWrapper from '../../widgets/LeagueWrapper/LeagueWrapper'
import Container from '../../components/Container/Container'
import CalendarRow from '../../widgets/CalendarRow/CalendarRow'

interface SportRouteProps {
  className?: string
}

const SportRoute: React.FC<SportRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <Styled.Title>
          <Styled.TitleIcon name='soccer' />
          Футбол
        </Styled.Title>
        <Styled.Description>
          Осознанный досуг и саморазвитие: обсуждаем искусство, музыку, кино, литературу и не только
        </Styled.Description>
      </Styled.Header>
      <Styled.MatchesList>
        <Styled.Match />
        <Styled.Match />
        <Styled.Match />
        <Styled.Match />
        <Styled.Match />
        <Styled.Match />
      </Styled.MatchesList>
      <Container>
        <CalendarRow />
      </Container>
      <LeagueWrapper>
        <Styled.MatchLeague />
        <Styled.MatchLeague />
        <Styled.MatchLeague />
        <Styled.MatchLeague />
        <Styled.MatchLeague />
        <Styled.MatchLeague />
        <Styled.MatchLeague />
      </LeagueWrapper>
    </Styled.Root>
  )
}

export default SportRoute
