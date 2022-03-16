import { useState } from 'react'
import { StyledMenu, StyledMenuToggle, StyledMenuContainer } from '../../styles/StyledMenu'

export default function MenuDropdown(props) {
  const jsonBooksData = require('../../Books.json')
  const [menuOpen, setMenuOpen] = useState(false)

  function handleClickBooks(title, author, testament, group, timeline, paragraph){
    props.setBookInfo({title : title, author : author, testament : testament, group : group, timeline : timeline, paragraph : paragraph})
  }

  return(
    <StyledMenuContainer>
      <StyledMenuToggle isOpen={menuOpen} onClick={() => (setMenuOpen(!menuOpen))}>
        <span>{props.bookInfo.title}</span>
        <i className="fas fa-angle-down"></i>
      </StyledMenuToggle>

      <StyledMenu isOpen={menuOpen} onClick={() => (setMenuOpen(!menuOpen))}>
        <span><i className="fas fa-angle-up"></i></span>
        {jsonBooksData.map((value, index) => {
          return <button key={index} onClick={() => handleClickBooks(value.book, value.author, value.testament, value.group, value.timeline, value.description)}>{value.book}</button>
        })}
      </StyledMenu>
    </StyledMenuContainer>
  )
}