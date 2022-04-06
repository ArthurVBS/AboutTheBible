import React, { useEffect } from 'react'
import Aos from 'aos'

import { Container, Details, WrapperBooks, Books } from './styled'

export default function Card(props) {
  const books = props.books
  const testament = props.testament

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <Container color={testament === 'new' ? 'primary' : 'secondary'} data-aos="fade-up">
      <h2>{props.name}</h2>
      <p>{props.children}</p>

      <Details color={testament === 'new' ? 'primary' : 'secondary'}>
        <summary>See the Books</summary>

        <WrapperBooks>
          {books.map((book, i) => (
            <Books key={i}>{book}</Books>
          ))}
        </WrapperBooks>
      </Details>
    </Container>
  )
}
