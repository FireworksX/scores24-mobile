import React, { SyntheticEvent } from 'react'
import * as Styled from './styles'

interface TouchableProps {
  className?: string
  onClick?: (e: SyntheticEvent) => any
}

const Touchable: React.FC<TouchableProps> = ({ className, children, onClick }) => {
  return <Styled.Root className={className} onClick={onClick}>{children}</Styled.Root>
}

export default Touchable
