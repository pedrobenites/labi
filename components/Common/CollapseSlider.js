import React from 'react'
import Collapse from 'components/Common/Collapse'
import { SimpleSlider } from 'components/Slider/Slider'

const CollapseSlider = ({ slides = [], slideComponent: Component, ...props }) => (
  <Collapse {...props} full={true}>
    {slides.length && (
      <SimpleSlider>
        {slides.map(Component)}
      </SimpleSlider>
    )}
  </Collapse>
)

export default CollapseSlider
