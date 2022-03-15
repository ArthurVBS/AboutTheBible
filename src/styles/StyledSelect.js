import styled from 'styled-components'

export const StyledSelectContainer = styled.div`
  max-width: 768px;
  padding: 16px;
  margin: 0 auto;
`

export const StyledSelect = styled.select`
  background-color: ${(props) => (props.theme.background)};
  color: white;
  width: 100%;
  text-align: center;
  min-width: 280px;
  line-height: 1.5em;
  border: none;
  border-radius: 8px;
  outline-offset: 4px;
  outline: 2px solid ${(props) => (props.theme.primaryColor)};
  padding: 8px;
`
