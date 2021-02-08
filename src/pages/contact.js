import React from "react"
// import Footer from "../components/footer"
// import Header from "../components/header"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = function () {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me!</h1>
      <h4>Phone</h4>
      <h4>
        <a href="https://twitter.com/?lang=en" target="_blank">
          Tweet at ya Gurl
        </a>
      </h4>
      <br />
    </Layout>
  )
}

export default ContactPage
