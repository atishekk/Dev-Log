import React, { useEffect, useState } from "react";
import Theme from '../theme/Theme'

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(`test`);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id));
    });
    return () => {
      itemIds.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, [itemIds]);
  return activeId;
}

function renderItems(items, activeId, space) {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.url} style={{marginLeft: `${space}px`}}>
            {"● "}
            <a
              href={item.url}
              style={{
                color: activeId === item.url.slice(1) ? `${Theme.nord8}` : `${Theme.nord4}`,
                fontSize: activeId === item.url.slice(1) ? `0.9rem` : '0.8rem',
                textDecoration: 'none',
              }}
            >
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId, space+5)}
          </div>
        );
      })}
    </>
  );
}

function TableOfContents(props) {
  const idList = getIds(props.items);
  const activeId = useActiveId(idList);
  return (
    <details open>
      <summary style={{paddingBottom: '10px'}}><b>Table of Contents</b></summary>
      {renderItems(props.items, activeId, 0)}
    </details>
  );
}

export default TableOfContents;
