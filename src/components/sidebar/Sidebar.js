import { StyledSidebar, StyledButtonContainer, StyledButton, StyledLinkContainer, StyledLink } from './Styled'

export default function Sidebar(props) {
  function handleClick(name){
    props.setShowContainer(name)

    document.querySelectorAll('.button').forEach((element) => {
      element.classList.remove('selected')
    })
    document.querySelector(`.${name}`).classList.add('selected')
  }

  return (
    <StyledSidebar isOpen={props.sidebarOpen} onClick={() => { props.setSidebarOpen(!props.sidebarOpen) }}>
      <StyledButtonContainer>
        <StyledButton onClick={() => handleClick('about')} className='button about selected'>About</StyledButton>

        <StyledButton onClick={() => handleClick('organization')} className='button organization'>Organization</StyledButton>

        <StyledButton onClick={() => handleClick('books')} className='button books'>Books</StyledButton>
      </StyledButtonContainer>

      <StyledLinkContainer>
        <StyledLink href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer'>
          <i className="fab fa-github"></i>
        </StyledLink>

        <StyledLink href='https://www.linkedin.com/in/arthurvbs/' target='_blank' rel='external noreferrer'>
          <i className="fab fa-linkedin"></i>
        </StyledLink>
      </StyledLinkContainer>
    </StyledSidebar>
  )
}
