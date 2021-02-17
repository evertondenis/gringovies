import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        font-family: 'Jost';
        box-sizing: border-box;
    }
  body {
    /* background-color: #222C30; */
    background-color: #fff;
    margin: 0;
    font-family: 'Jost';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
