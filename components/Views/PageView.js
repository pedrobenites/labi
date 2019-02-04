import React from 'react'
import MainView from 'components/Views/MainView'
import SectionHeader from 'components/Pages/SectionHeader'
import SectionFooter from 'components/Pages/SectionFooter'

export default ({ children, meta, header, footer, className }) => (
  <MainView {...meta} className={className}>
    <SectionHeader {...header} />
    {children}
    <SectionFooter {...footer} />
  </MainView>
)
