import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
  activeClassName: string
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ''

  return (
    <Link href={rest.href} className={className}>
      {children}
    </Link>
  )
}
