import React from 'react'
import classNames from 'classnames'

export default ({ children, full, ...props }) => (
  <section {...props}>
    <div className="Container P2x">
      <div className={classNames({ W80: !full })}>
        {children}
      </div>
    </div>
  </section>
)
