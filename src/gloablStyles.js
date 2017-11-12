import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900');

  html, body, #app {
    margin: 0;
    min-height: 100%;
    display: flex;
    flex-grow: 1;
  }

  html, button {
    font-family: 'Montserrat','Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    font-size: 20px;
    color: #e05454;
    text-decoration: none;
    font-weight: 500;
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
