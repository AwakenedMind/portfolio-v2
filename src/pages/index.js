import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import Work from '../components/work'
import Landing from '../components/landing'
import Social from '../components/social'
import About from '../components/about'
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <Social />
    <Landing />
    <About />
    <Work />
    <Contact />
  </Layout >
)

export default IndexPage
