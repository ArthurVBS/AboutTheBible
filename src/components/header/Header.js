import Sidebar from '../sidebar/Sidebar'
import logo from '../../assets/logo.png'
import { StyledHeader, StyledButtonToggle } from '../../styles/StyledHeader'

export default function Header(props) {
  return (
    <>
      <StyledHeader id='header' isOpen={props.sidebarOpen}>
        <img className='logo' src={logo} alt='Logo' />
        
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
