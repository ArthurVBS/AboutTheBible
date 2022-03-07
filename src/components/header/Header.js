import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

export default function Header(props) {
  function handleClickAbout(){
    props.setShowContainer('About')
    
    document.getElementById('organization').classList.remove('selected')
    document.getElementById('about').classList.add('selected')
  }

  function handleClickOrganization(){
    props.setShowContainer('Organization')

    document.getElementById('about').classList.remove('selected')
    document.getElementById('organization').classList.add('selected')
  }

  return (
    <header className='header'>
      <img className='logo' src={logo} alt='Logo'></img>

      <nav className='navigation'>
        <button id='about' className='link selected' onClick={() => handleClickAbout()}>About</button>
        <button id='organization' className='link' onClick={() => handleClickOrganization()}>Organization</button>
      </nav>

      <a href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer' className='icon'>
        <i className="fab fa-github"></i>
      </a>
    </header>
  )
}
