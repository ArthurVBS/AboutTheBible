import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${(props) => (props.theme.main.primary)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-top: 2px solid ${(props) => (props.theme.main.secondary)};
  box-shadow: 0px -4px 8px ${(props) => (props.theme.color.shadow)};

  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: space-around;
  }
`

export const StyledText = styled.p`
  color: ${(props) => (props.theme.contrast.secondary)};
  text-align: center;
  font-weight: 500;

  span {
    color: ${(props) => (props.theme.color.primary)};
    font-weight: 700;
  }

  a {
    color: ${(props) => (props.theme.color.secondary)};
    font-weight: 500;
    transition: all .4s;

    &:hover{
      letter-spacing: 1px;
    }
  }
`

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const StyledLink = styled.a`
  color: ${(props) => (props.theme.color.secondary)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  height: 40px;
  width: 40px;
  transition: all .8s;

  &:hover{
    background-color: ${(props) => (props.theme.color.secondary)};
    color: ${(props) => (props.theme.main.primary)};
    border-radius: 8px;
    transform: rotateZ(360deg);
  }
`
