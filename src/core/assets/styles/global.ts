import { createGlobalStyle } from 'styled-components'

import { colors, metrics } from './'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Jost';
    box-sizing: border-box;
  }
  body {
    background-color: ${colors.white};
    margin: 0;
    font-family: 'Jost';
    font-weight: normal;
    font-size: 10px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%
  }

  h1, h2 {
    font-size: ${metrics.fontSizeL};
    margin-top: 0;
  }

  p, span {
    color: ${colors.primary};
    font-size: ${metrics.fontSizeDefault};
    font-weight: normal;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
