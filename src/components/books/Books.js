import { useState } from 'react'
import { StyledSectionBooks, StyledSectionInfo } from '../../styles/StyledSection'
import { StyledGridBox } from "../../styles/StyledGridBox"
import MenuDropdown from '../menuDropdown/MenuDropdown'

export default function Books(){
  const [bookInfo, setBookInfo] = useState({title : 'Book', author : 'Author', testament : '', group : 'Group', timeline : 'Timeline', paragraph : 'Description'})

  return(
    <StyledSectionBooks>
      <h1>Choose a book</h1>

      <MenuDropdown bookInfo={bookInfo} setBookInfo={setBookInfo} />
      
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
