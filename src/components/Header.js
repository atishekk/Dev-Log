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
box-shadow: 0px 0px 20px ${Theme.nord7};
background-color: ${Theme.nord8};
color: ${Theme.nord1};
}
  @media (max-width: 400px) {
    margin: 3px;
    padding: 6px;
  }
`
const Title = styled.h1`
  margin: 0px 0px 0px 10px;
  padding: 5px 15px 15px 15px;
  border-radius: 20px;
  background-color: ${Theme.nord1};
  color: ${Theme.nord6};
  transition: 0.6s;
  :hover{
  box-shadow: 0px 0px 20px ${Theme.nord6};
  background-color: ${Theme.nord4};
  color: ${Theme.nord1};
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`

export default function Header({_sitetitle}) {
  return (
    <Container>
      <Link to = "/" style={{textDecoration: 'none'}}>
        <Title>{`${_sitetitle}(  )`}</Title>
      </Link>
      <Options>
        <Button to="/about">About Me</Button>
        <Button to="/tags">Categories</Button>
      </Options>
    </Container>
  )
}

