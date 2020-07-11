import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    font-family: "Poppins", "Roboto", "Montserrat", sans-serif;
  }

  body,
  html,
  #root {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    text-align: center;
  }

  li {
    list-style: none
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    height: 0px;
    background-color: #FFF;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #DF4667;
  }
  
  ::selection {
    background-color: #DF4667;
    color: #FFF
  }

  ::-moz-selection {
    background-color: #DF4667;
    color: #FFF
  }

  .rec-carousel-wrapper {
    height: unset
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Global;
