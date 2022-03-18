import styled, { css } from 'styled-components'

export const StyledSidebar = styled.nav`
  background-color: ${(props) => (props.theme.neutral)};
  z-index: 10;
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 100vw;
  min-height: calc(100vh);
  gap: 16px;
  padding: 24px;
  border: none;
  transition: all .8s;
  transform: ${(props) => (props.isOpen === true ? 'translateX(0%)' : 'translateX(100%)')};

  @media screen and (min-width:568px) {
    min-width: 280px;
    justify-content: space-between;
    border-left: 1px solid #CCC;
  }
`

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.isSelected === true ? '#FFF' : '#CCC')};
  cursor: pointer;
  text-align: center;
  font-size: 1.2em;
  font-family: 'Poppins', sans-serif;
  border: none;
  padding: 16px;
  transition: all .5s;

  ${(props) => (props.isSelected === true && css`
    &::before{
      content: '>';
      color: ${props.theme.secondaryColor};
      margin-right: 4px;
    }
  `)};

  &:hover{
    transform: translateX(8px);
  }
`

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const StyledLink = styled.a`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 1.6em;
  transition: .7s;

  &:hover{
    background-color: ${(props) => (props.theme.primaryColor)};
    border-radius: 35%;
  }
`
