import React from 'react';
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import styled from 'styled-components';
import Header from './Header';

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`

export default function Layout({children}) {
  const {title, description} = useSiteMetadata();

  return (
    <AppStyles>
      <Header _title={title} _description={description} />
      {children}
    </AppStyles>
  )
}
