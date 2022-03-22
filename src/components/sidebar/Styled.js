import styled from 'styled-components'

export const StyledSidebar = styled.nav`
  background-color: ${(props) => (props.theme.main.primary)};
  z-index: 15;
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  gap: 32px;
  padding: 16px;
  box-shadow: -6px 0px 8px -4px ${(props) => (props.theme.color.shadow)};
  border: none;
  transition: transform .8s;
  transform: ${(props) => (props.isOpen === true ? 'translateX(0%)' : 'translateX(100%)')};

  @media screen and (min-width: 768px) {
    background-color: transparent;
    z-index: 1;
    position: static;
    justify-content: center;
    flex-direction: row;
    min-width: inherit;
    min-height: inherit;
    box-shadow: none;
    transform: none;
    transition: all .4s;
  }
`

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.theme.contrast.secondary)};
  cursor: pointer;
  text-align: center;
  font-size: 1.3em;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  border: none;
  padding: 16px;
  transition: all .4s;

  &.selected{
    color: ${(props) => (props.theme.contrast.primary)};
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

  @media screen and (min-width: 768px){
    font-size: 1.2em;

    &:hover{
      transform: translateY(-4px);
    }
  }
`
