import { useState } from 'react'
import { StyledSectionBooks, StyledSectionInfo } from '../../styles/StyledSection'
import { StyledButton, StyledButtonContainer, } from '../../styles/StyledButton'
import { StyledGridBox } from "../../styles/StyledGridBox"

export default function Books(){
  const jsonData = require('../../Books.json')
  const [bookInfo, setBookInfo] = useState({title : 'Book', author : 'Author', testament : '', group : 'Group', timeline : 'Timeline', paragraph : 'Description'})

  function handleClickBooks(title, author, testament, group, timeline, paragraph){
    setBookInfo({title : title, author : author, testament : testament, group : group, timeline : timeline, paragraph : paragraph})
  }

  return(
    <StyledSectionBooks>
      <h1>Choose a book</h1>
      <StyledButtonContainer>

        {jsonData.map((value, index) => {
          return <StyledButton key={index} onClick={() => handleClickBooks(value.book, value.author, value.testament, value.group, value.timeline, value.description)}>{value.book}</StyledButton>
        })}

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
