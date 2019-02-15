import React from 'react'
import { page, faq } from 'data/pages/05.json'
import ComponentList from 'components/Common/ComponentList'
import Collapse from 'components/Common/Collapse'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'

export default () => (
  <PageView {...page}>
    <div className="PV40"/>
    <Section id="target" full className="BGWhite">
      <ComponentList component={CustomCollapse}>
        {faq}
      </ComponentList>
    </Section>
  </PageView>
)

const CustomCollapse = ({ title, list = [] }) => (
  <Collapse title={title}>
    <ComponentList component={List}>
      {list}
    </ComponentList>
  </Collapse>
)

const List = ({ title, text }) => (
  <P notUseClassNameDefault={true} className="ColorGray FS3x M0 PB16">
    <strong>{title}</strong><br />
    {text}
  </P>
)
