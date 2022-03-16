import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: ${(props) => props.theme.background};
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
  }

  blockquote, q{
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after{
    content: '';
    content: none;
  }

  table{
    border-collapse: collapse;
    border-spacing: 0;
  }

`