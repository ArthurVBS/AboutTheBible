import { useState } from 'react'
import { StyledSectionBooks, StyledSectionInfo } from '../../styles/StyledSection'
import { StyledButton, StyledButtonContainer, } from '../../styles/StyledButton'
import { StyledGridBox } from "../../styles/StyledGridBox"

export default function Books(){
  const [bookInfo, setBookInfo] = useState({title : 'Book', author : 'Author', testament : '', group : 'Group', timeline : 'Timeline', paragraph : 'Description'})

  function handleClickBooks(title, author, testament, group, timeline, paragraph){
    setBookInfo({title : title, author : author, testament : testament, group : group, timeline : timeline, paragraph : paragraph})
  }

  return(
    <StyledSectionBooks>
      <h1>Choose a book</h1>
      <StyledButtonContainer>
        <StyledButton onClick={() => {handleClickBooks(
          'Genesis', 'Moses', 'Old', 'Pentateuch', 'Creation to 1800 b.c', 'Genesis is a book of beginnings that introduces central themes of the Bible, such as creation and redemption.')}}>Genesis</StyledButton>

        <StyledButton onClick={() => {handleClickBooks(
          'Exodus', 'Moses', 'Old', 'Pentateuch', '1446 b.c to 1406 b.c', 'God reveals himself to his people and delivers them from slavery in Egypt to establish a covenant with them in the desert.')}}>Exodus</StyledButton>

        <StyledButton onClick={() => {handleClickBooks(
          'Leviticus', 'Moses', 'Old', 'Pentateuch', '1446 b.c to 1406 b.c', 'The Israelites receive instructions from God at the base of Mount Sinai concerning how to live as God`s holy people.')}}>Leviticus</StyledButton>

        <StyledButton onClick={() => {handleClickBooks(
          'Acts', 'Luke', 'New', 'Historical Books', 'About 63 a.c or later', 'Luke shows how the gospel spread rapidly from Jerusalem to the whole Roman Empire, and from its Jewish roots to the Gentile world.')}}>Acts</StyledButton>
      </StyledButtonContainer>
      
      <StyledSectionInfo>
        <h2>{bookInfo.title}</h2>
        <p>{bookInfo.paragraph}</p>

        <StyledGridBox>
          <h5><i className="fas fa-feather-alt"></i> {bookInfo.author}</h5>
          <h5>{bookInfo.testament === 'Old'? <i className="fas fa-star-of-david"></i> : <i className="fas fa-cross"></i>} {bookInfo.testament} Testament</h5>
          <h5><i className="far fa-bookmark"></i> {bookInfo.group}</h5>
          <h5><i className="far fa-clock"></i> {bookInfo.timeline}</h5>
        </StyledGridBox>
      </StyledSectionInfo>
    </StyledSectionBooks>
  )
}