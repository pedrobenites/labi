import React from 'react'
import Icon from 'components/Common/Icon'
import Link from 'components/Common/Link'

export default ({ title, youtubeSlug }) => (
  <div className="PV8 HistoryCard">
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
        <img src="/static/img/ic_play_arrow_24px.svg" />
      </div>
    </Link>
  </div>
)
