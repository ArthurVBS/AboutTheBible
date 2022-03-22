import styled from 'styled-components'

export const StyledTitle = styled.h1`
  color: ${(props) => (props.theme.neutral.dark)};
  font-size: 2em;
  letter-spacing: 2px;
  text-align: center;
  padding: 16px;
`

export const StyledSectionInfo = styled.section`
  background-color: ${(props) => props.theme.neutral.lightGrey};
  color: ${(props) => (props.theme.neutral.dark)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  width: 100%;
  max-width: 768px;
  padding: 24px;
  margin: 24px auto;
  border-radius: 32px;

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
    background-color: ${(props) => (props.theme.neutral.light)};
    text-align: center;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 8px;
    border-radius: 20px;

    &:nth-child(1) i, &:nth-child(3) i{
      color: ${(props) => (props.theme.color.secondary)};
    }

    &:nth-child(2) i, &:nth-child(4) i{
      color: ${(props) => (props.theme.color.primary)};
    }
  }

  @media screen and (min-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
