import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  right: 0;
  background-color: ${(props) => (props.theme.neutral.light)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px 6px 8px -4px #00000040;
  border-bottom: 2px solid ${(props) => (props.theme.neutral.grey)};
  transition: all .8s;
  ${(props) => (props.isOpen === true && css`
    transform: translateY(-99px);

    @media screen and (min-width: 768px) {
      transform: translateY(0px);
    }
  `)}

  h1{
    color: ${(props) => (props.theme.color.primary)};
  }
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

export const StyledButtonContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px){
    display: flex;
    justify-content: center;
  }
`

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.theme.neutral.darkGrey)};
  cursor: pointer;
  text-align: center;
  font-size: 1.2em;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  border: none;
  padding: 16px;
  transition: all .4s;

  &.selected{
    color: ${(props) => (props.theme.neutral.dark)};
    font-weight: 500;
  }

  &.selected::before{
    content: '>';
    color: ${(props) => (props.theme.color.secondary)};
    margin-right: 4px;
  }

  &:hover{
    transform: translateY(-4px);
  }
`

export const StyledLinkContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px){
    display: flex;
  }
`

export const StyledLink = styled.a`
  color: ${(props) => (props.theme.color.secondary)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 1.6em;
  transition: .7s;

  &:hover{
    background-color: ${(props) => (props.theme.color.secondary)};
    color: ${(props) => (props.theme.neutral.light)};
    border-radius: 35%;
  }
`
