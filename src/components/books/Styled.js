import styled from 'styled-components'

export const StyledSectionBooks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    color: white;
    font-size: 2em;
    letter-spacing: 2px;
    text-align: center;
    padding: 24px;
  }
`

export const StyledSectionInfo = styled.section`
  background-color: ${(props) => props.theme.neutral};
  color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  width: 100%;
  max-width: 768px;
  padding: 24px;
  margin: 0 auto;
  border-radius: 32px;
  border: 16px solid ${(props) => props.theme.background};

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
