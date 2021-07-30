/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BTCPayButton from "../components/BTCPayButton"
import { useLocation } from "@reach/router"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
          siteUrl
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const siteUrl = data.site.siteMetadata.siteUrl
  const { pathname } = useLocation()
  const pageUrl = siteUrl + pathname

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/bowtiedchukar.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            Written by <strong>{author.name}.</strong> {author?.summary || null}
            {` `}
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              Follow us on Twitter
            </a>
            {` `}
            and consider leaving <strong>{author.name}</strong> a tip:
          </p>
          <BTCPayButton pageUrl={pageUrl} />
        </div>
      )}
    </div>
  )
}

export default Bio
