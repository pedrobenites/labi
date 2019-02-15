import React, { Component } from 'react'
import classNames from 'classnames'
import ComponentList from 'components/Common/ComponentList'
import Icon from 'components/Common/Icon'

export default class HistoryCard extends Component {
  state = {
    active: false,
    height: 0,
    isPlaying: false,
    position: 0,
    duration: 0,
    currentTime: 0,
    audio: '',
    quantify: 0,
  }

  _cardBody = React.createRef()

  _audio = React.createRef()

  componentDidMount = () => {
    if (!this.props.playlist || !this.props.playlist.length) return null
    this.setState({ quantify: this.props.playlist.length })
  }

  controlPlaying = () => {
    this.setState({ duration: this._audio.current.duration })
    if (!this.state.active) return this.openCard()
    return this.audioToggle()
  }

  updateTime = ({ target }) => {
    const { currentTime } = target
    if (currentTime === this.state.duration) {
      const newPosition = this.state.position + 1
      if (newPosition < this.state.quantify) {
        return this.setPosition(newPosition)
      }
      return null
    }
    return this.setState({ currentTime })
  }

  openCard = () => {
    const { clientHeight } = this._cardBody.current.firstChild
    this.setPosition(0)
    return this.setState({ active: true, height: clientHeight })
  }

  audioToggle = () => {
    if (this.state.isPlaying) return this.audioPause()
    return this.audioPlay()
  }

  audioPlay = () => {
    this._audio.current.play()
    this.setState({ isPlaying: true })
  }

  audioPause = () => {
    this._audio.current.pause()
    this.setState({ isPlaying: false })
  }

  setAudioSrc = () => {
    this._audio.current.src = this.soundSrc
    this._audio.current.currentTime = 0
    setTimeout(() => {
      const duration = this._audio.current.duration
      this.setState({ duration: this._audio.current.duration, isPlaying: true })
      this._audio.current.play()
    }, 100)
  }

  setPosition = position => {
    this.setState({ position, currentTime: 0 })
    setTimeout(() => this.setAudioSrc(), 100)
  }

  get soundSrc() {
    const { playlist } = this.props
    if (!playlist) return null
    return playlist[this.state.position].src
  }

  render = () => {
    if (!this.props.playlist || !this.props.playlist.length) return null
    return (
      <div className={classNames('PV8 HistoryCard', {
          Active: this.state.active,
        })}>
        <div className="Card BGWhite">
          <CardHead
            onClick={this.controlPlaying}
            title={this.props.title}
            isPlaying={this.state.isPlaying} />
          {this.state.active && (
            <ProgressBar
              currentTime={this.state.currentTime}
              duration={this.state.duration} />
          )}
          <audio ref={this._audio} onTimeUpdate={this.updateTime} />
          <div
            className="CardBodyWrapper"
            ref={this._cardBody}
            style={{ height: this.state.height }}>
            <CardBody
              playlist={this.props.playlist}
              position={this.state.position}
              setPosition={this.setPosition} />
          </div>
        </div>
      </div>
    )
  }
}

const CardHead = ({ title, play, isPlaying, onClick }) => (
  <div className="CardHead Flex JCSpaceBetween" onClick={onClick}>
    <div className="FS4x">
      <div className="ColorGray Saira SairaLight MB8">
        Conheça a história
      </div>
      <div className="ColorPrimary Saira SairaStrong Uppercase">
        {title}
      </div>
    </div>
    <div className="Pointer">
      <img src={`/static/img/ic_playlist_${!isPlaying ? 'play' : 'pause'}_24px.svg`} />
    </div>
  </div>
)

const ProgressBar = ({ currentTime = 0, duration = 1 }) => {
  const progress = Math.round(currentTime*100/duration) || 0
  return (
    <div className="W100 ProgressBar">
      <div className="BGPrimary" style={{ height: 5, width: `${progress}%` }} />
    </div>
  )
}

const CardBody = ({ playlist = [], position, setPosition }) => (
  <div className="CardBody">
    <ComponentList component={Sound} componentProps={{ position, setPosition }}>
      {playlist}
    </ComponentList>
  </div>
)

const Sound = ({ title, src, time, index, position, setPosition }) => {
  const isSelected = index === position
  const play = {
    active: '/static/img/ic_play_circle_filled_24px.svg',
    disable: '/static/img/ic_play_circle_outline_24px.svg',
  }
  const icon = isSelected ? play.active : play.disable
  return (
    <div
      onClick={() => setPosition(index)}
      className={classNames(
        'Sound Flex AICenter PV8 JCSpaceBetween Saira TextLeft Pointer',
        { ColorGray: !isSelected, ColorPrimary: isSelected }
    )}>
      <div className="ImageBody" style={{ backgroundImage: `url(${icon})` }} />
      <div className="W100 PH16">{title}</div>
      <div>{time}</div>
        <audio id="audio" preload="auto">
          <source src={src} type="audio/mp3" />
        </audio>
    </div>
  )
}
