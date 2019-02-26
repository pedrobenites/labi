import React from 'react'

const Ul = ({ children = [], ...props }) => {
  if (!children.length) return null
  return (
    <ul {...props}>
      {children.map((child, key) => (
        <li className="PV4" key={key}>{child}</li>
      ))}
    </ul>
  )
}

export default Ul
