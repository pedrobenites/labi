import React from 'react'
import classNames from 'classnames'

export default ({ children, className, ...props }) => (
  <h3 className={classNames('ColorPrimary Saira FS5x', className)} {...props}>
    {children}
  </h3>
)
