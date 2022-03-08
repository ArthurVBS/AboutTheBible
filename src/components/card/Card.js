import React from 'react'
import './Card.css'

export default function Card(props) {
  const books = props.books
  const testament = props.testament

  return (
    <div className={'card ' + testament}>
      <h2 className='cardTitle'> {props.name}</h2>

      
      <p className='cardParagraph'>
        {props.children}
      </p>

      <details className='cardDetails'>
        <summary className='cardSummary'>See the Books</summary>
        <div className='bookWrapper'>
          {books.map((book, i) => (
            <h5 key={i} className='bookItem'>{book}</h5>
          ))}
        </div>
      </details>
    </div>
  )
}
