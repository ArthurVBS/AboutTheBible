import styled from 'styled-components'

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
