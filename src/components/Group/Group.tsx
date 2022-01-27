import React, { ReactNode } from 'react'
import * as Styled from './styles'

interface GroupProps {
  className?: string
  title?: ReactNode
}

const Group: React.FC<GroupProps> = ({ className, title, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Root>
  )
}

export default Group
