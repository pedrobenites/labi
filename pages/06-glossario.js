import React, { Component } from 'react'
import { page, glossary } from 'data/pages/06.json'
import Button from 'components/Common/Button'
import H2 from 'components/HTML/H2'
import ComponentList from 'components/Common/ComponentList'
import Link from 'components/Common/Link'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Section from 'components/HTML/Section'
import ScrollTo from 'components/Common/ScrollTo'

const summary = glossary.map(({ letter, list }) => ({ letter, active: !!list }))

export default () => (
  <PageView {...page}>
    <div className="PT40" />
    <SectionGlossary />
    <LastSection />
  </PageView>
)

class SectionGlossary extends Component {
  state = { disable: false }

  setDisable = disable => this.setState({ disable })

  render = () => (
    <section className="PV2x">
      <div className="PV24 AutoSlider">
        <DragElement isMoving={this.setDisable}>
          <ComponentList component={Summary} componentProps={{ disable: this.state.disable }}>
            {summary}
          </ComponentList>
        </DragElement>
      </div>
      <div className="Container">
        <ComponentList component={Collection}>
          {glossary}
        </ComponentList>
      </div>
    </section>
  )
}

class DragElement extends Component {
  state = { moving: false, x: 0, delta: 0, referenceDelta: 0, time: 0, width: null }

  _ref = React.createRef()

  componentDidMount = () => {
    this.setState({ width: this._ref.current.clientWidth })
  }

  dragStart = ({ clientX }) => {
    const time = new Date().getTime()
    const referenceDelta = this.state.delta
    this.setState({ moving: true, x: clientX, referenceDelta, time })
  }

  dragMove = ({ clientX }) => {
    if (!this.state.moving) return null
    const time = new Date().getTime() - this.state.time
    if (time > 50) this.props.isMoving && this.props.isMoving(true)
    const delta =  this.state.referenceDelta + this.state.x - clientX
    if (delta <= 0 || delta > this.state.width - 320) return null
    this.setState({ delta })
  }

  dragEnd = () => {
    this.props.isMoving && this.props.isMoving(false)
    this.setState({ moving: false })
  }

  get drag() {
    return {
      onMouseDown: this.dragStart,
      onMouseMove: this.dragMove,
      onMouseUp: this.dragEnd,
      onMouseLeave: this.dragEnd,
      onTouchStart: event => this.dragStart(event.changedTouches[0]),
      onTouchMove: event => this.dragMove(event.changedTouches[0]),
      onTouchEnd: this.dragEnd,
    }
  }

  get style() {
    return {
      transform: `translateX(${this.state.delta * -1}px)`,
      userSelect: 'none',
    }
  }

  render = () => (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <div className="Flex" {...this.drag}>
        <div
          className="Flex JCCenter MHAuto PH24"
          style={this.style}
          ref={this._ref}>
          {this.props.children}
        </div>
      </div>
    </div>
  )
}

const Summary = ({ letter, active, disable }) => {
  if (!active || !!disable) {
    return (
      <div className="Card BGLightGray M8 ColorPrimary Saira Opacity5">
        {letter}
      </div>
    )
  }
  return (
    <ScrollTo
      to={letter}
      offsetTop={100}
      className="Card BGLightGray M8 ColorPrimary Saira Pointer">
      {letter}
    </ScrollTo>
  )
}

const Collection = ({ letter, list }) => {
  if (!list) return null
  return (
    <div id={letter} className="PV1x TextCenter W80 MHAuto">
      <div className="Saira FS80 ColorPrimary">{letter}</div>
      <ComponentList component={CollectionItem}>
        {list}
      </ComponentList>
    </div>
  )
}

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
