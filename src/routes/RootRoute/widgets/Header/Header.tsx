import React from 'react'
import * as Styled from './styles'
import Link from 'src/widgets/Link/Link'
import { buildName } from 'src/utils/buildName'
import { ROUTE_NAMES } from 'src/router/constants'
import { useRouter } from 'src/hooks/useRouter'

interface HeaderProps {
  className?: string
}

const sports = [
  {
    name: 'Футбол',
    slug: 'soccer'
  },
  {
    name: 'Хоккей',
    slug: 'ice-hockey'
  },
  {
    name: 'Баскетболл',
    slug: 'basketball'
  },
  {
    name: 'Теннис',
    slug: 'tennis'
  },
  {
    name: 'Волейболл',
    slug: 'volleyball'
  },
  {
    name: 'Бейсболл',
    slug: 'baseball'
  }
]

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { langSlug } = useRouter()
  return (
    <Styled.Root className={className}>
      <Styled.Top>
        <Link linkName='root'>
          <Styled.Logo />
        </Link>
        <Styled.Search />
        <Styled.User />
      </Styled.Top>
      <Styled.SportList>
        {sports.map(({ name, slug }) => (
          <Styled.SportItem
            key={slug}
            linkName={buildName(ROUTE_NAMES.lang, ROUTE_NAMES.sport, ROUTE_NAMES.sportMatches)}
            params={{
              langSlug,
              sportSlug: slug
            }}
          >
            <Styled.SportIcon name={slug as SvgNames} />
            {name}
          </Styled.SportItem>
        ))}
      </Styled.SportList>
    </Styled.Root>
  )
}

export default Header
