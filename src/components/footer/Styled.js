import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${(props) => (props.theme.neutral.light)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-top: 2px solid ${(props) => (props.theme.neutral.grey)};
  box-shadow: 0px -6px 8px -4px ${(props) => (props.theme.neutral.grey)};

  p {
    color: ${(props) => (props.theme.neutral.darkGrey)};
    text-align: center;
    font-weight: 500;
  }

  span {
    color: ${(props) => (props.theme.color.primary)};
    font-weight: 700;
  }

  a {
    color: ${(props) => (props.theme.color.secondary)};
    font-weight: 500;
    transition: all .5s;

    &:hover{
      letter-spacing: 1px;
    }
  }
`
