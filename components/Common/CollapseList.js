import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from 'components/Common/Icon'
import P from 'components/HTML/P'

export default class CollapseList extends Component {
  state = { active: false, index: 0 }

  get style() {
    return { backgroundColor: this.props.color || '#F5F5F5' }
  }

  open = index => {
    if (this.state.active && this.state.index === index) {
      return this.setState({ active: false })
    }
    return this.setState({ active: true, index })
  }

  isActive = index => this.state.active && this.state.index === index

  render = () => {
    if (!this.props.children) return null
    return this.props.children.map((props, index) => (
      <CollapseItem
        key={index}
        open={this.isActive(index)}
        onClick={() => this.open(index)}
        {...this.props.collapseProps}
        {...props}
      />
    ))
  }
}

const CollapseItem = ({ children, color, full, open, step, title, onClick, component, ...props }) => {
  const Component = component || CollapseBody
  return (
    <div className={classNames({
        'Container P8': !full, Open: open, CollapseFull: full
      }, 'Collapse')}>
      <CollapseHead
        backgroundColor={color}
        style={props.style}
        onClick={onClick}
        step={step}
        title={title} />
      <div className="CollapseBody" style={{ maxHeight: open ? 1000 : 0, backgroundColor: color }}>
        <Component {...props}>
          {children}
        </Component>
      </div>
    </div>
  )
}

const CollapseHead = ({ title, step, style, backgroundColor, ...props }) => (
  <div {...props} className="CollapseHead Flex AICenter JCSpaceBetween" style={{...style, backgroundColor }}>
    <div>
      {step && <div className="Step">{step}</div>}
      <div className="Title Saira Medium">{title}</div>
    </div>
    <IconPlus />
  </div>
)

const IconPlus = () => (
  <svg className="IconPlus" height="24" viewBox="0 0 24 24">
    <path fill="#522B79" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
)

const CollapseBody = ({ description, style, children, ...props }) => (
  <div className="PV16 PH24 TextLeft" style={style}>
    {description && (
      <P {...props}>
        {description}
      </P>
    )}
    {children}
  </div>
)
