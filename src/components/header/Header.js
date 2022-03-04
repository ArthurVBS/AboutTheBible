import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <img className='logo' src='./logo.png' alt='Logo'></img>

      <nav className='navigation'>
        <a href='#' className='link selected'>About</a>
        <a href='#' className='link'>Organization</a>
      </nav>

      <a href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer' className='icon'>
        <i className="fab fa-github"></i>
      </a>
    </header>
  )
}
