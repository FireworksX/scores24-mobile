import styled from 'styled-components'
import Icon from 'src/components/Icon/Icon'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import MatchCard from 'src/widgets/MatchCard/MatchCard'
import MatchRow from 'src/widgets/MatchRow/MatchRow'

export const Root = styled.div``

export const Header = styled.div`
  padding: 17px ${({ theme }) => theme.baseStyles.paddings.gutterMobile} 5px;
`

export const Title = styled.h1`
  ${({ theme }) => theme.typography.text_26_30};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const TitleIcon = styled(Icon).attrs({
  width: 30,
  height: 30
})`
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
`

export const MatchesTitle = styled.h2`
  ${({ theme }) => theme.typography.text_16_20}
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;
`

export const MatchesList = styled(HorizontalScroll)`
  padding: 0 15px 60px 15px;
`

export const Match = styled(MatchCard)`
  margin-right: 15px;
`

export const FeedWrapper = styled.div`
  margin-top: -35px;
`

export const MatchLeague = styled(MatchRow)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`
