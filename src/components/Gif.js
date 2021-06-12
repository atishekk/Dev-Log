import React from 'react';
import styled from 'styled-components';
import Theme from "../theme/Theme"

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  background-color:${Theme.nord0};
`;

const Caption = styled.i`
  display: block;
  font-size: 0.85rem;
  margin-top:-10px;
`

export default function Gif({_src, _alt, _height, children}) {
  return(
    <>
    <Container>
      <img src={_src} alt={_alt} style={{height: `${_height}px`}}/>
      <Caption> {children || " " } </Caption>
    </Container>
    </>
  )
}
