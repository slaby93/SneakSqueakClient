import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900');

  html, body, #app {
    margin: 0;
    min-height: 100%;
    display: flex;
    flex-grow: 1;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
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
  .fade-authorize-enter {
    transition: all .5s ease-in;
    opacity: 0;
    z-index: 1;
    position: absolute;
    transform: translateX(-50%) translateY(100vh);
    left: 50%;
    &-active {
      transform:  translateX(-50%) translateY(0px);
      opacity: 1;
    }
  }

  .fade-authorize-exit {
    transition: all .5s ease-in;
    transform: translateY(100vh);
    opacity: 1;
    &-active {
      opacity: 0;
      transform: translateY(100vh);
    }
  }
`
