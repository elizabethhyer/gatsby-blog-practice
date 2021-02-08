import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = function () {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Created with 💔 by {data.site.siteMetadata.author} in the great city of
        Atlanta, GA ©2021 Bitchesssss
      </p>
    </footer>
  )
}

export default Footer
