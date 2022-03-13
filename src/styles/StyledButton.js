import styled from 'styled-components'

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  gap: 24px;
  padding: 16px;
  margin: 0 auto;
`

export const StyledButton = styled.button`
  background-color: ${(props) => (props.theme.background)};
  color: white;
  cursor: pointer;
  font-size: 1em;
  border: 2px solid ${(props) => (props.theme.neutral)};
  border-radius: 16px;
  padding: 12px 24px;
  transition: .5s;

  &:hover{
    border: 2px solid ${(props) => (props.theme.secondaryColor)};
  }
`
