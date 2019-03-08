import React from 'react'
import classNames from 'classnames'
import Slider from 'react-slick';

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default ({ children, id, fix }) => (
  <section className={classNames({ PT40: !fix })} id={id}>
    <div className="PB2x PT40">
      <Slider {...sliderSettings}>
        {children}
      </Slider>
    </div>
  </section>
)

export function SimpleSlider ({ children, ...props }) {
  return (
    <div {...props}>
      <Slider {...sliderSettings}>
        {children}
      </Slider>
    </div>
  )
}
