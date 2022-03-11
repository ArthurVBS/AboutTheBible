import styled from 'styled-components'

export const TitleS = styled.h2`
  color: white;
  font-size: 1.8em;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  padding: 16px;
  border-bottom: 2px solid ${(props) => (props.theme.neutral)};
`
