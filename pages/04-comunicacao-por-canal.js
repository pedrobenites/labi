import React from 'react'
import classNames from 'classnames'
import { page, faq, section1 } from 'data/pages/04.json'
import CollapseSlider from 'components/Common/CollapseSlider'
import ComponentList from 'components/Common/ComponentList'
import CollapseList from 'components/Common/CollapseList'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Slide from 'components/Slider/Slide'
import { SimpleSlider } from 'components/Slider/Slider'
import Ul from 'components/HTML/Ul'

export default () => (
  <PageView {...page}>
    <section className="PT40">
      <div id="target" className="Container TextCenter PH32 PT2x">
        <P>{section1.text}</P>
      </div>
      <CollapseList collapseProps={{ component: SliderFaq, full: true }}>
        {faq}
      </CollapseList>
    </section>
  </PageView>
)

const SliderFaq = ({ slides }) => {
  if (!slides || !slides.length) return null
  return (
    <SimpleSlider>
      {slides.map((slide, key) => <SlideFaq key={key} {...slide} />)}
    </SimpleSlider>
  )
}

const SlideFaq = ({ imageUrl, title, subtitle, blockList, blockScale }) => (
  <Slide className="PV24">
    {imageUrl && <img src={imageUrl} width={280} height="auto" />}
    <div className="Container" style={{ maxWidth: 280 }}>
      <div className="Saira FS6x ColorPrimary">
        {title}
      </div>
      <p className="ColorGray SingleSpace FS4x">
        {subtitle}
      </p>
      <BlockList {...blockList} />
      {blockScale && <BlockScale {...blockScale} />}
    </div>
  </Slide>
)

const BlockList = ({ title, list, bulletListType }) => {
  const className = classNames(
    'SingleSpace FS2x List ColorGray PB16',
    {['TextLeft ListBullet']: bulletListType }
  )
  return (
    <>
      <H4>{title}</H4>
      <Ul className={className}>
        {list}
      </Ul>
    </>
  )
}

const BlockScale = ({ active, reactive }) => (
  <>
    <H4>Escala de Comunicação:</H4>
    <div className="Flex PB16">
      <span
        className="Btn BtnPrimary BtnInverted"
        style={{ minWidth: `${active}%`, height: 40, lineHeight: '40px' }}>
        Ativa
      </span>
      <span
        className="Btn BtnPrimary"
        style={{ minWidth: `${reactive}%`, height: 40, lineHeight: '40px' }}>
        Reativa
      </span>
    </div>
  </>
)

const H4 = ({ children }) => (
  <h4 className="PT24 MB12 ColorPrimary Saira FS3x">
    {children}
  </h4>
)
