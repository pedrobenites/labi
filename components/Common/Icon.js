import React from  'react'
import classNames from 'classnames'

const fontSize = [ null, 18, 24, 36, 48 ]

const Icon = ({ name, size, ...props }) => (
  <span className="Icon InlineBlock" {...props}>
    <i className={classNames(
        `mdi mdi-${name}`,
        {
          [`mdi-${fontSize[size]}px`]: size,
        }
      )} />
  </span>
)

export default Icon
