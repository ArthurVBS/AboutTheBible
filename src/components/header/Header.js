import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

export default function Header(props) {
  const [navOpen, setNavOpen] = useState(false)

  function setSelected(id){
    let buttonItems = document.querySelectorAll('.buttonItem')
    let buttonSelected = document.getElementById(id)

    buttonItems.forEach((item) => (
      item.classList.remove('selected')
    ))

    buttonSelected.classList.add('selected')
  }

  function handleClick(name){
    props.setShowContainer(name)

    setSelected(name)
  }

  return (
    <>
      <header className={`header ${navOpen == true ? 'activate' : 'disable'}`}>
        <img className='logo' src={logo} alt='Logo'></img>

        <button
          className='menu'
          onClick={() => {setNavOpen(!navOpen)}}
        >
          {navOpen == true ? <i className="fas fa-times"></i> : <i className='fas fa-bars'></i>}
        </button>
      </header>

      <nav
        className={`navigation ${navOpen == true ? 'activate' : 'disable'}`} 
        onClick={() => {setNavOpen(!navOpen)}}
      >
        <div className='buttonWrapper'>
          <button id='about' className='buttonItem' onClick={() => handleClick('about')}>About</button>
          <button id='organization' className='buttonItem selected' onClick={() => handleClick('organization')}>Organization</button>
          <button id='books' className='buttonItem' onClick={() => console.log('Wait... In progress')}>Books</button>
        </div>

        <div className='linkWrapper'>
          <a href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer' className='linkItem'>
            <i className="fab fa-github"></i>
          </a>
          <a href='https://www.linkedin.com/in/arthurvbs/' target='_blank' rel='external noreferrer' className='linkItem'>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </nav>
    </>
  )
}
