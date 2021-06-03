import React from 'react';
import {Link} from 'gatsby';

export default function Header({_title, _description}) {
  return (
    <Link to = "/">
      <h1>{_title}</h1>
      <p>{_description}</p>
    </Link>
  )
}

