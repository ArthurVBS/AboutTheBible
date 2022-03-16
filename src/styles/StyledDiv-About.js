import styled from 'styled-components'

export const StyledDivAboutTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 16px;
  padding: 16px;

  h1{
    color: white;
    text-align: center;
    font-family: 'Arima Madurai', sans-serif;
    font-weight: 700;
    font-size: 1.8em;
    letter-spacing: 1px;

    @media screen and (min-width: 568px) {
      text-align: start;
      font-size: 2em;
    }

    @media screen and (min-width: 920px) {
      font-size: 2.5em;
    }
  }

  h4{
    color: white;
    text-align: justify;
    font-family: 'Arima Madurai', sans-serif;
    font-weight: 400;
    
    @media screen and (min-width: 568px) {
      font-size: 1.2em;
    }

    @media screen and (min-width: 920px) {
      font-size: 1.4em;
    }
  }
`

export const StyledDivAboutCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 16px;
  padding: 16px;

  h3{
    color: white;
    font-family: 'Arima Madurai', sans-serif;
    font-weight: 400;
    text-align: center;
  }
`
