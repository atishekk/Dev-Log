import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Theme from "../theme/Theme";

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled(Link)`
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  background-color: ${Theme.nord3};
  margin: 0px 10px 10px 0px;
  border-radius: 20px;
  color: ${Theme.nord6};
  transition: 0.6s;
  :hover {
  color: ${Theme.nord13};
  }
`;

export default function Tags(props) {
  return(
    <TagContainer>
      {props.tags.map(tag => (
        <Tag to={`/tags/${tag.toLowerCase()}`} key={tag}>{tag}</Tag>
      ))}
    </TagContainer>
  )
}
