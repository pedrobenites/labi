import React from 'react'
import { page, linguage1, linguage2 } from 'data/pages/03.json'
import Button from 'components/Common/Button'
import ComponentList from 'components/Common/ComponentList'
import H2 from 'components/HTML/H2'
import H3 from 'components/HTML/H3'
import HTML from 'components/HTML/HTML'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from  'components/HTML/Section'
import Slide from 'components/Slider/Slide'
import Slider from 'components/Slider/Slider'

export default () => (
  <PageView {...page}>
    <Section1 />
    <Section2 />
    <SectionLinguage {...linguage1} />
    <hr />
    <SectionLinguage {...linguage2} />
    <hr />
  </PageView>
)

const Section1 = () => (
  <Slider>
    <Slide>
      <div style={{ height: 320 }}>
        <H3>Nós falamos o português correto sempre</H3>
      </div>
    </Slide>
  </Slider>
)

const Section2 = () => (
  <Section className="BGSecondary">
    <H2>
      Título lorem ipsum sobre linguagem ativa e passiva
    </H2>
    <P>
      Nós praticamos 2 tipos de linguagem, a ATIVA e a REATIVA.
      Elas permitem que nós sejamos acolhedores sem desrespeitar as nossas regras de linguagem.
    </P>
    <Button className="BtnOutlineInverted">Vamos lá</Button>
  </Section>
)


const SectionLinguage = ({ title, list }) => (
  <Section full>
    <div className="TextCenter PB2x">
      <H2>{title}</H2>
    </div>
    <div>
      <ComponentList component={Step}>
        {list}
      </ComponentList>
    </div>
  </Section>
)

const Step = ({ index, text }) => (
  <div className="Flex AICenter P1x W80 MAuto">
    <div className="ColorPrimary Saira SairaLight FS9x FlexGrow">
      {index + 1}.
    </div>
    <HTML className="W80 SingleSpace ColorGray">
      {text}
    </HTML>
  </div>
)
