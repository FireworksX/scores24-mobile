import { useRoute } from 'react-router5'
import { RouteNamesType } from 'src/router/constants'
import { Route } from 'router5'
import { FC } from 'react'

const getRenderRoutes = (routes: Route[], name: string, index = 0, accRoutes: Route[] = []) => {
  const splitNames = name.split('.')
  const currentName = splitNames[index]
  const hasMore = splitNames.length - 1 > index

  const findRoute = routes.find(({ name }) => currentName)

  if (findRoute) {
    accRoutes.push(findRoute)
  }

  if (hasMore && findRoute?.children) {
    getRenderRoutes(findRoute.children, name, index + 1, accRoutes)
  }
  return accRoutes
}

const Noop: FC = ({ children }) => <>{children}</>

export const useRouteChildren = (parentRouteName: RouteNamesType) => {
  const { route, router } = useRoute()
  const { routes } = router.getDependencies()
  const renderComponents = getRenderRoutes(routes, route.name).filter(({ component }) => !!component)
  const currentRouteIndex = renderComponents.findIndex(({ name }) => name === parentRouteName)
  const nextRouteIndex = currentRouteIndex !== -1 ? currentRouteIndex + 1 : -1

  if (nextRouteIndex !== -1) {
    return renderComponents[nextRouteIndex]?.component || Noop
  }
}
