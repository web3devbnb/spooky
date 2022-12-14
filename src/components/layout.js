/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          textAlign: "center",
          minWidth: '1440px' 
        }}
      >
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
