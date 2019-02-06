import React from 'react'
import classNames from 'classnames'
import Link from 'components/Common/Link'

const Button = ({ children, className, arrow, ...props }) => {
  const Component = props.href ? Link : 'button'
  return (
    <Component className={classNames('Btn', className)} {...props}>
      <span className="InlineBlock">{children}</span>
      {arrow && (
        <img
          className="ML12"
          style={{ top: 3, position: 'relative' }}
          src="/static/img/ic_arrow-right.svg" />
      )}
    </Component>
  )
}

export default Button
