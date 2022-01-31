import React from 'react'
import * as Styled from './styles'

interface LeagueWrapperProps {
  name: string
  country: {
    name: string
    iso: string
  }
  className?: string
}

const LeagueWrapper: React.FC<LeagueWrapperProps> = ({ className, name, country, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.League>
        <Styled.LeagueWrapper>
          <Styled.Logo iso={country?.iso} size={60} />
          <div>
            <Styled.Name>{name}</Styled.Name>
            <Styled.Country>{country?.name}</Styled.Country>
          </div>
          <Styled.Arrow />
        </Styled.LeagueWrapper>
      </Styled.League>

      {children && <Styled.Body>{children}</Styled.Body>}
    </Styled.Root>
  )
}

export default LeagueWrapper
