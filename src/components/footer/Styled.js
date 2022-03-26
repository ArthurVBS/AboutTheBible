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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
  font-size: .9em;
  min-height: 36px;
  opacity: .7;
  transition: all .4s;

  &:hover{
    opacity: 1;

  }

  span{
    color: ${(props) => (props.theme.color.primary)};
    font-weight: 700;
  }

  a {
    color: ${(props) => (props.theme.color.secondary)};
    font-weight: 500;
    transition: all .4s;

    &:hover{
      transform: translateY(-4px);
    }
  }
`

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

export const StyledLink = styled.a`
  color: ${(props) => (props.theme.contrast.secondary)};
  font-size: .9em;
  opacity: .7;
  transition: all .4s;

  &:hover{
    opacity: 1;
  }
`

export const StyledButton = styled.a`
  background-color: ${(props) => (props.theme.main.secondary)};
  color: ${(props) => (props.theme.contrast.secondary)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: .7;
  font-size: 1.2em;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  transition: all .4s;

  &:hover{
    opacity: 1;
  }
`
