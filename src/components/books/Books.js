import { useState } from 'react'
import { CardS } from "../../styles/CardS"
import { TitleS } from "../../styles/TitleS"
import { ButtonS } from '../../styles/ButtonS'
import { WrapperFlexS, WrapperGridS } from "../../styles/WrapperS"

export default function Books(){
  const [title, setTitle] = useState('Genesis')
  const [author, setAuthor] = useState('Moses')
  const [testament, setTestament] = useState('Old')
  const [group, setGroup] = useState('Pentateuch')
  const [paragraph, setParagraph] = useState('Description')
  const [timelineStart, setTimelineStart] = useState('40 b.c.')
  const [timelineFinish, setTimelineFinish] = useState('70 b.c.')

  function handleClickBooks(newTitle, newAuthor, newTestament, newGroup){
    setTitle(newTitle)
    setAuthor(newAuthor)
    setTestament(newTestament)
    setGroup(newGroup)
  }

  return(
    <section>
      <TitleS>Choose a book</TitleS>
      <WrapperFlexS>
        <ButtonS onClick={() => {handleClickBooks('Genesis', 'Moses', 'Old', 'Pentateuch')}}>Genesis</ButtonS>
        <ButtonS onClick={() => {handleClickBooks('Exodus', 'Moses', 'Old', 'Pentateuch')}}>Exodus</ButtonS>
        <ButtonS onClick={() => {handleClickBooks('Leviticus', 'Moses', 'Old', 'Pentateuch')}}>Leviticus</ButtonS>
        <ButtonS onClick={() => {handleClickBooks('Acts', 'Luke', 'New', 'Historical Books')}}>Acts</ButtonS>
      </WrapperFlexS>
      
      <WrapperFlexS>
        <CardS>
          <h2>{title}</h2>
          <p>{paragraph}</p>

          <WrapperGridS>
            <h5><i className="fas fa-feather-alt"></i> {author}</h5>
            <h5>{testament === 'Old'? <i className="fas fa-star-of-david"></i> : <i className="fas fa-cross"></i>} {testament} Testament</h5>
            <h5><i className="far fa-bookmark"></i> {group}</h5>
            <h5><i className="far fa-clock"></i> {timelineStart} to {timelineFinish}</h5>
          </WrapperGridS>
        </CardS>
      </WrapperFlexS>
    </section>
  )
}