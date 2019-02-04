import React from 'react'
import classNames from 'classnames'

export default ({ className, children }) => (
  <p className={classNames('ColorBlack SingleSpace PV1x Opacity5', className)}>
    {children}
  </p>
)
