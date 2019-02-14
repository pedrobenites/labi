import React from 'react'
import classNames from 'classnames'

export default ({ className, children, notUseClassNameDefault }) => {
  const classNameComponent = classNames({
    ['ColorBlack SingleSpace PV1x Opacity5']: !notUseClassNameDefault,
  }, className)

  if (typeof children === typeof [] && children.length !== undefined) {
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
