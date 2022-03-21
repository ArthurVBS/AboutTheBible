import styled, { css } from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 16px;
  padding: 16px;

  h3{
    color: ${(props) => (props.theme.neutral.dark)};
    font-size: 1.8em;
    letter-spacing: 2px;
    text-align: center;
    padding: 8px 0px;
    max-width: 1080px;
    margin: 0 auto;
  }

  p{
    color: ${(props) => (props.theme.neutral.dark)};
    font-size: 1.2em;
    line-height: 1.7em;
    text-indent: 2em;
    text-align: justify;
    max-width: 1080px;
    margin: 0 auto;
  }

  ${(props) => (props.variant === 'top' && css`
    h3{
      span{
        color: ${(props) => (props.color === 'primary'
          ? props.theme.color.primary
          : props.theme.color.secondary
        )};
      }
    }
    p{
      span{
        color: ${(props) => (props.color === 'primary'
          ? props.theme.color.secondary
          : props.theme.color.primary
        )};
        font-weight: 600;
      }
    }
  `)}

  ${(props) => (props.variant === 'bottom' && css`
    order: 2;

    @media screen and (min-width: 568px) {
      grid-column: 1/3;
    }

    h3{
      span:nth-child(1){
        color: ${(props) => (props.theme.color.primary)};
      }
      span:nth-child(2){
        color: ${(props) => (props.theme.color.secondary)};
      }
    }

    p{
      &:nth-child(2) span{
        color: ${(props) => (props.theme.color.primary)};
        font-weight: 600;
      }
      &:nth-child(3) span{
        color: ${(props) => (props.theme.color.secondary)};
        font-weight: 600;
      }
    }
  `)}
`

export const StyledSection = styled.section`
  background-color: ${(props) => (props.theme.neutral.light)};
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  overflow-x: hidden;
  gap: 16px;
  padding: 16px;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px
  }

  @media screen and (min-width: 920px) {
    padding: 32px;
  }

  ${(props) => (props.variant === 'top' && css`
    max-width: 1080px;
    margin: 0 auto;
  `)}

  ${(props) => (props.variant === 'bottom' && css`
    background-color: ${(props) => (props.theme.neutral.lightGrey)};
  `)}
`

export const StyledVerse = styled.article`
  order: 2;
  color: ${(props) => (props.theme.neutral.dark)};
  text-align: center;
  font-style: italic;
  font-weight: 500;
  font-size: 1.3em;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 8px 8px 10px -4px #00000040;
  border: 2px solid ${(props) => (props.theme.neutral.grey)};

  span{
    color: ${(props) => (props.theme.color.primary)};
    text-transform: capitalize;
    font-weight: 600;
  }

  i{
    color: ${(props) => (props.theme.color.primary)};
    margin-right: 8px;
  }

  @media screen and (min-width: 568px) {
    grid-column: 1/3;
  }
`

export const StyledButton = styled.button`
  background-color: ${(props) => (props.theme.neutral.lightGrey)};
  color: ${(props) => (props.theme.color.secondary)};
  cursor: pointer;
  order: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  letter-spacing: 1px;
  font-size: 1.2em;
  border: 2px solid ${(props) => (props.theme.color.secondary)};
  border-radius: 8px;
  box-shadow: 4px 4px 5px -2px #00000040;
  padding: 12px 16px;
  transition: all .4s;

  &:hover{
    color: ${(props) => (props.theme.color.primary)};
    border: 2px solid ${(props) => (props.theme.color.primary)};
  }

  ${(props) => (props.variant === 'selected' && css`
    color: ${(props) => (props.theme.neutral.lightGrey)};
    background-color: ${(props) => (props.theme.color.secondary)};

    &:hover{
      color: ${(props) => (props.theme.neutral.lightGrey)};
      background-color: ${(props) => (props.theme.color.primary)};
    }
  `)}
`

export const StyledImgHandBible = styled.img`
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 568px) {
    width: 320px;
  }

  @media screen and (min-width: 920px) {
    width: 400px;
  }
`

export const StyledImgBooks = styled.img`
  width: 200px;
  margin: 0 auto;
  border: 8px solid transparent;
  order: 1;

  @media screen and (min-width: 568px) {
    order: -1;
    width: 240px;
  }

  @media screen and (min-width: 920px) {
    width: 280px;
  }
`
