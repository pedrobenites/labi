import React from 'react'
import { page, faq } from 'data/pages/01.json'
import Button from 'components/Common/Button'
import Collapse from 'components/Common/Collapse'
import ComponentList from 'components/Common/ComponentList'
import H2 from 'components/HTML/H2'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'
import Slider from 'components/Slider/Slider'
import Slide from 'components/Slider/Slide'
import Thumbnail from 'components/Pages/Thumbnail'

export default () => (
  <PageView {...page}>
    <Section1 />
    <Section2 />
    <Section3 />
  </PageView>
)

const Section1 = () => (
  <Slider>
    <Slide1 />
    <Slide2 />
    <Slide3 />
  </Slider>
)

const Slide1 = () => (
  <Slide>
    <div className="ColorPrimary Saira FS80">a.</div>
    <p className="FS6x ColorGray PV2x">
      Não medimos esforços para <strong className="ColorPrimary">cuidar do nosso cliente</strong> e <strong className="ColorPrimary">todos os detalhes importam</strong>.
    </p>
  </Slide>
)

const Slide2 = () => (
  <Slide>
    <div className="ColorPrimary Saira FS80">b.</div>
    <p className="FS6x ColorGray PV2x">
      Não medimos esforços para.
    </p>
  </Slide>
)

const Slide3 = () => (
  <Slide>
    <div className="ColorPrimary Saira FS80">c.</div>
    <p className="FS6x ColorGray PV2x">
      Não medimos esforços para.
    </p>
  </Slide>
)

const Section2 = () => (
  <Section className="BGSecondary">
    <H2>Mas o que importa é transformar palavras em ação, não é mesmo?</H2>
    <P>
      Transformamos os nossos valores em 3 pilares, que são a nossa fórmula
      secreta parade como garantir que todos eles estarão presentes no nosso dia-a-dia SEMPRE!
    </P>
    <Button className="BtnOutlineInverted">Nossos pilares</Button>
  </Section>
)

const Section3 = () => (
  <Section className="TextCenter BGWhite" full>
    <div className="W80 MHAuto">
      <Thumbnail src="http://www.clinicaacolher.com.br/uploads/images/paginas/6.jpg" />
      <H2>Acolher</H2>
      <P>Fazemos os pacientes se sentirem especiais com um tratamento empático e humanizado.</P>
    </div>
    <ComponentList component={Collapse}>
      {faq}
    </ComponentList>
  </Section>
)
