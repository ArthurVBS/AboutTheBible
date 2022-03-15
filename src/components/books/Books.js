import { useState } from 'react'
import { StyledSectionBooks, StyledSectionInfo } from '../../styles/StyledSection'
import { StyledGridBox } from "../../styles/StyledGridBox"
import { StyledSelectContainer, StyledSelect } from '../../styles/StyledSelect'

export default function Books(){
  const jsonBooksData = require('../../Books.json')
  const [bookInfo, setBookInfo] = useState({title : 'Book', author : 'Author', testament : '', group : 'Group', timeline : 'Timeline', paragraph : 'Description'})

  function handleChange(event){
    const values = event.target.value.split(';')
    setBookInfo({title : values[0], author : values[1], testament : values[2], group : values[3], timeline : values[4], paragraph : values[5]})
  }

  return(
    <StyledSectionBooks>
      <h1>Choose a book</h1>

      <StyledSelectContainer>

        <StyledSelect id='inputText' defaultValue={`Book; Author; ; Group; Timeline; Description;`} onClick={(e) => handleChange(e)}>
          <option value={`Book; Author; ; Group; Timeline; Description;`} disabled></option>

          {jsonBooksData.map((value, index) => {
            return <option key={index} value={`${value.book}; ${value.author}; ${value.testament}; ${value.group}; ${value.timeline}; ${value.description};`}>{value.book}</option>
          })}
          
        </StyledSelect>

      </StyledSelectContainer>
      
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
