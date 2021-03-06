import Highlight, { defaultProps } from 'prism-react-renderer';
import Nordtheme from './Nord';
import React from 'react';
import styled from 'styled-components';
import { copyToClipboard } from '../utils/copy-to-clipboard';
import {notif} from "./Notif";

export const Pre = styled.pre`
  text-align: left;
  margin: 1rem 0;
  padding: 0.5rem;
  overflow-x: auto;
  border-radius: 3px;

  & .token-line {
    line-height: 1.3rem;
    height: 1.3rem;
  }
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  ::-webkit-scrollbar {
  display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2rem;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 700px) {
    position: relative;
  }
`;


const Code = ({ codeString, language }) => {
  const handleClick = () => {
    copyToClipboard(codeString);
    notif();
  };

  return (
    <>
      <Highlight
        className={"rmScroll"}
        {...defaultProps}
        code={codeString}
        language={language}
        theme={Nordtheme}>
        {({
          className,
            style,
            tokens,
            getLineProps,
            getTokenProps,
        }) => (
          <Pre className={className} style={style}>
            <CopyCode onClick={handleClick}>Copy</CopyCode>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </>
  );
};

export default Code;
