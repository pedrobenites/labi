import React from 'react'
import Button from 'components/Common/Button'

export default ({ className, number, title, text, cta }) => (
  <header className="PB3x">
    <div className="Spacer">
      <div className="Container PT2x PH32">
        <div className="ColorSecondary Saira FS80">
          {number}
        </div>
        <h1 className="ColorWhite PT8 Saira SairaLight FS8x">
          {title}
        </h1>
        <p className="ColorWhite SingleSpace Opacity6 PV1x">
          {text}
        </p>
        <Button className="BtnOutline">
          {cta}
        </Button>
      </div>
    </div>
  </header>
)