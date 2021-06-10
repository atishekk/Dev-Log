import React from 'react';
import {Link} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import Tags from './Tags';
import Theme from "../theme/Theme";

const PostWrapper = styled.div`
  background-color: ${Theme.nord0};
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  transition: 0.7s;
  max-width: 460px;
  @media(max-width: 1000px) {
    max-width: 350px;
  }
  @media(max-width: 750px) {
    max-width: 100%;
  }
  :hover {
    transform: scale(1.01);
  box-shadow: 0px 0px 50px ${Theme.nord0};
  }
`;

const Image = styled(GatsbyImage)`
  border-radius: 5px;
  margin-bottom: 10px;
`;

const P = styled.p`
  color: ${Theme.nord6};
`
export default function Post({id, excerpt, frontmatter, fields}) {

  const image = getImage(frontmatter.cover);

  return(
    <Link to={fields.slug} style={{textDecoration: 'none'}}>
      <PostWrapper key={id}>
        <h1 style={{color: Theme.nord6}}>{frontmatter.title}</h1>
        <P><i>{frontmatter.date}</i></P>
        {!!frontmatter.cover ? (
          <Image
            image={image}
            alt={"Cover Image"}
          />
        ) : null}
        {!!frontmatter.tags ? <Tags tags = {frontmatter.tags} />: null}
        <P>{excerpt}</P>
      </PostWrapper>
    </Link>
  )
}
