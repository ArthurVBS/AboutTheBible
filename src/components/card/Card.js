import { useEffect } from 'react'
import Aos from 'aos'

import { StyledCard, StyledDetails, StyledBooksContainer, StyledBooks } from './Styled'

export default function Card(props) {
  const books = props.books
  const testament = props.testament

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <StyledCard color={testament === 'new' ? 'primary' : 'secondary'} data-aos="fade-up">
      <h2> {props.name}</h2>
      <p>{props.children}</p>

      <StyledDetails color={testament === 'new' ? 'primary' : 'secondary'}>
        <summary>See the Books</summary>

        <StyledBooksContainer>
          {books.map((book, i) => (
            <StyledBooks key={i}>{book}</StyledBooks>
          ))}
        </StyledBooksContainer>

      </StyledDetails>
    </StyledCard>
  )
}
