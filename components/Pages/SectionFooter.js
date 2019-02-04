import React from 'react'
import Button from 'components/Common/Button'
import H2 from 'components/HTML/H2'
import P from 'components/HTML/P'
import Section from 'components/HTML/Section'

export default ({ href, remove }) => {
  if (remove) return null
  return (
    <Section className="BGLightGray">
      <H2>Vamos adiante?</H2>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore.</P>
      <Button className="BtnInverted" icon="arrow-right" href={href}>
        Próximo capítulo
      </Button>
    </Section>
  )
}
