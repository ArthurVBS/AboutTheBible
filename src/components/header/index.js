import React from 'react'
import Sidebar from '../Sidebar'
import { Container, Logo, WrapperButton, ButtonToggleSidebar, ButtonToggleTheme } from './styled'

export default function Header(props) {
  const handleClickToggleTheme = () => {
    props.setIsDarkTheme(!props.isDarkTheme)
  }

  const handleClickToggleSidebar = () => {
    window.scrollTo(0, 0)
    props.setSidebarOpen(!props.sidebarOpen)
  }

  return (
    <Container id='header' isOpen={props.sidebarOpen}>
      <Logo><i className="fas fa-book-reader"></i> The Bible</Logo>

      <Sidebar
        sidebarOpen={props.sidebarOpen} setSidebarOpen={props.setSidebarOpen}
        isDarkTheme={props.isDarkTheme} setIsDarkTheme={props.setIsDarkTheme}
        setShowContainer={props.setShowContainer}
      />

      <WrapperButton>
        <ButtonToggleSidebar onClick={() => handleClickToggleSidebar()}>
          {props.sidebarOpen ? <i className="fas fa-times"></i> : <i className='fas fa-bars'></i>}
        </ButtonToggleSidebar>

        <ButtonToggleTheme onClick={() => handleClickToggleTheme()} isDarkTheme={props.isDarkTheme}>
          {props.isDarkTheme ? <i className="fas fa-sun"></i> : <i className="far fa-moon"></i>}
        </ButtonToggleTheme>
      </WrapperButton>
    </Container>
  )
}
