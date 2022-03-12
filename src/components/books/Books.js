import { useState } from 'react'
import { CardS, ContainerCardS } from "../../styles/CardS"
import { TitleS } from "../../styles/TitleS"
import { ButtonS, ContainerButtonS } from '../../styles/ButtonS'
import { BoxInfoS, ContainerBoxInfoS } from "../../styles/BoxInfoS"

export default function Books(){
  const [bookInfo, setBookInfo] = useState({title : 'Book', author : 'Author', testament : '', group : 'Group', timeline : 'Timeline', paragraph : 'Description'})

  function handleClickBooks(title, author, testament, group, timeline, paragraph){
    setBookInfo({title : title, author : author, testament : testament, group : group, timeline : timeline, paragraph : paragraph})
  }

  return(
    <section>
      <TitleS>Choose a book</TitleS>
      <ContainerButtonS>
        <ButtonS onClick={() => {handleClickBooks(
          'Genesis', 'Moses', 'Old', 'Pentateuch', 'Creation to 1800 b.c', 'Genesis is a book of beginnings that introduces central themes of the Bible, such as creation and redemption.')}}>Genesis</ButtonS>

        <ButtonS onClick={() => {handleClickBooks(
          'Exodus', 'Moses', 'Old', 'Pentateuch', '1446 b.c to 1406 b.c', 'God reveals himself to his people and delivers them from slavery in Egypt to establish a covenant with them in the desert.')}}>Exodus</ButtonS>

        <ButtonS onClick={() => {handleClickBooks(
          'Leviticus', 'Moses', 'Old', 'Pentateuch', '1446 b.c to 1406 b.c', 'The Israelites receive instructions from God at the base of Mount Sinai concerning how to live as God`s holy people.')}}>Leviticus</ButtonS>

        <ButtonS onClick={() => {handleClickBooks(
          'Acts', 'Luke', 'New', 'Historical Books', 'About 63 a.c or later', 'Luke shows how the gospel spread rapidly from Jerusalem to the whole Roman Empire, and from its Jewish roots to the Gentile world.')}}>Acts</ButtonS>
      </ContainerButtonS>
      
      <ContainerCardS>
        <CardS>
          <h2>{bookInfo.title}</h2>
          <p>{bookInfo.paragraph}</p>

          <ContainerBoxInfoS>
            <BoxInfoS><i className="fas fa-feather-alt"></i> {bookInfo.author}</BoxInfoS>
            <BoxInfoS>{bookInfo.testament === 'Old'? <i className="fas fa-star-of-david"></i> : <i className="fas fa-cross"></i>} {bookInfo.testament} Testament</BoxInfoS>
            <BoxInfoS><i className="far fa-bookmark"></i> {bookInfo.group}</BoxInfoS>
            <BoxInfoS><i className="far fa-clock"></i> {bookInfo.timeline}</BoxInfoS>
          </ContainerBoxInfoS>
        </CardS>
      </ContainerCardS>
    </section>
  )
}