import Sidebar from '../Sidebar/Sidebar'
import { StyledHeader, StyledButtonToggle } from './Styled'

export default function Header(props) {
  return (
    <>
      <StyledHeader id='header' isOpen={props.sidebarOpen}>
        <h1 style={{color: '#7244DD'}}><i className="fas fa-book-reader"></i> The Bible</h1>

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
