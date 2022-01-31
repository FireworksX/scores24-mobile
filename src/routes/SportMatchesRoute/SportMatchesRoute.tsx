import React from 'react'
import * as Styled from './styles'
import { useSportMatches } from './hooks/useSportMatches'
import Group from 'src/components/Group/Group'
import Container from 'src/components/Container/Container'
import CalendarRow from 'src/widgets/CalendarRow/CalendarRow'
import LeagueWrapper from 'src/widgets/LeagueWrapper/LeagueWrapper'
import { route } from '../../hoc/route'
import { ROUTE_NAMES } from '../../router/constants'

interface SportMatchesRouteProps {
  className?: string
}

const SportMatchesRoute: React.FC<SportMatchesRouteProps> = ({ className }) => {
  const { leagues } = useSportMatches()

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

      <Group
        title={
          <Container>
            <Styled.MatchesTitle>Лучшие матчи</Styled.MatchesTitle>
          </Container>
        }
      >
        <Styled.MatchesList>
          <Styled.Match />
          <Styled.Match />
          <Styled.Match />
          <Styled.Match />
          <Styled.Match />
          <Styled.Match />
        </Styled.MatchesList>
      </Group>

      <Styled.FeedWrapper>
        <Container>
          <CalendarRow />
        </Container>
        {leagues.map(league => (
          <LeagueWrapper key={league?.league?.slug} name={league?.league.name} country={league?.league.country}>
            {league?.matches.map(match => (
              <Styled.MatchLeague key={match?.slug} match={match} />
            ))}
          </LeagueWrapper>
        ))}
      </Styled.FeedWrapper>
    </Styled.Root>
  )
}

export default route(SportMatchesRoute, ROUTE_NAMES.sportMatches)
