import React from 'react'
import * as Styled from './styles'
import LeagueWrapper from 'src/widgets/LeagueWrapper/LeagueWrapper'
import Container from 'src/components/Container/Container'
import CalendarRow from 'src/widgets/CalendarRow/CalendarRow'
import Group from '../../components/Group/Group'
import { MatchesTitle } from './styles'

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
        <LeagueWrapper>
          <Styled.MatchLeague />
          <Styled.MatchLeague />
          <Styled.MatchLeague />
          <Styled.MatchLeague />
          <Styled.MatchLeague />
          <Styled.MatchLeague />
          <Styled.MatchLeague />
        </LeagueWrapper>
      </Styled.FeedWrapper>
    </Styled.Root>
  )
}

export default SportRoute
