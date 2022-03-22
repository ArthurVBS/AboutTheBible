import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  z-index: 12;
  position: sticky;
  right: 0;
  background-color: ${(props) => (props.theme.main.primary)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 16px;
  box-shadow: 0px 4px 8px ${(props) => (props.theme.color.shadow)};
  border-bottom: 2px solid ${(props) => (props.theme.main.secondary)};
  transition: transform .8s;
  ${(props) => (props.isOpen === true && css`

    @media screen and (min-width: 768px) {
      transform: translateY(0px);
    }
  `)}

  h1{
    color: ${(props) => (props.theme.color.primary)};
    font-size: 1.8em;

    i{
      margin-right: 6px;
    }

    @media screen and (min-width: 768px) {
      font-size: 2.2em;
    }
  }
`

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const StyledButtonToggle = styled.button`
  background-color: transparent;
  color: ${(props) => (props.theme.color.primary)};
  cursor: pointer;
  font-size: 1.4em;
  width: 48px;
  height: 48px;
  border: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const StyledButtonTheme = styled.button`
  background-color:  #C0C0C020;
  color: #C0C0C0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.4em;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  transition: all .4s;

  &:hover{
    transform: rotateZ(240deg);
  }
`
