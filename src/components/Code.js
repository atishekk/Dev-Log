import Highlight, { defaultProps } from 'prism-react-renderer';
import Nordtheme from './Nord';
import React from 'react';
import styled from 'styled-components';
import { copyToClipboard } from '../utils/copy-to-clipboard';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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
`;



const Code = ({ codeString, language }) => {
  const handleClick = () => {
    copyToClipboard(codeString);
    return toast('Copied to Clipboard', {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#000",
        color: "#fff"
      }
    });
  };

  return (
    <>
      <Highlight
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
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
};

export default Code;
