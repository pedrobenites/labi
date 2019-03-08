import React from 'react'
import { page, faq } from 'data/pages/05.json'
import ComponentList from 'components/Common/ComponentList'
import CollapseList from 'components/Common/CollapseList'
import Collapse from 'components/Common/Collapse'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'

export default () => (
  <PageView {...page}>
    <div className="PV40"/>
    <Section id="target" full className="BGWhite">
      <CollapseList collapseProps={{ component: CustomCollapse }}>
        {faq}
      </CollapseList>
    </Section>
  </PageView>
)

const CustomCollapse = ({ list = [] }) => (
  <div className="PH24 PT16" style={{ backgroundColor: '#f5f5f5' }}>
    <ComponentList component={List}>
      {list}
    </ComponentList>
  </div>
)

const List = ({ title, text }) => (
  <P notUseClassNameDefault={true} className="ColorGray FS3x M0 PB16 SingleSpace">
    <strong>{title}</strong><br />
    {text}
  </P>
)
