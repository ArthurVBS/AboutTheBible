import styled from 'styled-components'

export const StyledSectionOrganization = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledSectionTestament = styled.section`
  border-top: 1px solid ${(props) => (props.theme.neutral)};
  padding: 24px;

  h1{
    color: white;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 1.4em;
    max-width: 768px;
    margin: 0 auto;

    &::before{
      color: ${(props) => (props.color) === 'primary' ? (props.theme.primaryColor) : (props.theme.secondaryColor)};
      content: '>';
      margin-right: 4px;
    }
  }
`

export const StyledDivIndex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 24px;

  a {
    color: white;
    letter-spacing: 1px;
    font-size: 1.4em;
    opacity: 0.5;
    transition: all .5s;

    &:hover{
      opacity: 1;
    }

    &:nth-child(1):hover span{
      color: ${(props) => (props.theme.secondaryColor)};
    }

    &:nth-child(3):hover span{
      color: ${(props) => (props.theme.primaryColor)};
    }
  }

  span {
    font-size: 1.8em;

    &:nth-child(1), &:nth-child(3){
      color: white;
      transition: all .5s;
    }

    &:nth-child(2){
      color: ${(props) => (props.theme.neutral)};
      font-size: 2em;
    }
  }
`
