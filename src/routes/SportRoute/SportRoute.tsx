import React from 'react'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'

interface SportRouteProps {
  className?: string
}

const SportRoute: React.FC<SportRouteProps> = ({ className, children }) => {
  return <>{children}</>
}

export default route(SportRoute, ROUTE_NAMES.sport)
