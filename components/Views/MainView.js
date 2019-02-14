import React from 'react'
import Head from 'next/head'
import "stylus/index.styl"
import Navigation from 'components/Navigation/Navigation'

const MainView = ({ children, title, description, className }) => (
  <>
    <Head>
      <title>Labi Exames | {title}</title>
    </Head>
    <Navigation />
    <main className={className}>
      {children}
    </main>
  </>
)

export default MainView
