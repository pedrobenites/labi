import React from 'react'
import Button from 'components/Common/Button'
import Link from 'components/Common/Link'
import MainView from 'components/Views/MainView'

export default () => (
  <MainView title="Guia de Cultura">
    <Header />
    <section className="P2x">
      <div className="Container TextCenter">
        <p className="ColorGray SingleSpace MB1x">
          Através desse Guia vamos estudar juntos o nosso jeito de
          <strong className="ColorPrimary"> ser</strong>,
          <strong className="ColorPrimary"> agir</strong> e
          <strong className="ColorPrimary"> falar</strong>.
          Você pode aparecer por aqui quantas vezes quiser, tirar suas dúvidas,
          fazer sugestões e se manter atualizado sobre todos os tipo de detalhes
          do nosso jeito de ser. Vamos lá?
        </p>
        <Button href="/01-comecando-pelo-basico">Começar</Button>
      </div>
    </section>
  </MainView>
)

const Header = () => (
  <div className="Header PB1x">
    <header className="Spacer">
      <div className="Container P2x TextCenter">
        <h1 className="Saira SairaLight FS8x ColorWhite">
          Bem-vindo ao Guia de Cultura do Labi Exames
        </h1>
      </div>
    </header>
    <ButtonIcon icon="video-outline">Veja o vídeo</ButtonIcon>
  </div>
)

const ButtonIcon = ({ children, icon, ...props }) => (
  <div className="ButtonIcon Pointer">
    <Link className="Flex AICenter JCCenter" {...props}>
      <div className="Icon">
        <img src="/static/img/ic_videocam_24px.svg" />
      </div>
      <div className="Text Saira">
        <div>{children}</div>
      </div>
    </Link>
  </div>
)
