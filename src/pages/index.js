import React from 'react'
import Main from '../layouts/main'
import Projects from '../components/projects'
import About from '../components/about'
import '../scss/app.scss'

const IndexPage = () => (
  <Main>
    <Projects />
    <About />
  </Main>
)

export default IndexPage
