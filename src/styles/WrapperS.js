import styled from 'styled-components'

export const WrapperFlexS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px;
`

export const WrapperGridS = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  @media screen and (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
