import React, { useCallback } from 'react'
import cn from 'classnames'
import * as Styled from './styles'
import { useRoute, useRouter } from 'react-router5'

interface LinkProps {
  linkName: string
  params?: any
  className?: string
  activeClassName?: string
  onClick?: (e: React.MouseEvent<any>) => any
}

const Link: React.FC<LinkProps> = ({ className, linkName, params, children, activeClassName = '', onClick }) => {
  const router = useRouter()
  const { route } = useRoute()
  const href = router.buildUrl(linkName, params)
  const isSamePage = route?.path === href

  const onClickHandler = useCallback((e: React.MouseEvent<any>) => {
    e.preventDefault()
    e.stopPropagation()

    if (onClick) {
      onClick(e)
    }

    router.navigate(linkName, params)
  }, [])

  return (
    <Styled.Root
      className={cn(className, {
        [activeClassName]: isSamePage
      })}
      href={href}
      onClick={onClickHandler}
    >
      {children}
    </Styled.Root>
  )
}

export default Link
