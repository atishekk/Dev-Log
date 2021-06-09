import React from 'react';

function renderItems(items) {
  return (
    <ol>
      {items.map((item) => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
          {item.items && renderItems(item.items)}
        </li>
      ))}
    </ol>
  );
}

function TableOfContents(props) {
  return (
    <details>
      <summary>Table of Contents</summary>
      {renderItems(props.items)}
    </details>
  );
}

export default TableOfContents;
