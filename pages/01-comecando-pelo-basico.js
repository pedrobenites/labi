import React from 'react'
import { page, pillars, slides } from 'data/pages/01.json'
import Button from 'components/Common/Button'
import Collapse from 'components/Common/Collapse'
import ComponentList from 'components/Common/ComponentList'
import HTML from 'components/HTML/HTML'
import H2 from 'components/HTML/H2'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'
import ScrollTo from 'components/Common/ScrollTo'
import Slider from 'components/Slider/Slider'
import Slide from 'components/Slider/Slide'
import Thumbnail from 'components/Pages/Thumbnail'

export default () => (
  <PageView {...page}>
    <SectionValues />
    <SectionPillars />
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

const SectionPillars = () => (
  <Section className="BGSecondary">
    <H2>Mas o que importa é transformar palavras em ação, não é mesmo?</H2>
    <P>
      Transformamos os nossos valores em 3 pilares, que são a nossa fórmula
      secreta parade como garantir que todos eles estarão presentes no nosso dia-a-dia SEMPRE!
    </P>
    <ScrollTo to="pilares">
      <Button className="BtnOutlineInverted">Nossos pilares</Button>
    </ScrollTo>
  </Section>
)

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
    <ComponentList
      component={Collapse}
      componentProps={{
        classNameBody: 'M0 TextCenter Opacity5 MB1x',
        notUseClassNameDefault: true,
        isList: true,
      }}>
      {faq}
    </ComponentList>
  </Slide>
)
