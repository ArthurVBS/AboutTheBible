import styled, { css } from 'styled-components'

export const StyledToggle = styled.button`
  background-color: ${(props) => (props.theme.main.primary)};
  color: ${(props) => (props.theme.contrast.primary)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  letter-spacing: 1px;
  min-width: 240px;
  max-width: 280px;
  border: 2px solid ${(props) => (props.theme.color.primary)};;
  border-radius: 8px;
  padding: 12px 24px;
  transition: all .4s;

  &:hover{
    background-color: ${(props) => (props.theme.color.primary)};
    color: ${(props) => (props.theme.main.primary)};
  }

  ${(props) => (props.isOpen) === true && css`
    opacity: 0;
  `};
`

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s;
`

export const StyledMenu = styled.nav`
  background-color: ${(props) => (props.theme.main.primary)};
  z-index: 10;
  position: absolute;
  top: -50%;
  opacity: 0;
  visibility: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  max-width: calc(768px - (16px * 2));
  overflow-y: scroll;
  max-height: 400px;
  padding: 16px;
  border: 2px solid ${(props) => (props.theme.color.primary)};
  border-radius: 8px;
  margin: 16px;
  transition: all .4s;

  scrollbar-width: auto;
  scrollbar-color: ${(props) => (props.theme.color.primary)} transparent;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    max-height: 300px;

    ::-webkit-scrollbar {
      width: 14px;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => (props.theme.color.primary)};
    border-radius: 8px;
    border: 3px solid ${(props) => (props.theme.main.primary)};
  }

  ${(props) => (props.isOpen) === true && css`
    top: 0px;
    opacity: 1;
    visibility: visible;
  `};

  span {
    background-color: ${(props) => (props.theme.color.primary)};
    color: ${(props) => (props.theme.main.primary)};
    cursor: pointer;
    text-align: center;
    grid-column: 1/3;
    padding: 4px;
    border: 2px solid ${(props) => (props.theme.color.primary)};
    border-radius: 8px;
    margin-bottom: 8px;
    transition: all .4s;

    &:hover{
      background-color: ${(props) => (props.theme.main.primary)};
      color: ${(props) => (props.theme.color.primary)};
      border: 2px solid ${(props) => (props.theme.color.primary)};
    }

    @media screen and (min-width: 768px) {
      grid-column: 1/4;
    }
  }

  button {
    background-color: ${(props) => (props.theme.main.secondary)};
    color: ${(props) => (props.theme.contrast.primary)};
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 8px;
    transition: all .4s;

    ${(props) => (props.isOpen) !== true && css`
      pointer-events: none;
    `};

    &:hover{
      background-color: ${(props) => (props.theme.color.primary)};
      color: ${(props) => (props.theme.main.primary)};
    }
  }
`
