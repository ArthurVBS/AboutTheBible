import styled from 'styled-components'

export const ContainerCardS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px;
`

export const CardS = styled.div`
  background-color: ${(props) => props.theme.neutral};
  color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  max-width: 768px;
  border-radius: 8px;
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  
  h2{
    text-align: center;
    font-weight: 500;
    letter-spacing: 1px;
  }

  p{
    text-align: center;
    letter-spacing: 1px;
  }
`
