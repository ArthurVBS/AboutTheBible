import styled, { css } from 'styled-components'

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

export const StyledCardAboutTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  max-width: 1080px;
  gap: 16px;
  padding: 16px;
  margin: 0 auto;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 920px) {
    padding: 32px;
  }
`

export const StyledCardAboutCenter = styled.div`
background-color: ${(props) => (props.theme.neutral)};
display: grid;
grid-template-columns: 1fr;
justify-content: center;
align-items: center;
min-height: calc(100vh - 100px);
gap: 16px;
padding: 16px;

@media screen and (min-width: 568px) {
  grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 920px) {
    padding: 32px;
  }
`

export const StyledCardAboutBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-top: 2px solid ${(props) => (props.theme.primaryColor)};
  border-bottom: 2px solid ${(props) => (props.theme.primaryColor)};
  transition: all .4s;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &:hover{
    border-top: 2px solid ${(props) => (props.theme.secondaryColor)};
    border-bottom: 2px solid ${(props) => (props.theme.secondaryColor)};
  }
`

export const StyledButtonAbout = styled.button`
  background-color: ${(props) => (props.theme.background)};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  letter-spacing: 1px;
  font-size: 1.2em;
  border: 2px solid ${(props) => (props.theme.primaryColor)};
  border-radius: 8px;
  padding: 12px 16px;
  transition: all .4s;

  &:hover{
    border: 2px solid ${(props) => (props.theme.secondaryColor)};
  }

  ${(props) => (props.variant === 'selected' && css`
    background-color: ${(props) => (props.theme.primaryColor)};

    &:hover{
      color: ${(props) => (props.theme.background)};
      background-color: ${(props) => (props.theme.secondaryColor)};
    }
  `)}
`

export const StyledImgHandBible = styled.img`
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 568px) {
    width: 320px;
  }

  @media screen and (min-width: 920px) {
    width: 400px;
  }
`

export const StyledImgBooks = styled.img`
  width: 200px;
  margin: 0 auto;
  border: 8px solid transparent;
  order: 1;

  @media screen and (min-width: 568px) {
    order: -1;
    width: 240px;
  }

  @media screen and (min-width: 920px) {
    width: 280px;
  }
`
