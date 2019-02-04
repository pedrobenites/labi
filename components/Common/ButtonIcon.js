import React from 'react'
import Icon from 'components/Common/Icon'
import Link from 'components/Common/Link'

const ButtonIcon = ({ children, icon, ...props }) => (
  <div className="ButtonIcon W100 TextCenter Pointer">
    <Link className="InlineBlock" {...props}>
      <Icon name={icon} size={2} />
      <span className="Text Saira">{children}</span>
    </Link>
  </div>
)

export default ButtonIcon
