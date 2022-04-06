import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  padding: 32px 16px;
`

export const Title = styled.h1`
  color: ${props => props.theme.contrast.primary};
  font-size: 2em;
  letter-spacing: 2px;
  text-align: center;
  padding: 16px;
`

export const Section = styled.section`
  background-color: ${props => props.theme.main.secondary};
  color: ${props => props.theme.contrast.primary};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  width: 100%;
  max-width: 768px;
  padding: 24px;
  margin: 0 auto;
  border-radius: 8px;

  p{
    text-align: center;
    letter-spacing: 1px;
  }
`

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 16px;

  h5{
    background-color: ${props => props.theme.main.primary};
    text-align: center;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 8px;
    border-radius: 8px;

    &:nth-child(1) i, &:nth-child(3) i{
      color: ${props => props.theme.color.secondary};
    }

    &:nth-child(2) i, &:nth-child(4) i{
      color: ${props => props.theme.color.primary};
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
