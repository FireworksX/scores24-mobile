import React from 'react'
import * as Styled from './styles'

interface SportRouteProps {
  className?: string
}

const SportRoute: React.FC<SportRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <Styled.Title>
          <Styled.TitleIcon name='soccer' />
          Футбол
        </Styled.Title>
        <Styled.Description>
          Осознанный досуг и саморазвитие: обсуждаем искусство, музыку, кино, литературу и не только
        </Styled.Description>
      </Styled.Header>
    </Styled.Root>
  )
}

export default SportRoute
