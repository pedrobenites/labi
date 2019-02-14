import React from 'react'
import Slider from 'react-slick';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default ({ children, id }) => (
  <section className="PT40" id={id}>
    <div className="PB2x PT40">
      <Slider {...sliderSettings}>
        {children}
      </Slider>
    </div>
  </section>
)
