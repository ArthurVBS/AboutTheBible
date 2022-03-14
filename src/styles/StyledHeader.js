import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  right: 0;
  background-color: ${(props) => (props.theme.neutral)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #CCC;
  transition: all .8s;
  ${(props) => (props.isOpen === true && css`
    transform: translateY(-99px);

    @media screen and (min-width:568px) {
      width: calc(100% - 280px);
      right: 280px;
      transform: translateY(0px);
    }
  `)};
`

export const StyledButtonToggle = styled.button`
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 1.4em;
  width: 48px;
  height: 48px;
  border: none;
`
