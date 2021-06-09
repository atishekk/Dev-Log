import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import TableOfContents from "../components/TableOfContents"
import Theme from '../theme/Theme'
import styled from 'styled-components';
import Tags from "../components/Tags";

const Container = styled.div`
padding: 2px;
`

const ContentTable = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  width: 160px;
  margin-top: 20px;
  padding: 10px ;
  border-radius: 10px;
  background-color: ${Theme.nord0};
  @media(min-width: 750px){
  display: block;
  width: 170px;
  }
`

const Navigation = styled.div`
  display:flex;
  justify-content: space-between;
`

const Contents = styled.div`
  margin-left: 0px;
  @media (min-width: 750px) {
  margin-left: 180px;
  }
`
const NavLinks = styled(Link)`
text-decoration: none;
color: ${Theme.nord11};
transition: 0.6s;
:hover {
color: ${Theme.nord14};
}
`

const Title = styled.h1`
  border-left: 10px solid ${Theme.nord0};
  padding-left 10px;
`

export default function BlogPostTemplate({data, pageContext}) {
  const {frontmatter, body, tableOfContents} = data.mdx;
  const {previous, next} = pageContext;

  return (
    <Layout>
      <Container>
        <Title>{frontmatter.title}</Title>
        <i>{frontmatter.date}</i>
              {!!frontmatter.tags ? <Tags tags = {frontmatter.tags} />: null}
        {
          tableOfContents.items ? (
            <ContentTable>
            <TableOfContents items={tableOfContents.items} />
              </ContentTable>
          ) : null
        }
        <Contents>
        {!!frontmatter.cover ? (
          <Img
            fluid={frontmatter.cover.childImageSharp.fluid}
          />
        ) : null}
        
        <MDXRenderer>{body}</MDXRenderer>
          </Contents>
        <Navigation>
        {previous === false ? null : (
          <>
            {previous && (
              <b>{"<<  "}
              <NavLinks to={previous.fields.slug}>
                <span>{previous.frontmatter.title}</span>
              </NavLinks>
              </b>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <b>
              <NavLinks to={next.fields.slug}>
                <span>{next.frontmatter.title}</span>
              </NavLinks>{" >>"}
              </b>
            )}
          </>
        )}
        </Navigation>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
query POST_SLUG($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      tags
      date(formatString: "Do MMMM. YYYY")
      cover {
        publicURL
        childImageSharp {
          fluid(traceSVG: {color: "#639"}, maxWidth: 2000) {
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
