import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  right: 0;
  background-color: ${(props) => (props.theme.neutral.light)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px 6px 8px -4px #00000040;
  border-bottom: 2px solid ${(props) => (props.theme.neutral.grey)};
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
  color: ${(props) => (props.theme.color.primary)};
  cursor: pointer;
  font-size: 1.4em;
  width: 48px;
  height: 48px;
  border: none;
`
