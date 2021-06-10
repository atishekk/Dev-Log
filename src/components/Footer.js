import React from 'react';
import styled from 'styled-components';
import Theme from '../theme/Theme';
import {Github} from "@styled-icons/boxicons-logos";
import {GitRepository} from "@styled-icons/remix-line";

const FooterContainer = styled.div`
  padding:10px 10px 10px 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.a`
  text-decoration: none;
  margin-right: 20px;
  padding: 10px;
  color: ${Theme.nord6};
  transition: 0.6s;
  :hover {
    color: ${Theme.nord7};
  }
`

const GithubLogo = styled(Github)`
height: 25px;
`
const BlogRepo = styled(GitRepository)`
  height: 25px;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Content href="https://github.com/atishek22" target="_blank" rel="noopener noreferrer"><GithubLogo /> atishek22 </Content>
      <Content href="https://github.com/atishekk" target="_blank" rel="noopener noreferrer"><GithubLogo /> atishekk </Content>
      <Content href="https://github.com/atishekk/Dev-Log" target="_blank" rel="noopener noreferrer"><BlogRepo /> Blog's Repository </Content>
    </FooterContainer>
  )
}
