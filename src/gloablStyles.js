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

  .blinker-enter {
    background-color: red;
    transition: background 1000ms ease-in;
    &-active {
      background-color: green;
    
    }
  }

  .blinker-exit {
    background-color: blue;
    transition: background 1000ms ease-in;
    &-active {
      background-color: black;
    }
  }
`
