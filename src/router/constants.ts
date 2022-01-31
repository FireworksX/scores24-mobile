import { createConstants } from 'src/utils/createConstants'

const langSlugs = createConstants('en', 'ru', 'es', 'it')
const pageSlugs = createConstants('about', 'contacts', 'rules')

const ROUTE_NAMES = createConstants(
  '__splat_route',
  'root',
  'lang',
  'home',
  'sport',
  'sportMatches',
  'sportLive',
  'sportDate',
  'match',
  'matchReview',
)
export type RouteNamesType = keyof typeof ROUTE_NAMES

const ROUTE_PARAMS = createConstants('langSlug', 'sportSlug', 'sportDate', 'matchSlug')

export { langSlugs, pageSlugs, ROUTE_NAMES, ROUTE_PARAMS }
