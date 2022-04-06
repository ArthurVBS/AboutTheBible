import React, { useState } from 'react'
import { Container, Toggle, Menu } from './styled'

export default function MenuDropdown(props) {
  const jsonBooksData = require('../../Books.json')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClickBooks = (value) => {
    props.setBookInfo({
      title: value.book,
      author: value.author,
      testament: value.testament,
      group: value.group,
      timeline: value.timeline,
      paragraph: value.description
    })
  }

  return (
    <Container>
      <Toggle isOpen={menuOpen} onClick={() => (setMenuOpen(menuOpen => !menuOpen))}>
        <span>{props.bookInfo.title}</span>
        <i className="fas fa-angle-down"></i>
      </Toggle>

      <Menu isOpen={menuOpen} onClick={() => (setMenuOpen(menuOpen => !menuOpen))}>
        <span><i className="fas fa-angle-up"></i></span>

        {jsonBooksData.map((value, index) => {
          return <button key={index} onClick={() => handleClickBooks(value)}>{value.book}</button>
        })}
      </Menu>
    </Container>
  )
}
