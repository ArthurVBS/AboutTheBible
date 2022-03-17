import { StyledCard, StyledDetails, StyledBooksContainer, StyledBooks } from '../../styles/StyledCard-Books'
import { Fade } from 'react-reveal'
import { useState } from 'react'

export default function Card(props) {
  const books = props.books
  const testament = props.testament
  const [show, setShow] = useState(false)

  function handleClick(){
    setShow(!show)
  }

  return (
    <StyledCard color={testament === 'new' ? 'primary' : 'secondary'}>
      <h2> {props.name}</h2>
      <p>{props.children}</p>

      <StyledDetails onClick={() => handleClick()} color={testament === 'new' ? 'primary' : 'secondary'}>
        <summary>See the Books</summary>

        <StyledBooksContainer>
          {books.map((book, i) => (
            <StyledBooks key={i}><Fade top cascade collapse when={show}>{book}</Fade></StyledBooks>
          ))}
        </StyledBooksContainer>

      </StyledDetails>
    </StyledCard>
  )
}
