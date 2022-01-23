import React from 'react'
import * as Styled from './styles'
import Icon from "../../../../components/Icon/Icon";

interface NavigationProps {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return <Styled.Root className={className}>
    <Styled.Item>
      <Styled.Icon name='faults'/>
      <Styled.Name>Матчи</Styled.Name>
    </Styled.Item>
    <Styled.Item>
      <Styled.Icon name='fire'/>
      <Styled.Name>Тренды</Styled.Name>
    </Styled.Item>
    <Styled.Item isActive>
      <Styled.Icon name='bet-stacked'/>
      <Styled.Name>Прогнозы</Styled.Name>
    </Styled.Item>
    <Styled.Item>
      <Styled.Icon name='bookmakers-rating'/>
      <Styled.Name>Букмекеры</Styled.Name>
    </Styled.Item>
    <Styled.Item>
      <Styled.Icon name='bars'/>
      <Styled.Name>Прочее</Styled.Name>
    </Styled.Item>
  </Styled.Root>
}

export default Navigation
