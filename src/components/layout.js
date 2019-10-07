/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import GlobalStyle from '../styles/GlobalStyle'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const GlobalStyle = createGlobalStyle`
  //   body {
  //     color: white;
  //     font-size: 1em;
  //   }

  //   * {
  //     box-sizing: border-box;
  //     margin: 0;
  //     padding: 0;
  //   }
  // `

  return (
    <>
      <GlobalStyle />
      <main style={{ margin: "0px 150px", margin: "0 auto", width: '100%' }}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
