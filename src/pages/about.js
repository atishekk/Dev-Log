import React from 'react';
import styled from 'styled-components';
import Theme from '../theme/Theme';
import Layout from '../components/Layout';
import SEO from 'react-seo-component';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { StaticImage } from 'gatsby-plugin-image';
import { Linux, Cplusplus, Flutter, Python, Tensorflow, Docker, Mongodb, Sqlite, Go, Rust } from '@styled-icons/simple-icons';
import { Node, Github } from '@styled-icons/fa-brands'
import ReactTooltip from 'react-tooltip';

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
    .aboutImage {
      box-shadow: 10px 10px ${Theme.nord6};
    }
  }
`;
const Image = styled.div`
  float: right;
  @media(min-width: 850px) {
    width: 500px;
    padding-top: 20px;
  }
  @media(max-width: 600px) {
    width: 100%;
    padding-top: 20px;
  }
  width: calc(100% - 60vw);
  padding: 0px 20px 20px 20px;
  transition: 0.6s;
  height:100%;
  display: flex;

`;

const InterestsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  *{
    margin: 10px;
  }
`;

export default function About() {
  const metadata = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={"About Me"}
        titleTemplate={metadata.title}
        description={metadata.description}
        pathname={`${metadata.siteUrl}/about`}
        siteLanguage={metadata.siteLanguage}
        siteLocale={metadata.siteLocale}
        author={metadata.authorName}
      />
      <Title>
        <h1>
          About Me!!
        </h1>
      </Title>
      <Content>
        <Image>
          <StaticImage src={"../../posts/images/about.jpg"} alt="My Photo" placeholder="blurred" layout="constrained" className="aboutImage" />
        </Image>
        <p>
          Hi, I'm Atishek. I'm 21 and currently pursuing my Bachelors in
          <i> Computer Science and Artificial Intelligence. </i>
        </p>
        <p>
          I'm passionate about technology and I love solving problems.
          This blog is my effort to explore and learn new things and hopefully meet new people.

        </p>
        <p>
          Some of my interests include:
          <InterestsContainer>
            <Linux style={{ height: '40px' }} data-tip='Linux' data-event='mouseenter click' />
            <Cplusplus style={{ height: '40px' }} data-tip='C++' data-event='mouseenter click' />
            <Go style={{ height: '40px' }} data-tip='Go' data-event='mouseenter click' />
            <Rust style={{ height: '40px' }} data-tip='Rust' data-event='mouseenter click' />
            <Python style={{ height: '40px' }} data-tip='Python' data-event='mouseenter click' />
            <Tensorflow style={{ height: '40px' }} data-tip='Tensorflow' data-event='mouseenter click' />
            <Flutter style={{ height: '40px' }} data-tip='Flutter' data-event='mouseenter click' />
            <Docker style={{ height: '40px' }} data-tip='Docker' data-event='mouseenter click' />
            <Node style={{ height: '40px' }} data-tip='Node.js' data-event='mouseenter click' />
            <Sqlite style={{ height: '40px' }} data-tip='SQL' data-event='mouseenter click' />
            <Mongodb style={{ height: '40px' }} data-tip='MongoDB' data-event='mouseenter click' />
            <Github style={{ height: '40px' }} data-tip='Git / GitHub' data-event='mouseenter click' />
          </InterestsContainer>
        </p>
        <p>

        </p>
        <ReactTooltip className="toolTip" globalEventOff='click' />
      </Content>
    </Layout>
  )
}
