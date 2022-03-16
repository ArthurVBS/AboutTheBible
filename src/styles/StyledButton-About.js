import styled, { css } from 'styled-components'

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

