import {wrapRootElement as wrap} from './root-wrapper';
import "./static/css/global.css";
import {defaultProps} from 'prism-react-renderer'
import Prism from 'prism-react-renderer/prism';

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-dart");

export const wrapRootElement = wrap;
