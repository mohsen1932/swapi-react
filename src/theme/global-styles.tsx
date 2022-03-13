import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
      font-size: 16px;
    }
    body {
      overflow-x: hidden;
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      font-family: "Open Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: white;
      color: #525252;
    }
    img {
      max-width: 100%;
    }
    ul,
    li {
      padding: 0;
      list-style: none;
    }
    * {
        box-sizing: border-box;
    }
    #root {
      width: 100%;
      float: left;
      overflow: hidden;
    }
    @keyframes loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    a{
        text-decoration: none;
        color: #2980b9;
    }
    p{
      color: #777;
      padding: 0;
      margin: .2rem 0;
    }
    .alert {
        padding: 1rem;
        margin: 1rem 0;
        font-size: .8rem ;
        color: #842029;
        background-color: #f8d7da;
        border:1px solid #f5c2c7;
        border-radius: 0.25rem;
    }
    @keyframes loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    .loading-box{
      background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
      animation: loading 1.4s ease infinite;
      background-size: 400% 100%;
    }
`;
export default GlobalStyle;
