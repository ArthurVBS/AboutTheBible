import { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import logo from '../../assets/logo.png'
import './Header.css'

export default function Header(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header className={`header ${sidebarOpen === true ? 'activate' : 'disable'}`}>
        <img className='logo' src={logo} alt='Logo'></img>

        <button
          className='menu'
          onClick={() => {setSidebarOpen(!sidebarOpen)}}
        >
          {sidebarOpen === true ? <i className="fas fa-times"></i> : <i className='fas fa-bars'></i>}
        </button>
      </header>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setShowContainer={props.setShowContainer} />
    </>
  )
}
