import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:100,200,300,400,500,600,700,800,900');
  * {
    font-family: 'Barlow', sans-serif;
  }
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  span, p, a {
    color: white;
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
