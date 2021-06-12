import {MDXProvider} from '@mdx-js/react';
import React from 'react';
import Code from './src/components/Code'
import Theme from './src/theme/Theme'


const components = {
  'p.inlineCode': props => (
    <code style={{backgroundColor: Theme.nord4, color: Theme.nord0, paddingLeft: '3px', paddingRight: '3px'}} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace('language-', '')
          }
          {...props}
        />
      );
    }
  }
};


export const wrapRootElement = ({element}) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
