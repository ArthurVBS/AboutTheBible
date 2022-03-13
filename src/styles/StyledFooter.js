import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-top: 2px solid ${(props) => (props.theme.neutral)};

  p {
    color: white;
    text-align: center;
  }

  span {
    color: ${(props) => (props.theme.primaryColor)};
  }

  a{
    color: #80EE60;
    font-weight: 300;
    transition: all .5s;

    &:hover{
      letter-spacing: 1px;
    }
  }
`
