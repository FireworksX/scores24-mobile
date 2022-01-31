import dayjs from 'dayjs'
import { useRouter } from 'src/hooks/useRouter'
import { useSportMatchesQuery } from '../queries/SportMatchesQuery'
import { phpFormat } from 'src/utils/dateUtils'

export const useSportMatches = () => {
  const { sportSlug, langSlug } = useRouter()

  const [{ data }] = useSportMatchesQuery({
    variables: {
      sportSlug,
      langSlug,
      isLive: false,
      datebetween: [
        dayjs.tz('GMT+0').startOf('day').format(phpFormat),
        dayjs.tz('GMT+0').endOf('day').format(phpFormat)
      ]
    }
  })

  return {
    leagues: data?.LeagueList?.leagues || []
  }
}
