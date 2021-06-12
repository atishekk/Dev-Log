import React from 'react';
import styled from 'styled-components';
import Theme from "../theme/Theme"

const Link = styled.a`
  text-decoration: none;
  color: ${Theme.nord7};
  transition: 0.6s;
  padding: 2px 5px 5px 5px;
  border-radius: 5px;
  :hover {
    background-color: ${Theme.nord0};
    color: ${Theme.nord10};
    box-shadow: -4px -4px ${Theme.nord3};
    margin-right: 3px;
  }
`

export default function LinkExternal({_href, children}) {
  return(
    <>
      <Link href={_href} target="_blank" rel="noopener noreferrer"> {children} </Link>
    </>
  )
}
