import { StyledSidebar, StyledButtonContainer, StyledButton } from './Styled'

export default function Sidebar(props) {
  function handleClick(name){
    props.setShowContainer(name)
  }

  function handleClickOpenSidebar(){
    window.scrollTo(0, 0)
    props.setSidebarOpen(!props.sidebarOpen)
  }

  return (
    <StyledSidebar isOpen={props.sidebarOpen} onClick={() => handleClickOpenSidebar()}>
      <StyledButtonContainer>
        <StyledButton onClick={() => handleClick('about')} id='about'>About</StyledButton>

        <StyledButton onClick={() => handleClick('organization')} id='organization'>Organization</StyledButton>

        <StyledButton onClick={() => handleClick('books')} id='books'>Books</StyledButton>
      </StyledButtonContainer>
    </StyledSidebar>
  )
}
