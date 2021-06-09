import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Tags from './Tags';
import Theme from "../theme/Theme";

const PostWrapper = styled.div`
  background-color: ${Theme.nord0};
  padding: 20px;
  margin: 20px 0px 20px 0px;
  border-radius: 20px;
  transition: 0.7s;
  :hover {
    transform: scale(1.01);
  box-shadow: 0px 0px 50px ${Theme.nord0};
  }
`;

const Image = styled(Img)`
  border-radius: 5px;
  margin-bottom: 10px;
`;

const P = styled.p`
  color: ${Theme.nord6};
`
export default function Post({id, excerpt, frontmatter, fields}) {
  return(
    <Link to={fields.slug} style={{textDecoration: 'none'}}>
      <PostWrapper key={id}>
        <h1 style={{color: Theme.nord6}}>{frontmatter.title}</h1>
        <P><i>{frontmatter.date}</i></P>
        {!!frontmatter.cover ? (
          <Image
            fluid={frontmatter.cover.childImageSharp.fluid}
          />
        ) : null}
        {!!frontmatter.tags ? <Tags tags = {frontmatter.tags} />: null}
        <P>{excerpt}</P>
      </PostWrapper>
    </Link>
  )
}
