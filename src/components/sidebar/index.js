import React from 'react'
import { Container, WrapperButtons, Button } from './styled'

export default function Sidebar(props) {
  const handleClickSetContainer = (name) => {
    props.setShowContainer(name)
  }

  const handleClickToggleSidebar = () => {
    window.scrollTo(0, 0)
    props.setSidebarOpen(!props.sidebarOpen)
  }

  return (
    <Container isOpen={props.sidebarOpen} onClick={() => handleClickToggleSidebar()}>
      <WrapperButtons>
        <Button onClick={() => handleClickSetContainer('about')} id='about'>About</Button>

        <Button onClick={() => handleClickSetContainer('organization')} id='organization'>Organization</Button>

        <Button onClick={() => handleClickSetContainer('books')} id='books'>Books</Button>
      </WrapperButtons>
    </Container>
  )
}
