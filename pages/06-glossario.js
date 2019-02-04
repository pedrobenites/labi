import React from 'react'
import { page, glossary } from 'data/pages/06.json'
import Button from 'components/Common/Button'
import H2 from 'components/HTML/H2'
import ComponentList from 'components/Common/ComponentList'
import Link from 'components/Common/Link'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'
import ScrollTo from 'components/Common/ScrollTo'

const summary = glossary.map(({ letter }) => ({letter}))

export default () => (
  <PageView {...page} className="BGWhite">
    <div className="PT40" />
    <SectionGlossary />
    <LastSection />
  </PageView>
)

const SectionGlossary = () => (
  <section className="PV2x">
    <div className="PV24 AutoSlider">
      <div className="Flex Wrapper">
        <div className="MAuto Flex JCCenter PH24">
          <ComponentList component={Summary}>
            {summary}
          </ComponentList>
        </div>
      </div>
    </div>
    <div className="Container">
      <ComponentList component={Collection}>
        {glossary}
      </ComponentList>
    </div>
  </section>
)

const Summary = ({ letter }) => (
  <ScrollTo
    to={letter}
    offsetTop={100}
    className="Card BGLightGray M8 ColorPrimary Saira Pointer">
    {letter}
  </ScrollTo>
)

const Collection = ({ letter, list }) => (
  <div id={letter} className="PV1x TextCenter W80 MAuto">
    <div className="Saira FS80 ColorPrimary">{letter}</div>
    <ComponentList component={CollectionItem}>
      {list}
    </ComponentList>
  </div>
)

const CollectionItem = ({ title, text }) => (
  <div className="PV1x">
    <div className="Saira ColorPrimary FS6x PT16">{title}</div>
    <p className="ColorGray SingleSpace P0">{text}</p>
  </div>
)

const LastSection = () => (
  <Section className="BGSecondary">
    <H2>Tem alguma palavra que você gostaria de acrescentar aqui?</H2>
    <P>
      Basta mandar um e-mail para{' '}
      <Link href="mailto:glossario@labiexames.com">glossario@labiexames.com</Link>
      {' '}com a palavra, o seu significado e porque você acha que ela deveria estar no nosso glossário!
    </P>
    <Button href="/" className="BtnOutlineInverted">Nosso pilares</Button>
    <Button href="/" icon="arrow-right" className="BtnInverted MT16">
      Voltar ao início
    </Button>
  </Section>
)
