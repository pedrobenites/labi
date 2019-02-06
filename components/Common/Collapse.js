import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from 'components/Common/Icon'

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
          P8: !this.props.noMargin,
          CollapseFull: this.props.noMargin
        },
        'Collapse',
      )}>
      <CollapseHead
        style={this.style}
        onClick={() => this.setState({ open: !this.state.open })}
        step={this.props.step}
        title={this.props.title} />
      <div
        className="CollapseBody"
        style={{ maxHeight: this.state.open ? 500 : 0 }}>
        <div className="PT24 PB1x PH16 TextLeft" style={this.style}>
          <p className="ColorGray SingleSpace">{this.props.description}</p>
        </div>
      </div>
    </div>
  )
}

const CollapseHead = ({ title, step, ...props }) => (
  <div {...props} className="Flex JCSpaceBetween AICenter CollapseHead">
    <div>
      {step && <div className="Step">{step}</div>}
      <div className="Title">{title}</div>
    </div>
    <IconPlus />
  </div>
)

const IconPlus = () => (
  <svg className="IconPlus" height="24" viewBox="0 0 24 24">
    <path fill="#522B79" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
)
