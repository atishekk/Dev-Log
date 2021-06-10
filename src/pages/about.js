import React from 'react';
import styled from 'styled-components';
import Theme from '../theme/Theme';
import Layout from '../components/Layout';
import Img from "../static/images/about.jpg";

const Title = styled.div`
  border-left: 7px solid ${Theme.nord4};
  background-color: ${Theme.nord0};
  padding: 1px 10px 10px 10px;
`;
const Content = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${Theme.nord0};
  transition: 0.6s;
  :hover {
    box-shadow: 0px 0px 20px ${Theme.nord0};
    img {
    box-shadow: 10px 10px ${Theme.nord4};
  }
  }
`;
const Image = styled.img`
  float: right;
  width: 500px;
  border-radius: 50px;
  margin: 20px;
  box-shadow: 10px 10px ${Theme.nord3};
  transition: 0.6s;
`;

export default function About() {
  return(
    <Layout>
      <Title> 
        <h1>
          About Me!! 
        </h1>
      </Title>
      <Content>
        <Image src={Img} alt = "My Photo"/>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam, enim nec tempus convallis, ante ligula facilisis tortor, at gravida odio leo ut mi. In vel bibendum justo, maximus venenatis tellus. Sed mi urna, condimentum in imperdiet in, tincidunt sit amet enim. Aenean suscipit vestibulum nisi quis gravida. Duis id ex a odio consequat vulputate. Nunc rutrum laoreet lacinia. Donec non dui dolor. Donec sed varius tortor. Nam in est quis elit aliquet blandit vitae ut sem. In nec nulla sed eros varius elementum vitae quis eros. Ut faucibus arcu in magna commodo egestas. Ut elementum accumsan nisl a gravida.

        </p>
        <p>
Quisque eros mi, feugiat vel sem in, congue efficitur sem. Quisque eget egestas enim. In id ultricies quam, in facilisis erat. Fusce non nibh libero. Pellentesque in ligula sapien. Sed auctor nunc nisi, eget vulputate turpis hendrerit ut. Vivamus egestas mi at libero hendrerit, a volutpat velit placerat.
        </p>
        <p>
        </p>
      </Content>
    </Layout>
  )
}
