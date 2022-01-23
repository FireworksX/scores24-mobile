import { FC } from 'react'
import { RouteNamesType } from 'src/router/constants'
import { useRouteChildren } from '../hooks/useRouteChildren'

export const route = (Route: FC, routeName: RouteNamesType) => {
  const RouteWrapper: FC = () => {
    const ChildrenComponent = useRouteChildren(routeName)
    const children = <ChildrenComponent />

    return <Route>{children}</Route>
  }

  return RouteWrapper
}
