import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Image = styled(Img)`
  border-radius: 5px;
`;

export default function Index({ data }){
  return (
    <Layout>
      <IndexWrapper>
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                {!!frontmatter.cover ? (
                  <Image
                    fluid={frontmatter.cover.childImageSharp.fluid}
                  />
                ) : null}
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          )
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
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
          childImageSharp {
            fluid(traceSVG: {color: "#639"}, maxWidth: 1000){
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
