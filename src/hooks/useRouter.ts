import { useCallback, useMemo } from 'react'
import { useRoute } from 'react-router5'
import { ROUTE_PARAMS } from 'src/router/constants'

export const useRouter = () => {
  const { route, router } = useRoute()

  const getLastSegment = useCallback((name: string | null | undefined) => {
    return name?.match(/\w+$/)?.[0] || null
  }, [])

  const getParam = useCallback(
    (key: keyof typeof ROUTE_PARAMS) => {
      return route?.params
    },
    [route]
  )

  const defaultParams = useMemo(
    () => ({
      [ROUTE_PARAMS.langSlug]: route?.params?.[ROUTE_PARAMS.langSlug],
      [ROUTE_PARAMS.sportSlug]: route?.params?.[ROUTE_PARAMS.sportSlug]
    }),
    [route]
  )

  return {
    routerInstance: router,
    getLastSegment,
    getParam,
    ...defaultParams
  }
}
