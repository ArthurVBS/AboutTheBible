import { StyledFooter, StyledText, StyledLink, StyledLinkContainer } from "./Styled"

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLinkContainer>
        <StyledLink href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer'>
          <i className="fab fa-github"></i>
        </StyledLink>

        <StyledLink href='https://www.linkedin.com/in/arthurvbs/' target='_blank' rel='external noreferrer'>
          <i className="fab fa-linkedin"></i>
        </StyledLink>
      </StyledLinkContainer>

      <StyledText>
        Made with <span>♡</span> and React by <a href='https://github.com/ArthurVBS' target='_blank' rel='external noreferrer'>Arthur V.B.S.</a>
      </StyledText>
    </StyledFooter>
  )
}
