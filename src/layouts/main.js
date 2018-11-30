import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header.js'
import Nav from '../components/nav.js'
import Button from '../components/button.js'
import Footer from '../components/footer.js'
import '../scss/app.scss'

const Main = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Roy Hwang\'s Portfolio' },
            { name: 'keywords', content: 'Roy, Portfolio' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />
        <main className="main">
          {children}
        </main>
        <Button />
        <Footer />
      </>
    )}
  />
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
