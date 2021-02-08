import React from "react"
import { Link } from "gatsby"
// import Footer from "../components/footer"
// import Header from "../components/header"
import "../styles/index.scss"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = function () {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>
        My name is Elizabeth, I live in Atlanta, and this is my silly little
        practice blog with made with Gatsby, which is a quick and easy way to
        make a little site like this!
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me!</Link>
      </p>
      <br />
    </Layout>
  )
}

export default IndexPage
