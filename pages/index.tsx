import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from './components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Layout
        headTitle="CF Torneos"
        headDescription="Campeonatos y partidos amistosos para culaquier persona que quiera divertirse y pasar el rato"
      >
        <h1>CF Torneos</h1>
      </Layout>
    </div>
  )
}

export default Home
