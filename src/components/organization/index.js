import React, { useEffect } from 'react'
import Aos from 'aos'

import Card from '../Card'
import { Container, Index, Section } from './styled'

export default function Organization() {
  const jsonGroupsData = require('../../Groups.json')

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <Container>
      <Index>
        <a href='#oldTestament'><span>Old</span> Testament</a>
        <span>|</span>
        <a href='#newTestament'><span>New</span> Testament</a>
      </Index>

      <Section id='oldTestament' color={'secondary'}>
        <h1 data-aos="slide-right">Old Testament</h1>

        {jsonGroupsData['old testament'].map((value, index) => {
          return <Card key={index} testament={value.testament} name={value.group} books={value.books}>{value.description}</Card>
        })}
      </Section>

      <Section id='newTestament' color={'primary'}>
        <h1 data-aos="slide-right">New Testament</h1>

        {jsonGroupsData['new testament'].map((value, index) => {
          return <Card key={index} testament={value.testament} name={value.group} books={value.books}>{value.description}</Card>
        })}
      </Section>
    </Container>
  )
}
