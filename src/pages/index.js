import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Post from "../components//Post";
import SEO from 'react-seo-component';
import {useSiteMetadata} from '../hooks/useSiteMetadata';

const IndexWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export default function Index({ data }){

  const metadata = useSiteMetadata();

  return (
    <Layout>
      <SEO
        title={"Home"}
        titleTemplate={metadata.title}
        description={metadata.description}
        pathname={metadata.siteUrl}
        siteLanguage={metadata.siteLanguage}
        siteLocale={metadata.siteLocale}
        author={metadata.authorName}
      />
      <IndexWrapper>
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            <Post id={id} excerpt={excerpt} frontmatter={frontmatter} fields={fields} key = {id}/>)
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
