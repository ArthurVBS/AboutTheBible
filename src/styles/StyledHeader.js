import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  right: 0;
  background-color: #202026;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #CCC;
  transition: all .8s;
  transform: ${(props) => (props.isOpen === true ? 'translateY(-99px)' : null)};

  @media screen and (min-width:568px) {
    width: ${(props) => (props.isOpen === true ? 'calc(100% - 280px)' : null)};
    right: ${(props) => (props.isOpen === true ? '280px' : null)};
    transform: ${(props) => (props.isOpen === true ? 'translateY(0px)' : null)};
  }
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
