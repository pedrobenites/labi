import React from 'react'
import classNames from 'classnames'

export default ({ className, children, notUseClassNameDefault, isList }) => {
  const classNameComponent = classNames({
    ['ColorBlack SingleSpace PV1x Opacity5']: !notUseClassNameDefault,
  }, className)

  if (isList) {
    return children.map((child, key) => (
      <p className={classNameComponent} key={key}>
        {child}
      </p>
    ))
  }

  return (
    <p className={classNameComponent}>
      {children}
    </p>
  )
}
