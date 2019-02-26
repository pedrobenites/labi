import React from 'react'
import Button from 'components/Common/Button'
import H2 from 'components/HTML/H2'
import P from 'components/HTML/P'
import Section from 'components/HTML/Section'

export default ({ title = "Vamos adiante?", text, href, remove }) => {
  if (remove) return null
  return (
    <Section className="BGLightGray PV2x">
      <H2>{title}</H2>
      <P className="PV1x">{text}</P>
      <Button className="BtnInverted MT4" arrow href={href}>
        Próximo capítulo
      </Button>
    </Section>
  )
}
