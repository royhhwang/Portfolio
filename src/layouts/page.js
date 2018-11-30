import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Nav from '../components/nav.js'
import '../scss/app.scss'

const Page = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PageTitleQuery {
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
        <Nav />
        <main className="main">
          {children}
        </main>
      </>
    )}
  />
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
