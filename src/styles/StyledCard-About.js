import styled from 'styled-components'

export const StyledCardAboutTop = styled.div`
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
