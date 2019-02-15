import React from 'react'
import { page, faq, historys } from 'data/pages/02.json'
import CollapseSlider from 'components/Common/CollapseSlider'
import ComponentList from 'components/Common/ComponentList'
import Link from 'components/Common/Link'
import HistoryCard from 'components/Pages/HistoryCard'
import H2 from 'components/HTML/H2'
import H3 from 'components/HTML/H3'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'
import { SimpleSlider } from 'components/Slider/Slider'
import Slide from 'components/Slider/Slide'

export default () => (
  <PageView {...page}>
    <Section1 />
    <Section2 />
  </PageView>
)

const Section1 = () => (
  <section className="PT40">
    <div id="target" className="Container TextCenter PH32 PT2x">
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</P>
    </div>
    <ComponentList component={CollapseSlider} componentProps={{ slideComponent: SlideFaq }}>
      {faq}
    </ComponentList>
  </section>
)

const SlideFaq = ({ bigTitle, title, subtitle, list }, key) => (
  <Slide key={key}>
    <div className="Container" style={{ maxWidth: 380 }}>
      <p className="TextLeft FS6x SingleSpace Saira ColorPrimary Medium">
        {bigTitle}
      </p>
      <H3 className="Light PB8">{title}</H3>
      <p style={{ minHeight: '2em' }}>{subtitle}</p>
      <Ul className="TextLeft SingleSpace FS2x List ListCheck ColorGray">
        {list}
      </Ul>
    </div>
  </Slide>
)

const Ul = ({ children, ...props }) => {
  if (!children.length) return null
  return (
    <ul {...props}>
      {children.map((child, key) => (
        <li className="PV4" key={key}>{child}</li>
      ))}
    </ul>
  )
}

const Section2 = () => (
  <Section className="BGSecondary" full>
    <div className="W80">
      <H2>Agora, vamos exercitar com histórias reais?</H2>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </P>
    </div>
    <ComponentList component={HistoryCard}>
      {historys}
    </ComponentList>
  </Section>
)
