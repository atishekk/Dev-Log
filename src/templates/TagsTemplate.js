import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Theme from "../theme/Theme";
import styled from 'styled-components';
import Post from "../components/Post";

export const query = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            tags
            date(formatString: "Do MMMM, YYYY")
            cover {
              publicURL
              childImageSharp {
                fluid(traceSVG: {color: "#639"}, maxWidth: 2000){
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
  }
`;
const Container = styled.div`
padding: 5px;
`

const NavLinks = styled(Link)`
text-decoration: none;
color: ${Theme.nord11};
`

const TagPosts = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <Container>
        <h2>{tagHeader}</h2>

        <div>
          <NavLinks to="/tags">View all tags</NavLinks>
          {edges.map(({node: post}) => (
            <Post id={post.id} excerpt={post.excerpt} frontmatter={post.frontmatter} fields={post.fields} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default TagPosts;
