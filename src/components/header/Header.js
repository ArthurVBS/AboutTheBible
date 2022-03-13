import { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import logo from '../../assets/logo.png'
import { StyledHeader, StyledButtonToggle } from '../../styles/StyledHeader'

export default function Header(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <StyledHeader isOpen={sidebarOpen}>
        <img className='logo' src={logo} alt='Logo'></img>

        <StyledButtonToggle onClick={() => {setSidebarOpen(!sidebarOpen)}}>
          {sidebarOpen === true ? <i className="fas fa-times"></i> : <i className='fas fa-bars'></i>}
        </StyledButtonToggle>
      </StyledHeader>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setShowContainer={props.setShowContainer} />
    </>
  )
}
