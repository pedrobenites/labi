import React from 'react'

export default ({ children, component: Component, componentProps }) =>
  children.map((props, i) => (
    <Component {...props} key={i} index={i} {...componentProps} />
  ))
