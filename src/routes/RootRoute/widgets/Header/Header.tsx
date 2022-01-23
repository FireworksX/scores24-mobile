import React from 'react'
import * as Styled from './styles'

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
  return (
    <Styled.Root className={className}>
      <Styled.Top>
        <Styled.Logo />
        <Styled.Search />
        <Styled.User />
      </Styled.Top>
      <Styled.SportList>
        {sports.map(({ name, slug }) => (
          <Styled.SportItem key={slug}>
            <Styled.SportIcon name={slug as SvgNames} />
            {name}
          </Styled.SportItem>
        ))}
      </Styled.SportList>
    </Styled.Root>
  )
}

export default Header
