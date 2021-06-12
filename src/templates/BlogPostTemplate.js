import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import TableOfContents from "../components/TableOfContents"
import Theme from '../theme/Theme'
import styled from 'styled-components';
import Tags from "../components/Tags";
import {LeftArrow, RightArrow} from '@styled-icons/boxicons-regular'
import {useSiteMetadata} from "../hooks/useSiteMetadata";
import SEO from 'react-seo-component';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const Container = styled.div`
padding: 5px;
`

const ContentTable = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  margin-top: 20px;
  margin-left:calc(100vw - 185px);
  padding: 10px ;
  border-radius: 10px;
  background-color: ${Theme.nord0};
  @media(min-width: 750px){
  display: block;
  width: 170px;
  }

  @media(min-width: 1000px) {
    margin-left: 820px;
  }
`

const Navigation = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Theme.nord0};
  margin-top: 50px;
  height: 100px;
`

const Contents = styled.div`
  margin-left: 0px;
  @media (min-width: 750px) {
  margin-right: 180px;
  }
`
const NavLinks = styled(Link)`
display:block;
text-decoration: none;
color: ${Theme.nord11};
transition: 0.6s;
:hover {
color: ${Theme.nord14};
}
  font-size: 0.9rem;
`;

const Nav = styled.div`
  padding: 10px;
  font-size: 1.2rem;
`;

const TitleSection = styled.div`
  position: relative;
  border-left: 10px solid ${Theme.nord4};
  padding: 5px 10px 10px 20px;
  margin-bottom: 10px;
  width: 100%;
  background-color: ${Theme.nord0};
`;

const OldPost = styled(LeftArrow)`
  height:20px;

`;
const NewPost = styled(RightArrow)`
  height: 20px;
`;


export default function BlogPostTemplate({data, pageContext}) {
  const {frontmatter, body, tableOfContents, excerpt, fields} = data.mdx;
  const {previous, next} = pageContext;
  const {
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    authorName
  } = useSiteMetadata();

  const image = getImage(frontmatter.cover);
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        titleTemplate={title}
        description={excerpt}
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        image={`${siteUrl}${frontmatter.cover.publicURL}]`}
        author={authorName}
        article={true}
        datePublished={frontmatter.date}
      />
      <Container>
        <TitleSection>
          <h1>{frontmatter.title}</h1>
          <i>{frontmatter.date}</i>
          {!!frontmatter.tags ? <Tags tags = {frontmatter.tags} />: null}
        </TitleSection>
        {
          tableOfContents.items ? (
            <ContentTable>
              <TableOfContents items={tableOfContents.items} />
            </ContentTable>
          ) : null
        }
        <Contents>
          {!!frontmatter.cover ? (
            <GatsbyImage image={image} style={{marginBottom: '20px'}} alt="Cover image"/>
          ) : null}

          <MDXRenderer>{body}</MDXRenderer>
        </Contents>
        <Navigation>
          {previous === false ? null : (
            <>
              {previous && (
                <Nav>
                  Older Post
                  <NavLinks to={previous.fields.slug}>
                    <OldPost />
                    <span>{previous.frontmatter.title}</span>
                  </NavLinks>
                </Nav>
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <Nav style={{textAlign: 'right'}}>
                  Newer Post
                  <NavLinks to={next.fields.slug}>
                    <span>{next.frontmatter.title}</span><NewPost />
                  </NavLinks>
                </Nav>
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
          gatsbyImageData(width: 2000, placeholder: BLURRED)
        }
      }
    }
    tableOfContents
    excerpt
    body
    fields {
      slug
    }
  }
}
`;
