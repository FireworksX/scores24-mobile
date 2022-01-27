import React from 'react'
import * as Styled from './styles'

interface LeagueWrapperProps {
  className?: string
}

const LeagueWrapper: React.FC<LeagueWrapperProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.League>
        <Styled.LeagueWrapper>
          <Styled.Logo />
          <div>
            <Styled.Name>La Liga</Styled.Name>
            <Styled.Country>Spain</Styled.Country>
          </div>
          <Styled.Arrow />
        </Styled.LeagueWrapper>
      </Styled.League>

      {children && <Styled.Body>{children}</Styled.Body>}
    </Styled.Root>
  )
}

export default LeagueWrapper
