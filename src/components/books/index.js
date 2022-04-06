import React, { useState, useEffect } from 'react'
import Aos from 'aos'

import DropdownMenu from '../DropdownMenu'

import { Container, Title, Section, Box } from './styled'

export default function Books() {
  const [bookInfo, setBookInfo] = useState({
    title: 'Book',
    author: 'Author',
    testament: '',
    group: 'Group',
    timeline: 'Timeline',
    paragraph: 'Description'
  })

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <Container>
      <Title data-aos="fade-right">Choose a book <i className="fas fa-book"></i></Title>

      <Section>
        <DropdownMenu bookInfo={bookInfo} setBookInfo={setBookInfo} />
        <p>{bookInfo.paragraph}</p>

        <Box>
          <h5><i className="fas fa-feather-alt"></i> {bookInfo.author}</h5>
          <h5>{bookInfo.testament === 'Old' ? <i className="fas fa-star-of-david"></i> : <i className="fas fa-cross"></i>} {bookInfo.testament} Testament</h5>
          <h5><i className="far fa-bookmark"></i> {bookInfo.group}</h5>
          <h5><i className="far fa-clock"></i> {bookInfo.timeline}</h5>
        </Box>

      </Section>
    </Container>
  )
}
