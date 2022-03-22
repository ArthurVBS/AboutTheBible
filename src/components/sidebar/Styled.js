import styled from 'styled-components'

export const StyledSidebar = styled.nav`
  background-color: ${(props) => (props.theme.neutral.light)};
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
  box-shadow: -6px 0px 8px -4px #00000040;
  border: none;
  transition: all .8s;
  transform: ${(props) => (props.isOpen === true ? 'translateX(0%)' : 'translateX(100%)')};

  @media screen and (min-width: 768px) {
    transform: translateX(100%);
    min-width: 280px;
    justify-content: space-between;
    border-left: 2px solid ${(props) => (props.theme.neutral.grey)};
  }
`

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.theme.neutral.darkGrey)};
  cursor: pointer;
  text-align: center;
  font-size: 1.3em;
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
  color: ${(props) => (props.theme.neutral.dark)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 1.6em;
  transition: .7s;

  &:hover{
    background-color: ${(props) => (props.theme.color.primary)};
    color: ${(props) => (props.theme.neutral.light)};
    border-radius: 35%;
  }
`
