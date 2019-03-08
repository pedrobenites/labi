import react from 'react'
import Button from 'components/Common/Button'
import H2 from 'components/HTML/H2'
import P from 'components/HTML/P'
import ScrollTo from 'components/Common/ScrollTo'
import Section from 'components/HTML/Section'

const YellowSection = ({ title, text, cta }) => (
  <Section className="BGSecondary PV1x">
    <H2>{title}</H2>
    <P>{text}</P>
    <ScrollTo to={cta.scrollTo}>
      <Button className="BtnOutlineInverted">{cta.text}</Button>
    </ScrollTo>
  </Section>
)

export default YellowSection
