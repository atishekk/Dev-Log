import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import TableOfContents from "../components/TableOfContents"

export default function BlogPostTemplate({data, pageContext}) {
  const {frontmatter, body, tableOfContents} = data.mdx;
  const {previous, next} = pageContext;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      {!!frontmatter.cover ? (
        <Img
          fluid={frontmatter.cover.childImageSharp.fluid}
        />
      ) : null}
      {
        tableOfContents.items ? (
        <TableOfContents items={tableOfContents.items} />
        ) : null
      }
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{"<<  "}{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}{"  >>"}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
query POST_SLUG($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date(formatString: "DD MMMM. YYYY")
      cover {
        publicURL
        childImageSharp {
          fluid(traceSVG: {color: "#639"}, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    tableOfContents
    body
  }
}
`;
