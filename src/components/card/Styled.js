import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.main.secondary};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 8px;
  max-width: 768px;
  gap: 32px;
  padding: 32px;
  margin: 0 auto;
  margin-top: 24px;

  border-bottom: 1px solid ${props => (props.color) === 'primary' ? (props.theme.color.primary) : (props.theme.color.secondary)};

  h2 {
    color: ${props => props.theme.contrast.primary};
    letter-spacing: 1px;
    text-align: center;
    font-weight: 500;
  }

  p {
    color: ${props => props.theme.contrast.secondary};
    text-align: center;
  }
`

export const Details = styled.details`
  background-color: ${props => props.theme.main.secondary};

  summary{
    color: ${props => props.theme.contrast.primary};
    display: flex;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    border-radius: 8px;
    width: 150px;
    padding: 8px;
    margin: 0 auto;
    transition: all .4s;

    outline: 2px solid ${props => (props.color) === 'primary' ? (props.theme.color.primary) : (props.theme.color.secondary)};

    &:hover{
      transform: translateY(-4px);
    }
  }
`

export const WrapperBooks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`

export const Books = styled.h5`
  color: ${props => props.theme.contrast.primary};
  flex-grow: 1;
  text-align: center;
  font-size: 0.7em;
  font-weight: 400;
  padding: 8px;
`
