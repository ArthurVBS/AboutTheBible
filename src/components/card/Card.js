import { StyledCard, StyledDetails, StyledBooksContainer, StyledBooks } from './Styled'

export default function Card(props) {
  const books = props.books
  const testament = props.testament

  return (
    <StyledCard color={testament === 'new' ? 'primary' : 'secondary'}>
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
