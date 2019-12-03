import React from 'react'
import Head from 'next/head'
// import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Sixth</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#F8E81C"></meta>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      ></meta>
    </Head>

    <img src="/sixth.svg" alt="Sixth" />

    <style jsx>{`
      :global(body) {
        margin: 0;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }

      div {
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        min-height: 200px;
        height: 25vmin;
      }
    `}</style>
  </div>
)

export default Home
