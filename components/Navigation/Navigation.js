import React, { Component } from 'react'
import classNames from 'classnames'
import data from 'data/navigation.json'
import ComponentList from 'components/Common/ComponentList'
import Link from 'components/Common/Link'


export default class Navigation extends Component {
  state = { open: false }

  closeMenu = () => this.setState({ open: false })

  render = () => (
    <nav className={classNames('PL24 PR12 Navigation BGPrimary', { Open: this.state.open })}>
      <div className="Wrapper">
        <Brand onClick={this.closeMenu} />
        <Menu onClick={this.closeMenu} />
        <Hamburger onClick={() => this.setState({ open: !this.state.open})} />
      </div>
    </nav>
  )
}

const Brand = ({ onClick }) => (
  <Link
    href="/"
    className="Brand ColorSecondary Saira SairaStrong FS5x"
    onClick={onClick}>
    <img src="/static/img/lab_exames.svg" alt="Lab" />
  </Link>
)

const Hamburger = ({ onClick }) => (
  <div className="Hamburger" onClick={onClick}>
    <span />
    <span />
    <span />
  </div>
)

const Menu = ({ onClick }) => (
  <div className="Menu Flex JCCenter AICenter">
    <div onClick={onClick}>
      <ComponentList component={MenuItem}>
        {data}
      </ComponentList>
    </div>
  </div>
)

const MenuItem = ({text, number, href}) => (
  <div className="MenuItem">
    <Link href={href} className="ColorWhite">
      <span className="Saira InlineBlock ColorSecondary FS6x Number">
        {number}
      </span>
      <span className="Saira SairaLight InlineBlock FS4x Text">
        {text}
      </span>
    </Link>
  </div>
)
