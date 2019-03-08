import React from 'react'
import { page, pillars, slides, yellowSection } from 'data/pages/01.json'
import CollapseList from 'components/Common/CollapseList'
import HTML from 'components/HTML/HTML'
import H2 from 'components/HTML/H2'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Slider from 'components/Slider/Slider'
import Slide from 'components/Slider/Slide'
import Thumbnail from 'components/Pages/Thumbnail'
import YellowSection from 'components/Pages/YellowSection'

export default () => (
  <PageView {...page}>
    <SectionValues />
    <YellowSection {...yellowSection} />
    <SectionPillarsSlides />
  </PageView>
)

const SectionValues = () => (
  <Slider id="target">
    {slides.map(({ letter, text }, key) => (
      <Slide key={key}>
        <div className="ColorPrimary Saira FS80">{letter}</div>
        <HTML className="FS6x ColorGray PV2x" tagName="p">
          {parseTextHtmlStrong(text)}
        </HTML>
      </Slide>
    ))}
  </Slider>
)

const parseTextHtmlStrong = html => html.replace(/<strong>/g, '<strong class="ColorPrimary Opacity7">')

const SectionPillarsSlides = () => (
  <Slider id="pilares" className="TextCenter BGWhite">
    {pillars.map((props, key) => <Pillar {...props} key={key} />)}
  </Slider>
)

const Pillar = ({ imageUrl, title, text, faq }) => (
  <Slide>
    <div className="P24">
      <img style={{ display: 'inline' }} src={imageUrl} />
    </div>
    <H2>{title}</H2>
    <P>{text}</P>
    <CollapseList
      collapseProps={{
        className: 'M0 TextCenter Opacity5 MB1x',
        notUseClassNameDefault: true,
        isList: true,
      }}>
      {faq}
    </CollapseList>
  </Slide>
)
