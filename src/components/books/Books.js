import { useState, useEffect } from 'react'
import Aos from 'aos'

import DropdownMenu from '../DropdownMenu/DropdownMenu'

import { StyledTitle, StyledSectionInfo, StyledGridBox } from './Styled'

export default function Books() {
  const [bookInfo, setBookInfo] = useState({ title: 'Book', author: 'Author', testament: '', group: 'Group', timeline: 'Timeline', paragraph: 'Description' })

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <>
      <StyledTitle data-aos="fade-right">Choose a book</StyledTitle>

      <DropdownMenu bookInfo={bookInfo} setBookInfo={setBookInfo} />

      <StyledSectionInfo>
        <h2>{bookInfo.title}</h2>
        <p>{bookInfo.paragraph}</p>

        <StyledGridBox>
          <h5><i className="fas fa-feather-alt"></i> {bookInfo.author}</h5>
          <h5>{bookInfo.testament === 'Old' ? <i className="fas fa-star-of-david"></i> : <i className="fas fa-cross"></i>} {bookInfo.testament} Testament</h5>
          <h5><i className="far fa-bookmark"></i> {bookInfo.group}</h5>
          <h5><i className="far fa-clock"></i> {bookInfo.timeline}</h5>
        </StyledGridBox>

      </StyledSectionInfo>
    </>
  )
}
