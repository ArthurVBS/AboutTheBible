import styled from 'styled-components'

export const ButtonS = styled.button`
  background-color: ${(props) => (props.theme.background)};
  color: white;
  cursor: pointer;
  font-size: 1em;
  border: 2px solid ${(props) => (props.theme.neutral)};
  border-radius: 10px;
  padding: 8px 16px;
  transition: .5s;

  &:hover{
    border: 2px solid ${(props) => (props.theme.secondaryColor)};
  }
`
