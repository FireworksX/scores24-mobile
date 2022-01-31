import React from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'

interface MatchRouteProps {
  className?: string
}

const MatchRoute: React.FC<MatchRouteProps> = ({ className }) => {
  return <Styled.Root className={className}>MatchRoute</Styled.Root>
}

export default route(MatchRoute, ROUTE_NAMES.match)
