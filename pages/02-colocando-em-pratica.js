import React from 'react'
import { page, faq, historys } from 'data/pages/02.json'
import Collapse from 'components/Common/Collapse'
import ComponentList from 'components/Common/ComponentList'
import Link from 'components/Common/Link'
import HistoryCard from 'components/Pages/HistoryCard'
import H2 from 'components/HTML/H2'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'

export default () => (
  <PageView {...page}>
    <Section1 />
    <Section2 />
  </PageView>
)

const Section1 = () => (
  <section className="PT40">
    <div className="Container TextCenter PH32 PT2x">
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</P>
    </div>
    <ComponentList component={Collapse} componentProps={{ full: true }}>
      {faq}
    </ComponentList>
  </section>
)

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
