import { Route } from 'router5'
import { FC } from 'react'
import { langSlugs, ROUTE_NAMES, ROUTE_PARAMS } from './constants'
import routeComponents from 'src/routes/index'

declare module 'router5' {
  interface Route {
    component?: FC
  }
}

const langRegex = `(${Object.values(langSlugs).join('|')})`

export const routes: Route[] = [
  {
    name: ROUTE_NAMES.root,
    path: '/',
    component: routeComponents.RootRoute,
    children: [
      {
        name: ROUTE_NAMES.lang,
        path: `:${ROUTE_PARAMS.langSlug}<${langRegex}>`,
        children: [
          {
            name: ROUTE_NAMES.sport,
            path: `/:${ROUTE_PARAMS.sportSlug}`,
            component: routeComponents.SportRoute,
            children: [
              {
                name: ROUTE_NAMES.sportMatches,
                path: '/',
                component: routeComponents.SportMatchesRoute,
                children: [
                  {
                    name: ROUTE_NAMES.sportDate,
                    path: `/:${ROUTE_PARAMS.sportDate}`
                  },
                  { name: ROUTE_NAMES.sportLive, path: '/live' }
                ]
              },
              {
                name: ROUTE_NAMES.match,
                path: `/m-:${ROUTE_PARAMS.matchSlug}`,
                children: [
                  {
                    name: ROUTE_NAMES.matchReview,
                    path: '/',
                    component: routeComponents.MatchRoute
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
