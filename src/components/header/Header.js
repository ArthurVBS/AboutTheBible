import Sidebar from '../Sidebar/Sidebar'
import { StyledHeader, StyledButtonContainer, StyledButtonToggle, StyledButtonTheme } from './Styled'

export default function Header(props) {
  function handleClickChangeTheme(){
    props.setIsDarkTheme(!props.isDarkTheme)
  }

  function handleClickOpenSidebar(){
    window.scrollTo(0, 0)
    props.setSidebarOpen(!props.sidebarOpen)
  }

  return (
    <StyledHeader id='header' isOpen={props.sidebarOpen}>
      <h1><i className="fas fa-book-reader"></i> The Bible</h1>

      <Sidebar
        sidebarOpen={props.sidebarOpen} setSidebarOpen={props.setSidebarOpen}
        isDarkTheme={props.isDarkTheme} setIsDarkTheme={props.setIsDarkTheme}
        setShowContainer={props.setShowContainer}
      />

      <StyledButtonContainer>
        <StyledButtonToggle onClick={() => handleClickOpenSidebar()}>
          {props.sidebarOpen ? <i className="fas fa-times"></i> : <i className='fas fa-ellipsis-v'></i>}
        </StyledButtonToggle>

        <StyledButtonTheme onClick={() => handleClickChangeTheme()} isDarkTheme={props.isDarkTheme}>
          {props.isDarkTheme ? <i className="fas fa-sun"></i> : <i className="far fa-moon"></i>}
        </StyledButtonTheme>
      </StyledButtonContainer>
    </StyledHeader>
  )
}
