import React from 'react'
import { page, faq } from 'data/pages/05.json'
import ComponentList from 'components/Common/ComponentList'
import Collapse from 'components/Common/Collapse'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'

export default () => (
  <PageView {...page}>
    <div className="PV40"/>
    <Section1 />
  </PageView>
)

const Section1 = () => (
  <Section full className="BGWhite">
    <ComponentList component={Collapse}>
      {faq}
    </ComponentList>
  </Section>
)
