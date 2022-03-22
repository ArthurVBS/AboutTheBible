import { StyledSidebar, StyledButtonContainer, StyledButton } from './Styled'

export default function Sidebar(props) {
  function handleClick(name){
    props.setShowContainer(name)

    document.querySelectorAll('.button').forEach((element) => {
      element.classList.remove('selected')
    })
    document.querySelector(`.${name}`).classList.add('selected')
  }

  function handleClickOpenSidebar(){
    window.scrollTo(0, 0)
    props.setSidebarOpen(!props.sidebarOpen)
  }

  return (
    <StyledSidebar isOpen={props.sidebarOpen} onClick={() => handleClickOpenSidebar()}>
      <StyledButtonContainer>
        <StyledButton onClick={() => handleClick('about')} className='button about selected'>About</StyledButton>

        <StyledButton onClick={() => handleClick('organization')} className='button organization'>Organization</StyledButton>

        <StyledButton onClick={() => handleClick('books')} className='button books'>Books</StyledButton>
      </StyledButtonContainer>
    </StyledSidebar>
  )
}
