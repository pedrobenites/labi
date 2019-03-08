import React from 'react'
import classNames from 'classnames'

export default ({ children, className }) => (
  <div className="Flex AICenter JCCenter TextCenter P1x Container">
    <div className={classNames('PB24', className)}>
      {children}
    </div>
  </div>
)
