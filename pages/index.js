import React from 'react'
import Button from 'components/Common/Button'
import ButtonIcon from 'components/Common/ButtonIcon'
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
  <header className="Header Spacer">
    <div className="Container PV2x TextCenter">
      <h1 className="Saira SairaLight FS8x ColorWhite">
        Bem-vindo ao Guia de Cultura do Labi Exames
      </h1>
      <ButtonIcon icon="video-outline">Veja o vídeo</ButtonIcon>
    </div>
  </header>
)
