import Sidebar from '../Sidebar/Sidebar'
import { StyledHeader, StyledButtonToggle, StyledButtonContainer, StyledButton, StyledLinkContainer, StyledLink } from './Styled'

export default function Header(props) {
  function handleClick(name){
    props.setShowContainer(name)

    document.querySelectorAll('.button').forEach((element) => {
      element.classList.remove('selected')
    })
    document.querySelector(`.${name}`).classList.add('selected')
  }

  return (
    <>
      <StyledHeader id='header' isOpen={props.sidebarOpen}>
        <h1><i className="fas fa-book-reader"></i> The Bible</h1>

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

        <StyledButtonToggle onClick={() => {
          window.scrollTo(0, 0)
          props.setSidebarOpen(!props.sidebarOpen)
        }}>
          {props.sidebarOpen === true ? <i className="fas fa-times"></i> : <i className='fas fa-bars'></i>}
        </StyledButtonToggle>
      </StyledHeader>

      <Sidebar sidebarOpen={props.sidebarOpen} setSidebarOpen={props.setSidebarOpen} setShowContainer={props.setShowContainer} />
    </>
  )
}
