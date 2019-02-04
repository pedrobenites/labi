import React from 'react'
import classNames from 'classnames'
import Icon from 'components/Common/Icon'
import Link from 'components/Common/Link'

const Button = ({ children, className, icon, ...props }) => {
  const Component = props.href ? Link : 'button'
  return (
    <Component className={classNames('Btn', className, { BtnIcon: icon })} {...props}>
      <span className="InlineBlock">{children}</span>
      {icon && <Icon name={icon} size={2} />}
    </Component>
  )
}

export default Button
