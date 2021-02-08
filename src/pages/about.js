import React from "react"
import { Link } from "gatsby"
// import Footer from "../components/footer"
// import Header from "../components/header"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = function () {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Elizabeth</h1>
      <p>
        Elizabeth is a 29-year-old
        writer-turned-clothing-designer-turned-software-developer, which may
        seem like an unlikely path until you remember there is more money in
        design than in writing (if done write (see what I did there?)), and more
        money in software than in design. So...Yeah.
      </p>
      <br />
      <br />
      <h1>
        Did this bio make you want to reach out? Do so{" "}
        <Link to="/contact">here</Link>
      </h1>
      <br />
    </Layout>
  )
}

export default AboutPage
