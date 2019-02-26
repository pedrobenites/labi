import React from 'react'
import classNames from 'classnames'
import { page, faq, section1 } from 'data/pages/04.json'
import CollapseSlider from 'components/Common/CollapseSlider'
import ComponentList from 'components/Common/ComponentList'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import Slide from 'components/Slider/Slide'
import Ul from 'components/HTML/Ul'

export default () => (
  <PageView {...page}>
    <section className="PT40">
      <div id="target" className="Container TextCenter PH32 PT2x">
        <P>{section1.text}</P>
      </div>
      <ComponentList component={CollapseSlider} componentProps={{ slideComponent: SlideFaq }}>
        {faq}
      </ComponentList>
    </section>
  </PageView>
)

const SlideFaq = ({ imageUrl, title, subtitle, blockList, blockScale }, key) => (
  <Slide key={key}>
    {imageUrl && <img src={imageUrl} width={300} height={400} />}
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
    'SingleSpace FS2x List ColorGray',
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
    <div className="Flex PB1x">
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
  <h4 className="PT2x MB12 ColorPrimary Saira FS3x">
    {children}
  </h4>
)
