import styled from 'styled-components'

export const StyledSectionTestament = styled.section`
  border-top: 2px solid ${(props) => (props.theme.main.secondary)};
  padding: 24px;

  h1{
    color: ${(props) => (props.theme.contrast.primary)};
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 1.4em;
    max-width: 768px;
    margin: 0 auto;

    &::before{
      color: ${(props) => (props.color) === 'primary' ? (props.theme.color.primary) : (props.theme.color.secondary)};
      content: '>';
      margin-right: 4px;
    }
  }
`

export const StyledIndex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 24px;

  a {
    color: ${(props) => (props.theme.contrast.primary)};
    letter-spacing: 1px;
    font-size: 1.4em;
    opacity: 0.5;
    transition: all .4s;

    &:hover{
      opacity: 1;
    }

    &:nth-child(1):hover span{
      color: ${(props) => (props.theme.color.secondary)};
    }

    &:nth-child(3):hover span{
      color: ${(props) => (props.theme.color.primary)};
    }
  }

  span {
    font-size: 1.8em;

    &:nth-child(1), &:nth-child(3){
      color: ${(props) => (props.theme.contrast.primary)};
      transition: all .4s;
    }

    &:nth-child(2){
      color: ${(props) => (props.theme.main.secondary)};
      font-size: 2em;
    }
  }
`
