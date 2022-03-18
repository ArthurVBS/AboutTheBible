import { useState } from 'react'
import { StyledMenu, StyledToggle, StyledContainer } from './Styled'

export default function MenuDropdown(props) {
  const jsonBooksData = require('../../Books.json')
  const [menuOpen, setMenuOpen] = useState(false)

  function handleClickBooks(title, author, testament, group, timeline, paragraph){
    props.setBookInfo({title : title, author : author, testament : testament, group : group, timeline : timeline, paragraph : paragraph})
  }

  return(
    <StyledContainer>
      <StyledToggle isOpen={menuOpen} onClick={() => (setMenuOpen(!menuOpen))}>
        <span>{props.bookInfo.title}</span>
        <i className="fas fa-angle-down"></i>
      </StyledToggle>

      <StyledMenu isOpen={menuOpen} onClick={() => (setMenuOpen(!menuOpen))}>
        <span><i className="fas fa-angle-up"></i></span>
        {jsonBooksData.map((value, index) => {
          return <button key={index} onClick={() => handleClickBooks(value.book, value.author, value.testament, value.group, value.timeline, value.description)}>{value.book}</button>
        })}
      </StyledMenu>
    </StyledContainer>
  )
}
