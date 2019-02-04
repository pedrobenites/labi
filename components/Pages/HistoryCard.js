import React from 'react'
import Icon from 'components/Common/Icon'
import Link from 'components/Common/Link'

export default ({ title, youtubeSlug }) => (
  <div className="PV8">
    <Link className="Card BGWhite" href="/">
      <div className="Flex JCSpaceBetween">
        <div className="FS4x">
          <div className="ColorGray Saira SairaLight MB8">
            Conheça a história
          </div>
          <div className="ColorPrimary Saira SairaStrong Uppercase">
            {title}
          </div>
        </div>
        <Icon
          name="triangle-outline"
          size={3}
          style={{ transform: 'rotate(90deg)' }} />
      </div>
    </Link>
  </div>
)
