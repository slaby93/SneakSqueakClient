import { injectGlobal } from 'styled-components'

injectGlobal`

  body {
    margin: 0;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`