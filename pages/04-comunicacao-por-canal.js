import React from 'react'
import { page, faq } from 'data/pages/04.json'
import CollapseSlider from 'components/Common/CollapseSlider'
import ComponentList from 'components/Common/ComponentList'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Slide from 'components/Slider/Slide'

export default () => (
  <PageView {...page}>
    <section className="PT40">
      <div id="target" className="Container TextCenter PH32 PT2x">
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</P>
      </div>
      <ComponentList component={CollapseSlider} componentProps={{ slideComponent: SlideFaq }}>
        {faq}
      </ComponentList>
    </section>
  </PageView>
)

const SlideFaq = ({ imageUrl, title, subtitle, list }, key) => (
  <Slide key={key}>
    {imageUrl && (
      <img src={imageUrl} width={300} height={400} />
    )}
    <div className="Saira FS6x ColorPrimary">
      {title}
    </div>
    <p className="ColorGray SingleSpace FS4x">
      {subtitle}
    </p>
  </Slide>
)
