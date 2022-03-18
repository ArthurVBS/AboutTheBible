import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: ${(props) => (props.theme.primaryColor)} ${(props) => (props.theme.neutral)};
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
    background: ${(props) => (props.theme.neutral)};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => (props.theme.primaryColor)};
    border-radius: 8px;
    border: 4px solid ${(props) => (props.theme.neutral)};
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #707070;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #808080;
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
