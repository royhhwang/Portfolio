import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'

const NotFoundPage = () => (
  <Page>
    <h1>How'd you get here?</h1>
    <p>You just hit a route that doesn&#39;t exist!</p>
    <Link className="error-link"
      to="/"
    >
      Back to home
    </Link>
  </Page>
)

export default NotFoundPage
