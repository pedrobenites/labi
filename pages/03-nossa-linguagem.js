import React from 'react'
import classNames from 'classnames'
import { page, slides, linguage1, linguage2, yellowSection } from 'data/pages/03.json'
import Button from 'components/Common/Button'
import ComponentList from 'components/Common/ComponentList'
import H2 from 'components/HTML/H2'
import H3 from 'components/HTML/H3'
import HTML from 'components/HTML/HTML'
import P from 'components/HTML/P'
import PageView from 'components/Views/PageView'
import ScrollTo from 'components/Common/ScrollTo'
import Section from  'components/HTML/Section'
import Slide from 'components/Slider/Slide'
import Slider from 'components/Slider/Slider'
import YellowSection from 'components/Pages/YellowSection'

export default () => (
  <PageView {...page}>
    <Section1 />
    <YellowSection {...yellowSection} />
    <SectionLinguage {...linguage1} className="BGLightGray" />
    <SectionLinguage {...linguage2} className="BGWhite" />
  </PageView>
)

const Section1 = () => (
  <Slider id="target">
    {slides.map(SlideLinguages)}
  </Slider>
)

const SlideLinguages = ({ title, comparativeList = [], ...otherSlide }, key) => (
  <Slide key={key}>
    <div style={{ maxWidth: 400 }}>
      <H2>{title}</H2>
      <div className="PV2x">
        <ComponentList component={Comparative}>
          {comparativeList}
        </ComponentList>
        {otherSlide && <OtherSlide {...otherSlide} />}
      </div>
    </div>
  </Slide>
)

const OtherSlide = ({ list, text, warning }) => (
  <div className="ColorGray FS3x SingleSpace">
    {list && (
      <div className=" PV1x MHAuto" style={{ maxWidth: 310 }}>
        {list.map((item, key) => (
          <p key={key} className="TextLeft">{item}</p>
        ))}
      </div>
    )}
    {text && (
      <p className=" PV1x">
        <HTML>{text}</HTML>
      </p>
    )}
    {warning && (
      <>
        <p className="Saira LightColorPrimary">{warning.title}</p>
          <p>
            {warning.text}
          </p>
      </>
    )}
  </div>
)

const Comparative = ({ title, yes, not }) => (
  <div className="PV8">
    <div className="ColorPrimary Saira Medium PV8 Absolute W100 TextCenter">
      {title}
    </div>
    <div className="Flex JCSpaceBetween AICenter">
      <ComparativeColumn
        style={{ borderRight: '1px solid #DDD' }}
        icon={<IconCheck />}
        texts={yes} />
      <ComparativeColumn icon={<IconClose />} texts={not} />
    </div>
  </div>
)

const ComparativeColumn = ({ texts, icon, style }) => (
  <div className="W100 PH16" style={style}>
    <div style={{ transform: 'translateY(-24px)' }}>
      <div>{icon}</div>
      <div className="PT8 PH8 ColorGray FS2x" style={{ marginBottom: -24 }}>
        {typeof texts === 'string' ? (
          <p>{texts}</p>
        ) : (
          texts && texts.map((text, key) => <p key={key}>{text}</p>)
        )}
      </div>
    </div>
  </div>
)

const SectionLinguage = ({ slide1, slide2, title, className }) => (
  <section id="linguagem" className={classNames(className, 'PT3x')}>
    <div className="TextCenter">
      <H3 className="Medium">{title}</H3>
    </div>
    <Slider fix>
      <Slide1 {...slide1} />
      <Slide2 {...slide2} />
    </Slider>
  </section>
)

const Slide1 = ({ list }) => (
  <Slide>
    <ComponentList component={Step}>
      {parseList(list)}
    </ComponentList>
  </Slide>
)

const parseList = list => list.map(text => ({ text }))

const Step = ({ index, text }) => (
  <div className="Flex JCCenter PB16 TextLeft">
    <div className="Flex AICenter W100" style={{ maxWidth: 400 }}>
      <div className="ColorPrimary Saira SairaLight FS9x FlexGrow">
        {index + 1}.
      </div>
      <HTML className="W80 SingleSpace ColorGray">
        {text}
      </HTML>
    </div>
  </div>
)

const Slide2 = ({ text, listTitle, list, maxWidth }) => (
  <Slide>
    <P>{text}</P>
    <p className="Saira Light ColorPrimary FS4x PB24">{listTitle}</p>
    <ComponentList component={Li} componentProps={{ maxWidth }}>
      {parseList(list)}
    </ComponentList>
  </Slide>
)

const Li = ({ text, maxWidth = 600 }) => (
  <div className="Flex TextLeft MHAuto" style={{ maxWidth }}>
    <div className="PR16 ColorPrimary">
      <svg width={24} height={24} viewBox="0 0 24 24">
        <path
          fill="#522b79"
          d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
      </svg>
    </div>
    <p className="ColorBlack SingleSpace Opacity5 FS2x PB8 M0">{text}</p>
  </div>
)

const IconClose = () => (
  <svg width={16} height={16} viewBox="0 0 24 24">
    <path fill="#F28D8D" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
  </svg>
)

const IconCheck = () => (
  <svg width={16} height={16} viewBox="0 0 24 24">
    <path fill="#9CDB9C" d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z" />
  </svg>
)
