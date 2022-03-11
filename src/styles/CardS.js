import styled from 'styled-components'

export const CardS = styled.div`
  background-color: ${(props) => props.theme.neutral};
  color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
  max-width: 768px;
  border-radius: 8px;
  padding: 16px;
  border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  
  h2{
    text-align: center;
    font-weight: 500;
    letter-spacing: 1px;
  }

  p{
    text-align: center;
  }
  
  h5{
    background-color: ${(props) => (props.theme.background)};
    text-align: center;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 8px;
    border-radius: 20px;
  }

  h5:nth-child(1) i, h5:nth-child(3) i{
    color: ${(props) => (props.theme.secondaryColor)};
  }
  
  h5:nth-child(2) i, h5:nth-child(4) i{
    color: ${(props) => (props.theme.primaryColor)};
  }

`
