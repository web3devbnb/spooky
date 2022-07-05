import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/TopBanner"
import Protocol from "../components/Protocol"
import Lender from "../components/Lender"
import Renter from "../components/Renter"
import Project from "../components/Project"
import Roadmap from "../components/Roadmap"
import Integration from "../components/Integrations"
import Partner from "../components/Partner"
import Footer from "../components/Footer"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <TopBanner />
    <Protocol />
    <Lender />
    <Renter />
    <Project />
    <Roadmap />
    <Integration />
    <Partner />
    <Footer />
  </Layout>
)

export default IndexPage
