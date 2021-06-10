import React from 'react';
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import styled from 'styled-components';
import Header from './Header';
import Fade from "./Fade";
import Footer from "./Footer";
import Theme from '../theme/Theme';
import {Notif} from "./Notif";


const AppStyles = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
    font-size: 0.9rem;
  }
  width: 1000px;
  margin: 0 auto;
  color: ${Theme.nord6};
  padding: 5px;
`
const Main = styled.div`
  margin-top: 80px;
`

export default function Layout({children, _title}) {
  const {title} = useSiteMetadata();

  return (
    <Fade>
      <AppStyles>
        <Header _sitetitle={title} _title={_title} />
        <Main>
          {children}
        </Main>
        <Footer />
        <Notif />
      </AppStyles>
    </Fade>
  )
}
