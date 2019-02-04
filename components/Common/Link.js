import React from 'react'
import Link from 'next/link'

export default ({ children, href, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>
        {children}
      </a>
    </Link>
  )
}
