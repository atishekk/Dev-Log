import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Theme from '../theme/Theme'

const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  height: 80px;
  width: 1010px;
  @media (max-width: 1010px) {
    width: 100%;
  }
  margin-left: -10px;
  background-color: ${Theme.nord1};
  z-index:2;
  top: 0px;
`
const Options = styled.div`
  display: flex;
  margin-right: 10px;
`

const Button = styled(Link)`
background-color: ${Theme.nord2};
padding: 10px;
margin: 5px;
border-radius: 10px;
color: ${Theme.nord6};
text-decoration: none;
transition: 0.6s;
box-shadow: 0px 0px 10px ${Theme.nord3};
:hover {
background-color: ${Theme.nord6};
color: ${Theme.nord1};
}
`
const Title = styled.h1`
  margin: 0px 0px 0px 10px;
  color: ${Theme.nord6};
  transition: 0.6s;
  :hover{
  color: ${Theme.nord11};
  }
`

export default function Header({_sitetitle}) {
  return (
    <Container>
      <Link to = "/" style={{textDecoration: 'none'}}>
        <Title>{`${_sitetitle}(  )`}</Title>
      </Link>
      <Options>
        <Button to="/about">About</Button>
        <Button to="/tags">Categories</Button>
      </Options>
    </Container>
  )
}

