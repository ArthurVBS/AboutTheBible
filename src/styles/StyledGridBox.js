import styled from 'styled-components'

export const StyledGridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 16px;

  h5{
    background-color: ${(props) => (props.theme.background)};
    text-align: center;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 8px;
    border-radius: 20px;

    &:nth-child(1) i, &:nth-child(3) i{
      color: ${(props) => (props.theme.secondaryColor)};
    }

    &:nth-child(2) i, &:nth-child(4) i{
      color: ${(props) => (props.theme.primaryColor)};
    }
  }
  
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
