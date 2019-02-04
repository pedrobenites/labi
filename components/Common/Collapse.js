import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from 'components/Common/Icon'

export default class extends Component {
  state = { open: false }

  render = () => (
    <div className={classNames(
        { Open: this.state.open, P8: !this.props.full, CollapseFull: this.props.full },
        'Collapse',
      )}>
      <CollapseHead
        onClick={() => this.setState({ open: !this.state.open })}
        color={this.props.color}
        step={this.props.step}
        title={this.props.title} />
      <div
        className="CollapseBody"
        style={{ maxHeight: this.state.open ? 500 : 0 }}>
        <div className="PT24 PB1x PH16 TextLeft">
          <p className="ColorGray SingleSpace">{this.props.description}</p>
        </div>
      </div>
    </div>
  )
}

const CollapseHead = ({ onClick, title, step, color }) => (
  <div
    style={{ backgroundColor: color || '#F5F5F5' }}
    className="Flex JCSpaceBetween AICenter CollapseHead"
    onClick={onClick}>
    <div>
      {step && <div className="Step">{step}</div>}
      <div className="Title">{title}</div>
    </div>
    <Icon name="plus" size={2} />
  </div>
)
