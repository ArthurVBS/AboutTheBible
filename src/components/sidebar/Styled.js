import styled from 'styled-components'

export const Container = styled.nav`
  background-color: ${props => props.theme.main.primary};
  z-index: 15;
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  gap: 32px;
  box-shadow: -6px 0px 8px -4px ${props => props.theme.color.shadow};
  border: none;
  transition: transform .8s;
  transform: ${props => (props.isOpen === true ? 'translateX(0%)' : 'translateX(100%)')};

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

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`

export const Button = styled.button`
  background-color: transparent;
  color: ${props => props.theme.contrast.secondary};
  cursor: pointer;
  opacity: .7;
  text-align: center;
  font-size: 1.3em;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  border: none;
  transition: all .4s;

  &::before{
    content: '>';
    color: transparent;
    margin-right: 4px;
  }

  &:hover{
    color: ${props => props.theme.contrast.primary};
    opacity: 1;
    transform: translateX(8px);
  }

  &:hover::before{
    color: ${props => props.theme.color.secondary};
  }

  @media screen and (min-width: 768px){
    font-size: 1.1em;

    &:hover{
      transform: translateY(-2px);
    }
  }
`
