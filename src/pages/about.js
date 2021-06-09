import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Theme from '../theme/Theme'
import Fade from '../components/Fade'

const Center = styled.div`
 position: fixed;
 height:100vh;
 width: 100%;
 background-color: ${Theme.nord1};
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const Text = styled.h1``;

const Back = styled(Link)`
 text-decoration: none;
 color: ${Theme.nord11}
 transition: 0.6s;
 :hover {
 color: ${Theme.nord14};
 }
`;

export default function About() {
  return(
    <Fade>
      <Center>
        <Text> Nothing interesting here :( </Text>
        <Back to = "/"> Go Back </Back>
      </Center>
    </Fade>
  )
}
