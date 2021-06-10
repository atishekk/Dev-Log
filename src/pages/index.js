import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Post from "../components//Post";
import SEO from 'react-seo-component';
import {useSiteMetadata} from '../hooks/useSiteMetadata';

const IndexWrapper = styled.main``;


export default function Index({ data }){

  const {
    title,
    description,
    siteUrl,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
      />
      <IndexWrapper>
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            <Post id={id} excerpt={excerpt} frontmatter={frontmatter} fields={fields} />)
        )}
      </IndexWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query SITE_INDEX_QUERY {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      excerpt(pruneLength: 250)
      frontmatter {
        title
        tags
        date(formatString: "Do MMMM, YYYY")
        cover {
          publicURL
          childImageSharp {
            fluid(traceSVG: {color: "#d8dee9"}, maxWidth: 2000){
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
}

`
