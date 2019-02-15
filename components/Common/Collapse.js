import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from 'components/Common/Icon'
import P from 'components/HTML/P'

export default class extends Component {
  state = { open: false }

  get style() {
    return { backgroundColor: this.props.color || '#F5F5F5' }
  }

  render = () => (
    <div className={classNames(
        {
          Container: !this.props.full,
          Open: this.state.open,
          P8: !this.props.full,
          CollapseFull: this.props.full
        },
        'Collapse',
      )}>
      <CollapseHead
        style={this.style}
        onClick={() => this.setState({ open: !this.state.open })}
        step={this.props.step}
        title={this.props.title} />
      <CollapseBody
        isOpen={this.state.open}
        style={this.style}
        description={this.props.description}
        className={this.props.classNameBody}
        isList={this.props.isList}
        notUseClassNameDefault={this.props.notUseClassNameDefault}>
        {this.props.children}
      </CollapseBody>
    </div>
  )
}

const CollapseHead = ({ title, step, ...props }) => (
  <div {...props} className="CollapseHead Flex AICenter JCSpaceBetween">
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

const CollapseBody = ({ description, isOpen, style, children, ...props }) => (
  <div className="CollapseBody" style={{ maxHeight: isOpen ? 1000 : 0 }}>
    <div className="PV16 PH24 TextLeft" style={style}>
      {description && (
        <P {...props}>
          {description}
        </P>
      )}
      {children}
    </div>
  </div>
)
