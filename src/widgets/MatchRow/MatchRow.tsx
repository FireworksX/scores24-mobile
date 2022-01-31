import React from 'react'
import * as Styled from './styles'
import { useRouter } from 'src/hooks/useRouter'
import { buildName } from '../../utils/buildName'
import { ROUTE_NAMES } from '../../router/constants'

interface Match {
  matchDate: string
  slug: string
  teams: {
    name: string
    logo: string
    slug: string
  }[]
}

interface MatchRowProps {
  className?: string
  match: Match
}

const MatchRow: React.FC<MatchRowProps> = ({ className, match }) => {
  const { sportSlug, langSlug } = useRouter()

  return (
    <Styled.Root className={className}>
      <Styled.LeftSide>
        <Styled.Time>20:40</Styled.Time>
      </Styled.LeftSide>
      <Styled.Teams
        linkName={buildName(ROUTE_NAMES.lang, ROUTE_NAMES.sport, ROUTE_NAMES.match, ROUTE_NAMES.matchReview)}
        params={{
          langSlug,
          sportSlug,
          matchSlug: match?.slug
        }}
      >
        {match.teams.map(team => (
          <Styled.TeamRow key={team?.slug}>
            <Styled.Logo src={team.logo} />
            <Styled.Name>{team.name}</Styled.Name>
            <Styled.Score>-</Styled.Score>
          </Styled.TeamRow>
        ))}
      </Styled.Teams>
    </Styled.Root>
  )
}

export default MatchRow
