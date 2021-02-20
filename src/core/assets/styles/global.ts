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

  .toasts-wrapper {
    position: fixed;
    top: 0;
    left: 1rem;
    z-index: 999
  }

  .toast {
    padding: 0.5rem 1rem;
    color: white;
    background: green;
    margin-bottom: 0.5rem;
  }
`
