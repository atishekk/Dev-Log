import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Theme from "../theme/Theme";
import styled from 'styled-components';
import Post from "../components/Post";
import SEO from 'react-seo-component';
import {useSiteMetadata} from '../hooks/useSiteMetadata';

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
  }
`;
const Container = styled.div`
padding: 5px;
`;

const NavLinks = styled(Link)`
text-decoration: none;
color: ${Theme.nord11};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const TagPosts = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  const metadata = useSiteMetadata();

  return (
    <Layout>
      <SEO
        title={tag}
        titleTemplate={metadata.title}
        description={`Blog posts marked with tag ${tag}`}
        pathname={`${metadata.siteUrl}/tags/${tag.toLowerCase()}`}
      />
      <Container>
        <h2>{tagHeader}</h2>

        <NavLinks to="/tags">View all tags</NavLinks>
        <Wrapper>
          {edges.map(({node: post}) => (
            <Post id={post.id} excerpt={post.excerpt} frontmatter={post.frontmatter} fields={post.fields} key={post.id}/>
          ))}
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default TagPosts;
