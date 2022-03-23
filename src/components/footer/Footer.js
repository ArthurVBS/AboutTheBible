import { StyledFooter, StyledText, StyledButton, StyledLink, StyledLinkContainer } from "./Styled"

export default function Footer() {
  function handleClick() {
    window.scrollTo(0, 0)
  }

  return (
    <StyledFooter>
      <StyledText>
        Made with <span>♡</span> and React by <a href='https://github.com/ArthurVBS' target='_blank' rel='external noreferrer'>Arthur V.B.S.</a>
      </StyledText>

      <StyledLinkContainer>
        <StyledLink href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer'>
          GitHub
        </StyledLink>

        <StyledLink href='https://www.linkedin.com/in/arthurvbs/' target='_blank' rel='external noreferrer'>
          Linkedin
        </StyledLink>

        <StyledButton onClick={() => handleClick()}>
          <i className="fas fa-angle-up"></i>
        </StyledButton>
      </StyledLinkContainer>
    </StyledFooter>
  )
}
