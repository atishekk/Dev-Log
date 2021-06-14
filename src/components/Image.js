import React from 'react';
import styled from 'styled-components';
import Theme from '../theme/Theme'
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const Layout = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  background-color:${Theme.nord0};
  transition: 0.6s;
  margin-bottom: 1rem;
`;

const Caption = styled.i`
  display: block;
  font-size: 0.85rem;
  margin-top:-10px;
`


export default function Image({_image, _alt, _width, children}) {
  const Img = styled.div`
    @media(max-width: ${_width}){
      width: 100%;
    }
    width: ${_width};
    padding: 10px;
    margin-bottom: 10px;
  `
  return (
    <Layout>
      <Img>
      <GatsbyImage image={getImage(_image)} alt={_alt}/>
      </Img>
      <Caption>{children}</Caption>
    </Layout>
  )
}

