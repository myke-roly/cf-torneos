import { FunctionComponent } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

interface LayoutI {
  headTitle: string
  headDescription?: string
}

const Layout: FunctionComponent<LayoutI> = ({
  children,
  headDescription,
  headTitle,
}) => {
  const dateCopy = new Date().getFullYear()
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutStyled>
        <header>
          <h1>CF Torneos</h1>
        </header>
        {children}
        <footer>
          <p>CF Torneos derechos reservados {dateCopy}</p>
        </footer>
      </LayoutStyled>
    </>
  )
}

const LayoutStyled = styled.div`
  background: #eeeeee;
  min-height: 100vh;
`

export default Layout
