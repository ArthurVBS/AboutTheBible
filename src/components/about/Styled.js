import styled from 'styled-components'

export const StyledMain = styled.main`
  background-color: ${(props) => (props.theme.main.primary)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 32px 16px;
  gap: 32px;
`

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 1028px;
  gap: 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 7fr;
    border-radius: 8px;
    border: 4px solid ${(props) => (props.theme.main.secondary)};
  }
`

export const StyledParagraph = styled.div`
  background-color: ${(props) => (props.theme.main.secondary)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  height: 100%;
  gap: 16px;
  padding: 16px;

  @media screen and (min-width: 768px) {
    border-radius: 0px;
  }

  p{
    color: ${(props) => (props.theme.contrast.secondary)};
    font-size: 1.2em;
    line-height: 1.7em;
    text-indent: 2em;
    text-align: justify;

    &:nth-child(1) span{
      color: ${(props) => (props.theme.color.primary)};
    }

    &:nth-child(2) span{
      color: ${(props) => (props.theme.color.secondary)};
    }
  }
`

export const StyledCard = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;

  h3{
    color: ${(props) => (props.theme.contrast.primary)};
    font-size: 1.8em;
    letter-spacing: 2px;
    text-align: center;

    span:first-child{
      color: ${(props) => (props.theme.color.primary)};
    }

    span:last-child{
      color: ${(props) => (props.theme.color.secondary)};
    }
  }

  img{
    margin: 0 auto;
    height: 120px;

    @media screen and (min-width: 768px) {
      height: 180px;
    }
  }
`

export const StyledVerse = styled.article`
  color: ${(props) => (props.theme.contrast.primary)};
  text-align: center;
  font-style: italic;
  font-weight: 500;
  font-size: 1.3em;
  max-width: 1028px;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  margin: 0 auto;
  box-shadow: 8px 8px 10px -4px ${(props) => (props.theme.color.shadow)};
  border: 2px solid ${(props) => (props.theme.main.secondary)};

  span{
    color: ${(props) => (props.theme.color.primary)};
    text-transform: capitalize;
    font-weight: 600;
  }

  i{
    color: ${(props) => (props.theme.color.primary)};
    margin-right: 8px;
  }
`
