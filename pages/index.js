import React from 'react'
import Head from 'next/head'
import '../sass/styles.scss'
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

    <div className="intro">
      <section className="hero" id="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="is-spaced title is-1">Sixth</h1>
            <h2 className="subtitle is-3">
              A small Copenhagen-based team of front-end developers.
            </h2>

            <div className="content">
              <div className="social columns is-mobile">
                <div className="column">
                  <a href="https://www.linkedin.com/company/sixth">
                    <figure className="image is-48x48">
                      <img src="/linkedin.svg" />
                    </figure>
                  </a>
                </div>
                <div className="column">
                  <a href="https://github.com/HelloSixth">
                    <figure className="image is-48x48">
                      <img src="/github.svg" />
                    </figure>
                  </a>
                </div>
                <div className="column">
                  <a href="mailto:hello@sixth.dk">
                    <figure className="image is-48x48">
                      <img src="/mail.svg" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <style jsx>{`
      :global(*) {
        box-sizing: border-box;
      }

      :global(body) {
        letter-spacing: -0.03rem;
      }

      .hero {
        align-items: center;
      }

      .image svg {
        fill: white;
        stroke: white;
        color: white;
      }

      .column {
        padding-left: 0;
        padding-right: 0;
        flex: 0;
      }

      .social {
        justify-content: center;
        margin: 3rem 0;
      }

      .social .column figure {
        margin-left: 1.25em;
        margin-right: 1.25em;
      }

      .image img {
        fill: white;
      }

      .intro {
        margin-top: 3rem;
        text-align: center;
      }

      .title {
        font-weight: 700;
      }

      .subtitle {
        max-width: 500px;
        font-weight: 600;
      }

      @media screen and (max-width: 576px) {
        .subtitle {
          font-size: 1.4rem !important;
        }
      }
    `}</style>
  </div>
)

export default Home
