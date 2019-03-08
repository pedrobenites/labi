import React from 'react'
import { section1, page, faq, historys, yellowSection } from 'data/pages/02.json'
import CollapseSlider from 'components/Common/CollapseSlider'
import ComponentList from 'components/Common/ComponentList'
import CollapseList from 'components/Common/CollapseList'
import Link from 'components/Common/Link'
import HistoryCard from 'components/Pages/HistoryCard'
import H2 from 'components/HTML/H2'
import H3 from 'components/HTML/H3'
import P from 'components/HTML/P'
import Ul from 'components/HTML/Ul'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'
import { SimpleSlider } from 'components/Slider/Slider'
import Slide from 'components/Slider/Slide'

export default () => (
  <PageView {...page}>
    <Section1 {...section1} />
    <SectionPlaylist {...yellowSection} />
  </PageView>
)

const Section1 = ({ text }) => (
  <section className="PT40">
    <div id="target" className="Container TextCenter PH32 PT2x">
      <P>{text}</P>
    </div>
    <CollapseList collapseProps={{ component: SliderFaq, full: true }}>
      {faq}
    </CollapseList>
  </section>
)

const SliderFaq = ({ slides }) => {
  if (!slides || !slides.length) return null
  return (
    <SimpleSlider>
      {slides.map((slide, key) => <SlideFaq key={key} {...slide} />)}
    </SimpleSlider>
  )
}

const SlideFaq = ({ bigTitle, title, subtitle, list }) => (
  <Slide>
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

const SectionPlaylist = ({ title, text }) => (
  <Section className="BGSecondary" full>
    <div className="W80">
      <H2>{title}</H2>
      <P>{text}</P>
    </div>
    <ComponentList component={HistoryCard}>
      {historys}
    </ComponentList>
  </Section>
)
