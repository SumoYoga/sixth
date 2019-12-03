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

    <div className="container">
      <img src="/sixth.svg" alt="Sixth" />
    </div>

    <style jsx>{`
      :global(*) {
        box-sizing: border-box;
      }
      :global(body) {
        margin: 0;
        padding: 20px;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }

      .container {
        background: #F4F8FB;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        border-radius: 25px;
        height: calc(100vh - 40px);
      }

      img {
        height: 150px;
        margin-bottom: 50px;
      }
    `}</style>
  </div>
)

export default Home
